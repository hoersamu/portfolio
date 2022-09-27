import { component$, useClientEffect$ } from "@builder.io/qwik";

export default component$(() => {
  useClientEffect$(() => {
    window.location.replace(document.location.origin);
  });

  return <div />;
});
