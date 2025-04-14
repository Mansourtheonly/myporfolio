import { MdClose } from "react-icons/md";
import SkillInfo from "./SkillInfo";
import Image from "next/image";
import ContactInfo from "./ContactInfo";

const Model = ({ state, details, toggleModel }) => {
  return state ? (
    <div className="fixed flex items-center justify-center px-6 inset-0 z-10 backdrop-blur-sm w-full h-screen bg-black/25 overflow-x-auto">
      <div className=" max-w-screen-lg w-full m-auto bg-white dark:bg-zinc-900 p-6 rounded-md min-h-[40vh] max-h-[80vh]">
        <div className="absolute right-6 top-6 ">
          <MdClose
            className="cursor-pointer text-zinc-900 dark:text-white"
            size={25}
            onClick={toggleModel}
          />
        </div>

        <div className="flex flex-col lg:flex-row relative">
          {/* <div className="w-full lg:w-[400]">
            <div className="pt[56.26%]">
              <Image
                src={details.image}
                className=""
                fill
                alt="project image"
              />
            </div>
          </div> */}
          <div className="flex-1">
            <h1>{details.title}</h1>
            <div className="flex flex-wrap gap-4 my-4">
              {details.skills.map((skill) => (
                <SkillInfo
                  key={skill.id}
                  image={skill.image}
                  name={skill.name}
                />
              ))}

              <ContactInfo link={details.demo} title="demo" />
              {details.source_code ? (
                <ContactInfo link={details.source_code} title="Source Code" />
              ) : null}
            </div>
            <p className="">{details.description}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Model;
