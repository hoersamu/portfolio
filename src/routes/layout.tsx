import { component$, Slot } from "@builder.io/qwik";
import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header";
import { SkipToContent } from "~/components/skipToContent";

export default component$(() => {
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
