import { component$ } from "@builder.io/qwik";
import { GitHubLogo, LinkedinLogo } from "../icons";
import { SocialIcon } from "./socialIcon";

export const Footer = component$(() => {
  return (
    <footer className="flex justify-between mt-8 md:mt-20 px-4 md:px-20 py-8">
      <span>&copy; {new Date().getFullYear()} Samuel Höra</span>
      <ul className="flex gap-6">
        <SocialIcon name="GitHub" url="https://www.github.com/hoersamu">
          <GitHubLogo ariaLabel="GitHub" />
        </SocialIcon>
        <SocialIcon
          name="LinkedIn"
          url="https://www.linkedin.com/in/samuel-h%C3%B6ra"
        >
          <LinkedinLogo ariaLabel="LinkedIn" />
        </SocialIcon>
      </ul>
    </footer>
  );
});
