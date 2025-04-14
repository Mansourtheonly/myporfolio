"use client";

import { CgBrowser } from "react-icons/cg";

import Image from "next/image";
import Link from "next/link";
import SkillInfo from "./SkillInfo";
import { useState } from "react";

const ProjectInfo = ({ project, toggleModel }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 mt-10 relative">
      <div className="relative w-full pt-[56.25%] md:pt-0 md:w-[200px] md:h-[8rem]">
        <Image
          src={project.image}
          fill
          alt="project image"
          className="rounded-md"
        />
      </div>
      <div className="flex-1 mt-4 md:mt-0">
        <h1 className="flex gap-x-4 items-center text-base md:text-lg leading-[24px]">
          <span>{project.title}</span>
          <span
            onClick={() => {
              toggleModel(project);
            }}
          >
            <CgBrowser />
          </span>
        </h1>
        <p className="text-zinc-700 dark:text-zinc-400">
          {project.description.length > 100 ? (
            <span> {project.description.slice(0, 100)}...</span>
          ) : (
            <span>{project.description}</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProjectInfo;
