import { component$ } from "@builder.io/qwik";
import { LanguageIcon } from "../icons/other/language";
import { Experience } from "./experience";

export interface Company {
  name: string;
  url?: string;
  logo: string;
}

export interface LanguageProps {
  language: string;
  proficiency: string;
}

export const Language = component$(
  ({ language, proficiency }: LanguageProps) => {
    return (
      <Experience>
        <div className="flex gap-4 items-start md:items-center">
          <LanguageIcon className="w-10 h-10 m-3" />
          <div className="w-full mb-2">
            <div className="flex flex-col-reverse md:flex-row justify-between">
              <h3 className="font-bold">{language}</h3>
            </div>
            <h4>{proficiency}</h4>
          </div>
        </div>
      </Experience>
    );
  }
);
