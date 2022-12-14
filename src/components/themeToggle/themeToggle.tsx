import { component$, useClientEffect$, useStore } from "@builder.io/qwik";

export const ThemeToggle = component$(() => {
  const state = useStore({
    theme: "",
  });

  useClientEffect$(() => {
    state.theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  });

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="p-2 bg-transparent border-2 border-grey-300 dark:border-grey-700 rounded-full dark:bg-transparent flex items-center justify-center hover:ring-2 hover:ring-offset-2 ring-grey-300 dark:hover:ring-2 dark:hover:ring-offset-2 dark:ring-grey-200 transition-all"
      onClick$={() => {
        const newTheme = state.theme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", newTheme);

        document.documentElement.classList.remove(state.theme);
        document.documentElement.classList.add(newTheme);

        state.theme = newTheme;
      }}
    >
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-5 h-5 text-grey-800 dark:text-grey-200"
        >
          {state.theme === "dark" ? (
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          ) : (
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          )}
        </svg>
        <span className="md:hidden">
          Switch to {state.theme === "dark" ? "light" : "dark"} mode
        </span>
      </>
    </button>
  );
});
