import { component$, Slot } from "@builder.io/qwik";

export interface LinkWrapperProps {
  url: string;
  name: string;
  className?: string;
}

export const LinkWrapper = component$(
  ({ name, url, className }: LinkWrapperProps) => {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={name}
        draggable="false"
        className={className}
      >
        <Slot />
      </a>
    );
  }
);
