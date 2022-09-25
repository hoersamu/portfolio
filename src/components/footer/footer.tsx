import { component$ } from "@builder.io/qwik";
import {
  GitHubLogo,
  LinkedinLogo,
  QwikSmallLogo,
  TailwindLogo,
  VercelSmallLogo,
} from "../icons";
import { SocialIcon } from "./socialIcon";

export const Footer = component$(() => {
  return (
    <footer className="flex justify-between mt-8 md:mt-20 px-4 md:px-20 py-8">
      <span>&copy; {new Date().getFullYear()} Samuel Höra</span>
      <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
        Made with
        <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
          <span title="Qwik">
            <QwikSmallLogo className="h-5" ariaLabel="Qwik" />
          </span>
          <span title="TailwindCSS">
            <TailwindLogo className="h-5" ariaLabel="TailwindCSS" />
          </span>
          <span title="Vercel">
            <VercelSmallLogo className="h-5" ariaLabel="Vercel" />
          </span>
        </div>
      </div>
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
