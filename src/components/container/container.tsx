import { component$, Slot } from "@builder.io/qwik";

export const Container = component$(() => {
  return (
    <div className="mx-auto w-full px-4 md:max-w-5xl">
      <Slot />
    </div>
  );
});
