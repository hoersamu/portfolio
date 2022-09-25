import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Container } from "~/components/container";
import {
  DockerLogo,
  NextLogo,
  QwikLogo,
  ReactLogo,
  TypescriptLogo,
  VercelLogo,
  VsCodeLogo,
} from "~/components/icons";
import { LinkWrapper } from "~/components/linkWrapper";
import { QwikTyped } from "~/components/qwikTyped";
import { defaultHead } from "~/util/seoHead";

export default component$(() => {
  const talkAbout = [
    "React",
    "TypeScript",
    "Next.js",
    "RESTful APIs",
    "HTML",
    "CSS",
    "Qwik",
    "Docker",
    "VS Code",
    "GitHub",
    "CI/CD",
    "Testing",
    "Rubik's Cubes",
    "3D printing",
    "Sport climbing",
    "Coffee",
    "E2E encryption",
    "and more...",
  ];

  return (
    <>
      <section id="home" className="h-full">
        <Container>
          <h1 className="headline mt-20 text-3xl md:text-5xl lg:text-6xl">
            Hey, I&apos;m Samuel Höra 👋
          </h1>
          <p className="my-8 text-lg">
            I am a passionate Software Engineer, specialised in front-end
            development using React and TypeScript. My main motivation is to
            build software that eases people&apos;s lives. You can talk to me
            about{" "}
            <QwikTyped
              loop
              typeSpeed={80}
              backSpeed={20}
              strings={talkAbout}
              smartBackspace
              backDelay={1000}
              loopCount={0}
              showCursor
              cursorChar="|"
              shuffle
            />
            .
          </p>
          <p>
            P.S. this website is open-source and available on{" "}
            <a
              href="https://github.com/hoersamu/portfolio"
              title="Link to Github repository"
              target="_blank"
              rel="noopener noreferrer"
              className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0"
            >
              Github
            </a>
            .
          </p>
        </Container>
        <section id="tools" className="my-40">
          <Container>
            <h2 className="headline text-xl md:text-2xl lg:text-3xl mt-24 text-center">
              Some of my favourite tools
            </h2>

            <div className="flex flex-wrap items-center justify-center max-w-5xl mt-8 mx-auto gap-x-16 gap-y-8">
              <LinkWrapper name="Next.js" url="https://nextjs.org/">
                <NextLogo className="w-32" ariaLabel="Next.js" />
              </LinkWrapper>
              <LinkWrapper name="Vercel" url="https://vercel.com">
                <VercelLogo className="w-32 md:w-36" ariaLabel="Vercel" />
              </LinkWrapper>
              <LinkWrapper name="Ract" url="https://reactjs.org/">
                <ReactLogo className="w-12" ariaLabel="React" />
              </LinkWrapper>
              <LinkWrapper
                name="Visual Studio Code"
                url="https://code.visualstudio.com/"
              >
                <VsCodeLogo className="w-12" ariaLabel="Visual Studio Code" />
              </LinkWrapper>
              <LinkWrapper name="Docker" url="https://www.docker.com/">
                <DockerLogo className="w-16" ariaLabel="Docker" />
              </LinkWrapper>
              <LinkWrapper
                name="TypeScript"
                url="https://www.typescriptlang.org/"
              >
                <TypescriptLogo className="w-16" ariaLabel="TypeScript" />
              </LinkWrapper>
              <LinkWrapper name="Qwik" url="https://qwik.builder.io/">
                <QwikLogo className="w-32" ariaLabel="Qwik" />
              </LinkWrapper>
            </div>
          </Container>
        </section>
      </section>
    </>
  );
});

export const head: DocumentHead = defaultHead;
