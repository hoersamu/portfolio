import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Container } from "~/components/container";
import { defaultHead } from "~/util/seoHead";

export default component$(() => {
  return (
    <Container>
      <h1 className="headline text-3xl md:text-5xl lg:text-7xl mt-8">
        Coming soon...
      </h1>
    </Container>
  );
});

export const head: DocumentHead = defaultHead;
