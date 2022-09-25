import {
  component$,
  createContext,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import { Company, Job } from "./job";

export const activeTechnologyCtx = createContext<{ activeTechnology: string }>(
  "activeTechnology"
);

export const WorkExperience = component$(() => {
  const state = useStore({
    activeTechnology: "",
  });

  useContextProvider(activeTechnologyCtx, state);

  const heidenhain: Company = {
    name: "DR. JOHANNES HEIDENHAIN GmbH",
    url: "https://www.heidenhain.de/",
    logo: "/companies/heidenhain.jpg",
  };

  return (
    <>
      <h2 className="headline mt-12 mb-4 text-4xl leading-tight">Experience</h2>
      <div>
        <Job
          company={{
            logo: "/companies/myposter.png",
            name: "myposter",
            url: "https://www.myposter.de/",
          }}
          fromDate="Oct 2022"
          jobTitle="Software Developer"
          technologies={["Vue.js"]}
        ></Job>
        <Job
          company={heidenhain}
          fromDate="Jun 2022"
          toDate="Sep 2022"
          jobTitle="Junior Software Developer"
          technologies={[
            "React.js",
            "Next.js",
            "TypeScript",
            "CI/CD",
            "Jenkins",
          ]}
        ></Job>
        <Job
          company={heidenhain}
          fromDate="Sep 2019"
          toDate="Jun 2022"
          jobTitle="Apprentice for Software Development"
          technologies={["C++", "Python", "Qt", "Java", "React.js"]}
        ></Job>
      </div>
      <h2 className="headline mt-12 mb-4 text-4xl leading-tight">Education</h2>
      <div>
        <Job
          company={{
            logo: "/companies/jhg.svg",
            name: "Johannes-Heidenhain-Gymnasium Traunreut",
            url: "https://www.jhg-traunreut.schule",
          }}
          fromDate="2011"
          toDate="2019"
          jobTitle="Abitur"
        ></Job>
      </div>
    </>
  );
});
