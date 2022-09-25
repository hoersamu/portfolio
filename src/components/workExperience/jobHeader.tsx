import { component$, mutable, useContext } from "@builder.io/qwik";
import classNames from "classnames";
import { Chip } from "../chip";
import { LinkWrapper } from "../linkWrapper";
import { JobProps } from "./job";
import { activeTechnologyCtx } from "./workExperience";

export const JobHeader = component$(
  ({ company, jobTitle, fromDate, technologies, toDate }: JobProps) => {
    return (
      <>
        <div className="flex gap-4 items-start md:items-center">
          {company.logo && (
            <img
              src={company.logo}
              alt={company.name}
              className="w-16 h-16 rounded-md"
            />
          )}
          <div className="w-full mb-2">
            <div className="flex flex-col-reverse md:flex-row justify-between">
              <h3 className="font-bold">{jobTitle}</h3>
              <span className="text-sm md:text-base">
                {fromDate && `${fromDate} — ${toDate ? toDate : "present"}`}
              </span>
            </div>
            <h4>
              {company.url ? (
                <LinkWrapper
                  name={company.name}
                  url={company.url}
                  className="underlined relative"
                >
                  {company.name}
                </LinkWrapper>
              ) : (
                <>{company.name}</>
              )}
            </h4>
            {technologies && (
              <Technologies
                technologies={technologies}
                className="hidden md:block mt-3"
              />
            )}
          </div>
        </div>
        {technologies && (
          <Technologies technologies={technologies} className="md:hidden" />
        )}
      </>
    );
  }
);

interface TechnologiesProps {
  technologies: string[];
  className?: string;
}

export const Technologies = component$(
  ({ technologies, className }: TechnologiesProps) => {
    const state = useContext(activeTechnologyCtx);

    return (
      <p
        className={classNames("text-sm flex flex-wrap items-center", className)}
      >
        <strong className="mr-2">Technologies:</strong>
        {technologies.map((tech) => (
          <Chip
            className={mutable(
              classNames({
                headline: state.activeTechnology === tech,
              })
            )}
            onMouseEnter$={() => {
              state.activeTechnology = tech;
            }}
            onMouseLeave$={() => {
              state.activeTechnology = "";
            }}
          >
            {tech}
          </Chip>
        ))}
      </p>
    );
  }
);
