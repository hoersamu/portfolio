type Actions = "none" | "pin" | "unpin" | "unpin-snap" | "unfix";
export type States = "pinned" | "unfixed" | "unpinned";
type ScrollDirections = "up" | "down";

export const shouldUpdate: (
  lastKnownScrollY: number,
  currentScrollY: number,
  props: {
    disable?: boolean;
    pinStart?: number;
    pin?: boolean;
    upTolerance?: number;
    downTolerance?: number;
  },
  state: { state: States; height: number }
) => {
  action: Actions;
  scrollDirection: ScrollDirections;
  distanceScrolled: number;
} = (lastKnownScrollY = 0, currentScrollY = 0, props = {}, state) => {
  const scrollDirection: ScrollDirections =
    currentScrollY >= lastKnownScrollY ? "down" : "up";
  const distanceScrolled = Math.abs(currentScrollY - lastKnownScrollY);

  const shouldUpdateObject = (action: Actions) => ({
    action,
    scrollDirection,
    distanceScrolled,
  });
  // We're disabled
  if (props.disable) {
    return shouldUpdateObject("none");
    // We're pinned
  } else if (props.pin) {
    return shouldUpdateObject(state.state !== "pinned" ? "pin" : "none");
    // We're at the top and not fixed yet.
  } else if (
    currentScrollY <= (props.pinStart || 0) &&
    state.state !== "unfixed"
  ) {
    return shouldUpdateObject("unfix");
    // We're unfixed and headed down. Carry on.
  } else if (
    currentScrollY <= state.height &&
    scrollDirection === "down" &&
    state.state === "unfixed"
  ) {
    return shouldUpdateObject("none");
  } else if (
    currentScrollY > state.height + (props.pinStart || 0) &&
    scrollDirection === "down" &&
    state.state === "unfixed"
  ) {
    return shouldUpdateObject("unpin-snap");
    // We're past the header and scrolling down.
    // We transition to "unpinned" if necessary.
  } else if (
    scrollDirection === "down" &&
    ["pinned", "unfixed"].indexOf(state.state) >= 0 &&
    currentScrollY > state.height + (props.pinStart || 0) &&
    distanceScrolled > (props.downTolerance || 0)
  ) {
    return shouldUpdateObject("unpin");
    // We're scrolling up, we transition to "pinned"
  } else if (
    scrollDirection === "up" &&
    distanceScrolled > (props.upTolerance || 4) &&
    ["pinned", "unfixed"].indexOf(state.state) < 0
  ) {
    return shouldUpdateObject("pin");
    // We're scrolling up, and inside the header.
    // We transition to pin regardless of upTolerance
  } else if (
    scrollDirection === "up" &&
    currentScrollY <= state.height &&
    ["pinned", "unfixed"].indexOf(state.state) < 0
  ) {
    return shouldUpdateObject("pin");
  } else {
    return shouldUpdateObject("none");
  }
};
