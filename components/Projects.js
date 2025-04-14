"use client";

import data from "@/data/projects";
import Heading from "./Heading";
import ProjectInfo from "./ProjectInfo";
import Model from "./Model";
import { useState } from "react";

const Projects = () => {
  const [state, setState] = useState(false);
  const [details, setDetails] = useState(null);

  const toggleModel = (details) => {
    setDetails(details);
    setState(!state);
  };

  return (
    <>
      <Model
        project=""
        state={state}
        details={details}
        toggleModel={toggleModel}
      />

      <section className="mt-10 mb-10 slide-top-2250  ">
        <Heading>Projects</Heading>
        <div>
          {data.map((project) => (
            <ProjectInfo
              project={project}
              key={project.id}
              toggleModel={toggleModel}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
