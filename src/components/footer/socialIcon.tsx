import { component$, Slot } from "@builder.io/qwik";
import { LinkWrapper } from "../linkWrapper";

export interface SocialIconProps {
  url: string;
  name: string;
}

export const SocialIcon = component$(({ name, url }: SocialIconProps) => {
  return (
    <li className="w-6 h-6 opacity-70 hover:opacity-100 transition" key={name}>
      <LinkWrapper url={url} name={name}>
        <Slot />
      </LinkWrapper>
    </li>
  );
});
