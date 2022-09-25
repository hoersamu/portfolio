import { DocumentHead } from "@builder.io/qwik-city";
import { SeoHead } from "./seoHead";

export const defaultSeoKeywords = [
  "Software Engineer",
  "Samuel Höra",
  "Heidenhain",
  "Front-End",
  "Full-Stack",
  "React",
  "TypeScript",
  "JavaScript",
  "NextJs",
  "CSS",
  "Tailwind",
];

export const defaultHead: DocumentHead = SeoHead({
  title: "Samuel Höra - Software Developer",
  description:
    "A Front-End Software Engineer with a focus on TypeScript and React",
  keywords: defaultSeoKeywords,
});
