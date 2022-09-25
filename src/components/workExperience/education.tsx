import { component$ } from "@builder.io/qwik";
import { Job } from "./job";

export const Education = component$(() => {
  return (
    <>
      <h2 className="headline mt-12 mb-4 text-4xl">Education</h2>
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
