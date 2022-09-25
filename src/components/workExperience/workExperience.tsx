import { component$ } from "@builder.io/qwik";
import { Company, Job } from "./job";

export const WorkExperience = component$(() => {
  const heidenhain: Company = {
    name: "DR. JOHANNES HEIDENHAIN GmbH",
    url: "https://www.heidenhain.de/",
    logo: "/companies/heidenhain.jpg",
  };

  return (
    <>
      <h2 className="headline mt-12 mb-4 text-4xl">Experience</h2>
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
    </>
  );
});
