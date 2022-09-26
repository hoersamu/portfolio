import { component$, Slot, useClientEffect$ } from "@builder.io/qwik";
import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header";
import { SkipToContent } from "~/components/skipToContent";

export default component$(() => {
  useClientEffect$(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <>
      <SkipToContent />
      <Header />
      <main id="content">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
