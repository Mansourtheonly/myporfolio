import data from "@/data/about";
import Heading from "./Heading";

const About = () => {
  return (
    <section className="mt-10 slide-top-1500">
      <Heading>About</Heading>
      <h1 className="mt-2 text-2xl">{data.heading}</h1>
      <p className="mt-4 dark:text-zinc-400 text-base md:text-lg text-black">
        {data.bio}
      </p>
    </section>
  );
};

export default About;
