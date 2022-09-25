import { component$ } from "@builder.io/qwik";
import { LinkWrapper } from "../linkWrapper";
import { JobProps } from "./job";

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
              <p className="hidden md:block text-sm">
                <strong>Technologies: </strong>
                {technologies.join(", ")}
              </p>
            )}
          </div>
        </div>
        {technologies && (
          <p className="md:hidden text-sm">
            <strong>Technologies: </strong>
            {technologies.join(", ")}
          </p>
        )}
      </>
    );
  }
);
