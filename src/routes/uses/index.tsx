import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Container } from "~/components/container";
import { LinkWrapper } from "~/components/linkWrapper";
import { UsesItem, UsesList } from "~/components/uses";
import { defaultSeoKeywords, SeoHead } from "~/util/seoHead";

export default component$(() => {
  return (
    <Container>
      <h1 className="headline text-3xl md:text-5xl lg:text-7xl mt-8">Uses</h1>
      <p className="mt-4 mb-4 text-lg leading-7">
        This is a list of tech equipment I currently use for my day-to-day work
        as a software engineer.
      </p>
      <UsesList title="Hardware">
        <UsesItem name="Logitech G910 Keyboard" />
        <UsesItem name="Logitech G502 Mouse" />
        <UsesItem
          name="2x AOC Q27G2U"
          link="https://eu.aoc.com/gaming/products/monitors/q27g2u-bk"
          description='2K 27" monitors'
        />
        <UsesItem name="SteelSeries - Arctis 7+" description="headset" />{" "}
        <UsesItem name="Aeris Active" description="standing desk" />
      </UsesList>
      <UsesList title="Development Tools">
        <li className="mt-1">
          <LinkWrapper
            name="VS Code"
            url="https://code.visualstudio.com/"
            className="underlined relative"
          >
            <strong>VS Code</strong>
          </LinkWrapper>{" "}
          with the{" "}
          <LinkWrapper
            name="Cascadia Code"
            url="https://github.com/microsoft/cascadia-code"
            className="underlined relative"
          >
            <strong>Cascadia Code</strong>
          </LinkWrapper>{" "}
          font
        </li>
        <UsesItem
          name="Windows Terminal"
          link="https://github.com/microsoft/terminal"
          description="with PowerShell"
        />
      </UsesList>
      <UsesList title="Design Tools">
        <UsesItem name="Figma" link="https://www.figma.com/" />
        <UsesItem
          name="Affinity Designer"
          link="https://affinity.serif.com/designer/"
        />
      </UsesList>
      <UsesList title="Productivity Tools">
        <UsesItem
          name="Jira"
          link="https://www.atlassian.com/software/jira"
          description="for project management"
        />
      </UsesList>
      <UsesList title="Various other software">
        <UsesItem
          name="Firefox"
          description="as default browser"
          link="https://www.mozilla.org/firefox/"
        />
        <UsesItem
          name="Slic3r"
          description="for preparing 3D models for printing"
          link="https://slic3r.org/"
        />
        <UsesItem
          name="Autodesk Inventor"
          description="for CAD"
          link="https://www.autodesk.com/products/inventor/overview"
        />
      </UsesList>
    </Container>
  );
});

export const head: DocumentHead = SeoHead({
  title: "Samuel Höra uses...",
  description:
    "This is a comprehensive list of tech equipment and software I use for my day-to-day work as a software engineer in Munich.",
  keywords: defaultSeoKeywords,
});
