import {
  component$,
  PropFunction,
  useClientEffect$,
  useRef,
  useStyles$,
} from "@builder.io/qwik";
import CSS from "csstype";
import Typed from "typed.js";
import animatedCursor from "./animatedCursor.css";

export interface QwikTypedProps {
  /** styles for the outer element */
  style?: CSS.Properties;
  /** class name for the outer element */
  className?: string;
  /** typedRef() returns the Typed instance */
  typedRef?: PropFunction<(typed: Typed) => void>;
  /** initialize in stopped state */
  stopped?: boolean;
  /** strings to be typed */
  strings?: string[];
  /**  type speed in milliseconds */
  typeSpeed?: number;
  /** time before typing starts in milliseconds */
  startDelay?: number;
  /** backspacing speed in milliseconds */
  backSpeed?: number;
  /**  only backspace what doesn't match the previous string */
  smartBackspace?: boolean;
  /** shuffle the strings */
  shuffle?: boolean;
  /** time before backspacing in milliseconds */
  backDelay?: number;
  /** Fade out instead of backspace */
  fadeOut?: boolean;
  /** css class for fade animation */
  fadeOutClass?: string;
  /** Fade out delay in milliseconds */
  fadeOutDelay?: number;
  /** loop the strings */
  loop?: boolean;
  /** amount of loops */
  loopCount?: number;
  /** show cursor */
  showCursor?: boolean;
  /** character for cursor */
  cursorChar?: string;
  /** insert CSS for cursor and fadeOut into HTML */
  autoInsertCss?: boolean;
  /** attribute for typing Ex: input placeholder, value, or just HTML text */
  attr?: string;
  /**  bind to focus and blur if el is text input */
  bindInputFocusEvents?: boolean;
  /**  'html' or 'null' for plaintext */
  contentType?: "html";
  /** onComplete() All typing is complete */
  onComplete?: PropFunction<() => void>;
  /** preStringTyped(arrayPos: number) Before each string is typed */
  preStringTyped?: PropFunction<(arrayPos: number) => void>;
  /** onStringTyped(arrayPos: number) After each string is typed */
  onStringTyped?: PropFunction<(arrayPos: number) => void>;
  /** onLastStringBackspaced() During looping, after last string is typed */
  onLastStringBackspaced?: PropFunction<() => void>;
  /** onTypingPaused(arrayPos: number) Typing has been stopped */
  onTypingPaused?: PropFunction<(arrayPos: number) => void>;
  /** onTypingResumed(arrayPos: number) Typing has been started after being stopped */
  onTypingResumed?: PropFunction<(arrayPos: number) => void>;
  /** onReset() After reset */
  onReset?: PropFunction<() => void>;
  /** onStop(arrayPos: number)    After stop */
  onStop?: PropFunction<(arrayPos: number) => void>;
  /** onStart(arrayPos: number) After start */
  onStart?: PropFunction<(arrayPos: number) => void>;
  /** onDestroy() After destroy */
  onDestroy?: PropFunction<() => void>;
}
export const QwikTyped = component$((props: QwikTypedProps) => {
  const ref = useRef();
  useStyles$(animatedCursor);

  useClientEffect$(({ track }) => {
    track(ref);
    track(props);

    if (!ref.current) return;

    const typed = new Typed(ref.current, props);
    if (props.typedRef) {
      props.typedRef(typed);
    }

    return () => typed.destroy();
  });

  return (
    <span
      style={props.style as Record<string, string | number>}
      className={props.className}
    >
      <span ref={ref} />
    </span>
  );
});
