import data from "@/data/skills";
import SkillInfo from "./SkillInfo";

const { default: Heading } = require("./Heading");

const Skills = () => {
  return (
    <section className="mt-10 slide-top-1750">
      <Heading>Skills</Heading>
      <div className="flex flex-wrap gap-4 mt-4">
        {data.map((skill) => (
          <SkillInfo image={skill.image} name={skill.name} key={skill.id} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
