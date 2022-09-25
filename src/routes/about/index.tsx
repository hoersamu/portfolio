import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Container } from "~/components/container";
import { Education, WorkExperience } from "~/components/workExperience";
import { defaultSeoKeywords, SeoHead } from "~/util/seoHead";

export default component$(() => {
  return (
    <>
      <Container>
        <h1 className="headline text-3xl md:text-5xl lg:text-6xl mt-8">
          Hey, I&apos;m Samuel Höra
        </h1>
        <h2 className="font-bold text-xl md:text-2xl mt-2">
          Software Engineer from Munich, Germany
        </h2>
        <p className="mt-8">
          As a passionate front-end developer, I create websites and web apps to
          make the internet a better place.
        </p>
        <p className="my-4">
          I am 21 years old and have been a developer for as long as I can
          think. The technologies I work with are TypeScript, HTML and CSS with
          a focus on the frameworks React.js, Next.js, Node and Express. I
          strive to build software that makes people's life easier instead of
          digitalisation for digitalisation's sake.
        </p>
        <p>
          When I am not writing code I love to spend time reading books and
          enjoying good coffee. I'm also a huge enthusiast about sport climbing
          (mainly bouldering) and you can find me in one of the many climbing
          gyms here in munich almost every day. Furthermore I enjoy cooking
          fresh food after a long day at the office.
        </p>
        <WorkExperience />
        <Education />
      </Container>
    </>
  );
});

export const head: DocumentHead = SeoHead({
  title: "About Samuel Höra, a Software Engineer from Munich, Germany",
  description:
    "As a passionate front-end software developer, I create amazing websites and web apps to make the internet a better place.",
  keywords: defaultSeoKeywords,
});
