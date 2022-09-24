import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { defaultHead } from "~/util/seoHead";

export default component$(() => {
  return <div></div>;
});

export const head: DocumentHead = defaultHead;
