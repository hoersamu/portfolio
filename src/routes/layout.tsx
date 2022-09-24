import { component$, Slot } from "@builder.io/qwik";
import { Header } from "~/components/header";
import { SkipToContent } from "~/components/skipToContent";

export default component$(() => {
  return (
    <>
      <SkipToContent />
      <Header />
      <main>
        <section>
          <Slot />
        </section>
      </main>
      <footer></footer>
    </>
  );
});
