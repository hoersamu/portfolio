import { component$ } from "@builder.io/qwik";
import { Language } from "./language";

export const Languages = component$(() => {
  return (
    <>
      <h2 className="headline mt-12 mb-4 text-4xl leading-tight">Languages</h2>
      <div>
        <Language proficiency="Native speaker" language="German"></Language>
        <Language proficiency="Fluent" language="English"></Language>
      </div>
    </>
  );
});
