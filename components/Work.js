import data from "@/data/work";
import Heading from "./Heading";
import WorkInfo from "./WorkInfo";

const Work = () => {
  return (
    <section className="mt-10 mb-10 slide-top-2000">
      <Heading>Work History</Heading>
      <div className="mt-8">
        {data.map((experience) => (
          <WorkInfo key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default Work;
