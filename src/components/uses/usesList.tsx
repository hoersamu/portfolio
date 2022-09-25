import { component$, Slot } from "@builder.io/qwik";

export interface UsesListProps {
  title: string;
}

export const UsesList = component$(({ title }: UsesListProps) => (
  <>
    <h2 className="headline text-2xl mt-8">{title}</h2>
    <ul className="list-disc ml-4 mt-4">
      <Slot />
    </ul>
  </>
));
