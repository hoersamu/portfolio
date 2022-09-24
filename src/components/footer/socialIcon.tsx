import { Component, component$, Slot } from "@builder.io/qwik";

export interface SocialIconProps {
  url: string;
  name: string;
  icon?: Component<any>;
}

export const SocialIcon = component$(({ name, url }: SocialIconProps) => {
  return (
    <li className="w-6 h-6 opacity-70 hover:opacity-100 transition" key={name}>
      <a href={url} target="_blank" rel="noopener noreferrer" title={name}>
        <Slot />
      </a>
    </li>
  );
});
