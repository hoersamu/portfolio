import { component$, Slot } from "@builder.io/qwik";

export const Experience = component$(() => {
  return (
    <div className="flex transition-all transform md:hover:scale-[1.01] even:justify-end">
      <div className="w-full md:w-10/12 px-8 py-6 rounded-3xl glass-light dark:glass-dark mb-6 drop-shadow-lg hover:drop-shadow-2xl transition-all">
        <Slot />
      </div>
    </div>
  );
});
