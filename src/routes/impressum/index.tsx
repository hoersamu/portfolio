import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Container } from "~/components/container";
import { defaultHead } from "~/util/seoHead";

export default component$(() => {
  return (
    <Container>
      <h1 className="headline text-xl md:text-3xl lg:text-5xl mt-8">
        Impressum
      </h1>
      <h2 className="text-xl mt-4">Angaben gem&auml;ß &sect; 5 TMG</h2>
      <p className="mt-2">
        Samuel H&ouml;ra
        <br />
        Senftlstr. 1a
        <br />
        81541 M&uuml;nchen
      </p>
      <h2 className="text-xl mt-4">Kontakt</h2>
      <p className="mt-2">
        Telefon: +49 1575/4010605
        <br />
        E-Mail:{" "}
        <a
          href="mailto:contact@hoera.dev"
          target="_blank"
          className="hover:headline active:headline"
        >
          contact@hoera.dev
        </a>
      </p>
    </Container>
  );
});

export const head: DocumentHead = defaultHead;
