import { component$, Slot } from "@builder.io/qwik";

export interface LinkWrapperProps {
  url: string;
  name: string;
}

export const LinkWrapper = component$(({ name, url }: LinkWrapperProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={name}
      draggable="false"
    >
      <Slot />
    </a>
  );
});
