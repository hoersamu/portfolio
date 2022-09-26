import { component$ } from "@builder.io/qwik";

export const Logo = component$(() => {
  return (
    <a
      href="/"
      className="group relative transition whitespace-nowrap hover:transition duration-300 text-2xl font-bold flex gap-4 items-center"
      draggable="false"
    >
      <img
        alt="Image of Samuel Höra"
        className="w-12 h-12 rounded-full"
        src="/placeholder.png"
      />
      <span className="transition duration-300 opacity-100 group-hover:opacity-0">
        @hoersamu
      </span>
      <span className="absolute transition duration-300 left-16 opacity-0 group-hover:opacity-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-start to-blue-stop dark:from-purple-start dark:to-purple-stop">
        Samuel Höra
      </span>
    </a>
  );
});
