/**
 * Used to detect browser support for adding an event listener with options
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Improving_scrolling_performance_with_passive_listeners
 * @returns Boolean
 */
export const supportsPassiveEvents = () => {
  let passiveSupported = false;

  try {
    const options = {
      get passive() {
        // This function will be called when the browser
        // attempts to access the passive property.
        passiveSupported = true;
        return false;
      },
    };
    const listener = () => null;
    window.addEventListener("test", listener, options);
    window.removeEventListener(
      "test" as keyof DedicatedWorkerGlobalScopeEventMap,
      listener
    );
  } catch (err) {
    passiveSupported = false;
  }

  return passiveSupported;
};
