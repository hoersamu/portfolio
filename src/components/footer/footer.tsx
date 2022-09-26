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
    <footer className="grid grid-cols-2 md:grid-cols-3 justify-between mt-4 md:mt-20 px-4 md:px-20 py-4 md:py-8">
      <span>
        <span className="whitespace-nowrap">
          &copy; {new Date().getFullYear()} Samuel Höra
        </span>
        <strong className="hidden md:inline"> · </strong>
        <a
          href="/impressum"
          className="block md:inline hover:headline active:headline"
        >
          Impressum
        </a>
      </span>
      <div className="items-center uppercase text-xs font-bold tracking-widest hidden md:inline-flex justify-center">
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
      <ul className="flex gap-6 justify-end">
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
