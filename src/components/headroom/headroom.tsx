import {
  component$,
  PropFunction,
  Slot,
  useClientEffect$,
  useRef,
  useStore,
} from "@builder.io/qwik";
import CSS from "csstype";
import raf from "raf";
import { shouldUpdate, States } from "./shouldUpdate";
import { supportsPassiveEvents } from "./supportsPassiveEvents";

export interface HeadroomProps {
  className?: string;
  parent$?: PropFunction<() => HTMLElement | Window>;
  //   children: PropTypes.any.isRequired,
  disableInlineStyles?: boolean;
  disable?: boolean;
  pin?: boolean;
  upTolerance?: number;
  downTolerance?: number;
  onPin$?: PropFunction<() => void>;
  onUnpin$?: PropFunction<() => void>;
  onUnfix$?: PropFunction<() => void>;
  wrapperStyle?: CSS.Properties;
  pinStart?: number;
  style?: CSS.Properties;
  calcHeightOnResize?: boolean;
  tag?: keyof JSX.IntrinsicElements;
}

interface HeadroomState {
  state: States;
  translateY: string;
  className: string;
  animation: boolean;
  height: number;
  currentScrollY: number;
  lastKnownScrollY: number;
  scrollTicking: boolean;
  resizeTicking: boolean;
}

export const Headroom = component$((props: HeadroomProps) => {
  const state = useStore<HeadroomState>({
    state: "unfixed",
    translateY: "0",
    className: "headroom headroom--unfixed",
    animation: true,
    height: 0,
    currentScrollY: 0,
    lastKnownScrollY: 0,
    scrollTicking: false,
    resizeTicking: false,
  });
  const ref = useRef<HTMLDivElement>();

  if (props.disable && state.state !== "unfixed") {
    state.translateY = "0";
    state.className = "headroom headroom--unfixed headroom-disable-animation";
    state.animation = false;
    state.state = "unfixed";
  }

  useClientEffect$(async () => {
    const getScrollY = async () => {
      if (props.parent$) {
        const parentElement = await props.parent$();
        if (
          parentElement instanceof Window &&
          parentElement.scrollY !== undefined
        ) {
          return parentElement.scrollY;
        } else if (
          parentElement instanceof HTMLElement &&
          parentElement.scrollTop !== undefined
        ) {
          return parentElement.scrollTop;
        }
      }

      return (
        document.documentElement ||
        document.body.parentNode ||
        document.body
      ).scrollTop;
    };

    const getViewportHeight = () =>
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    const getDocumentHeight = () => {
      const body = document.body;
      const documentElement = document.documentElement;

      return Math.max(
        body.scrollHeight,
        documentElement.scrollHeight,
        body.offsetHeight,
        documentElement.offsetHeight,
        body.clientHeight,
        documentElement.clientHeight
      );
    };

    const getElementPhysicalHeight = (elm: HTMLElement) =>
      Math.max(elm.offsetHeight, elm.clientHeight);

    const getElementHeight = (elm: HTMLElement) =>
      Math.max(elm.scrollHeight, elm.offsetHeight, elm.clientHeight);

    const getScrollerPhysicalHeight = async () => {
      if (!props.parent$) return getViewportHeight();
      const parentElement = await props.parent$();

      return parentElement === window || parentElement === document.body
        ? getViewportHeight()
        : getElementPhysicalHeight(parentElement as HTMLElement);
    };

    const getScrollerHeight = async () => {
      if (!props.parent$) return getDocumentHeight();

      const parentElement = await props.parent$();

      return parentElement === window || parentElement === document.body
        ? getDocumentHeight()
        : getElementHeight(parentElement as HTMLElement);
    };

    const isOutOfBound = async (currentScrollY: number) => {
      const pastTop = currentScrollY < 0;

      const scrollerPhysicalHeight = await getScrollerPhysicalHeight();
      const scrollerHeight = await getScrollerHeight();

      const pastBottom =
        currentScrollY + scrollerPhysicalHeight > scrollerHeight;

      return pastTop || pastBottom;
    };

    const unpin = () => {
      if (props.onUnpin$) props.onUnpin$();

      state.translateY = "-100%";
      state.className = "headroom headroom--unpinned";
      state.animation = true;
      state.state = "unpinned";
    };

    const unpinSnap = () => {
      if (props.onUnpin$) props.onUnpin$();

      state.translateY = "-100%";
      state.className =
        "headroom headroom--unpinned headroom-disable-animation";
      state.animation = false;
      state.state = "unpinned";
    };

    const pin = () => {
      if (props.onPin$) props.onPin$();

      state.translateY = "0";
      state.className = "headroom headroom--pinned";
      state.animation = true;
      state.state = "pinned";
    };

    const unfix = () => {
      if (props.onUnfix$) props.onUnfix$();
      state.translateY = "0";
      state.className = "headroom headroom--unfixed headroom-disable-animation";
      state.animation = false;
      Promise.resolve().then(() => {
        state.state = "unfixed";
      });
    };

    const update = async () => {
      state.currentScrollY = await getScrollY();

      const outOfBounds = await isOutOfBound(state.currentScrollY);
      if (!outOfBounds) {
        const { action } = shouldUpdate(
          state.lastKnownScrollY,
          state.currentScrollY,
          props,
          state
        );

        if (action === "pin") {
          pin();
        } else if (action === "unpin") {
          unpin();
        } else if (action === "unpin-snap") {
          unpinSnap();
        } else if (action === "unfix") {
          unfix();
        }
      }

      state.lastKnownScrollY = state.currentScrollY;
      state.scrollTicking = false;
    };

    const setHeightOffset = () => {
      state.height = ref.current?.offsetHeight || 0;
      state.resizeTicking = false;
    };
    setHeightOffset();

    const eventListenerOptions = supportsPassiveEvents()
      ? { passive: true, capture: false }
      : false;

    if (props.disable) return;

    const parentElement = (await props.parent$?.()) || window;

    const handleScroll = () => {
      if (!state.scrollTicking) {
        state.scrollTicking = true;
        raf(update);
      }
    };

    const handleResize = () => {
      if (!state.resizeTicking) {
        state.resizeTicking = true;
        raf(setHeightOffset);
      }
    };

    parentElement.addEventListener(
      "scroll",
      handleScroll,
      eventListenerOptions
    );

    if (props.calcHeightOnResize) {
      parentElement.addEventListener(
        "resize",
        handleResize,
        eventListenerOptions
      );
    }

    return () => {
      parentElement.removeEventListener(
        "scroll",
        handleScroll,
        eventListenerOptions
      );
      parentElement.removeEventListener(
        "resize",
        handleResize,
        eventListenerOptions
      );
    };
  });

  const Tag: keyof JSX.IntrinsicElements = props.tag || "div";

  let innerStyle: CSS.Properties = {
    position: props.disable || state.state === "unfixed" ? "relative" : "fixed",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "1",
    WebkitTransform: `translate3D(0, ${state.translateY}, 0)`,
    msTransform: `translate3D(0, ${state.translateY}, 0)`,
    transform: `translate3D(0, ${state.translateY}, 0)`,
  };

  let className = state.className;

  // Don't add css transitions until after we've done the initial
  // negative transform when transitioning from 'unfixed' to 'unpinned'.
  // If we don't do this, the header will flash into view temporarily
  // while it transitions from 0 — -100%.
  if (state.animation) {
    innerStyle = {
      ...innerStyle,
      WebkitTransition: "all .2s ease-in-out",
      MozTransition: "all .2s ease-in-out",
      OTransition: "all .2s ease-in-out",
      transition: "all .2s ease-in-out",
    };
    className += " headroom--scrolled";
  }

  if (!props.disableInlineStyles) {
    innerStyle = {
      ...innerStyle,
      ...props.style,
    };
  } else {
    innerStyle = props.style || {};
  }

  const wrapperStyles = {
    ...props.wrapperStyle,
    height: state.height ? `${state.height}px` : null,
  };

  const wrapperClassName = props.className
    ? `${props.className} headroom-wrapper`
    : "headroom-wrapper";

  return (
    <Tag
      style={wrapperStyles as Record<string, string | number>}
      className={wrapperClassName}
    >
      <div
        ref={ref}
        style={innerStyle as Record<string, string | number>}
        className={className}
      >
        <Slot />
      </div>
    </Tag>
  );
});
