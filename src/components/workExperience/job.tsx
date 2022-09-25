import { component$, Slot } from "@builder.io/qwik";
import { JobHeader } from "./jobHeader";

export interface Company {
  name: string;
  url: string;
  logo: string;
}

export interface JobProps {
  company: Company;
  jobTitle: string;
  fromDate: string;
  toDate?: string;
  technologies?: string[];
}

export const Job = component$((props: JobProps) => {
  return (
    <div className="flex transition-all transform md:hover:scale-[1.01] even:justify-end">
      <div className="md:w-10/12 px-8 py-6 rounded-3xl glass-light dark:glass-dark mb-6 drop-shadow-lg hover:drop-shadow-2xl transition-all">
        <JobHeader {...props} />
        <Slot />
      </div>
    </div>
  );
});
