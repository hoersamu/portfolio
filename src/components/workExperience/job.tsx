import { component$, Slot } from "@builder.io/qwik";
import { Experience } from "./experience";
import { JobHeader } from "./jobHeader";

export interface Company {
  name: string;
  url?: string;
  logo: string;
}

export interface JobProps {
  company: Company;
  jobTitle: string;
  fromDate?: string;
  toDate?: string;
  technologies?: string[];
}

export const Job = component$((props: JobProps) => {
  return (
    <Experience>
      <JobHeader {...props} />
      <Slot />
    </Experience>
  );
});
