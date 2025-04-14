import Image from "next/image";
import SkillInfo from "./SkillInfo";

const WorkInfo = ({ experience }) => {
  return (
    <div className="flex gap-6 mt-10">
      <div className="relative  rounded-full w-[60px] h-[60px] ">
        <Image
          src={experience.image}
          alt="grodesto logo"
          fill
          className="rounded-full"
        />
      </div>
      <div className="flex-1">
        <h1>{experience.role}</h1>
        <h1 className="text-zinc-400 text-md">{experience.company}</h1>
        <h1>
          {experience.type} - {experience.date}
        </h1>
        <div className="flex flex-wrap gap-4 mt-6">
          {experience.technologies.map((technology) => (
            <SkillInfo
              key={technology}
              image={technology.image}
              name={technology.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkInfo;
