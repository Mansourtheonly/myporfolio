"use client";

import { MdLocationPin } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import data from "@/data/header";
import Image from "next/image";
import HeaderInfo from "./HeaderInfo";

const Header = () => {
  return (
    <div className="flex flex-wrap flex-col md:flex-row items-center gap-x-10 gap-y-10 slide-top duration-300">
      <div className=" w-[200px] md:w-[150px] h-[200px] md:h-[150px]   relative rounded-full overflow-hidden mt-8 md:mt-0">
        <Image
          src={data.image}
          className="w-full h-full object-cover hover:scale-125 hover:rotate-12 transition-all duration-500"
          fill
          alt="personnel image"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h1 className="text-4xl md:text-5xl font-black capitalize text-indigo-500 dark:text-white">
          {data.name}
        </h1>
        <p className="text-lg md:text-xl mt-1 font-semibold md:font-bold capitalize text-zinc-800 dark:text-zinc-400">
          {data.jobTitle}
        </p>
        <div className="flex gap-x-10 gap-y-1 mt-2 text-zinc-800 capitalize dark:text-zinc-400 flex-wrap">
          <HeaderInfo
            icon={
              <MdLocationPin
                className="text-indigo-500 dark:text-zinc-400"
                size={16}
              />
            }
            title={data.address}
          />

          <HeaderInfo
            icon={
              <AiFillCode
                className="text-indigo-500 dark:text-zinc-400"
                size={16}
              />
            }
            title={data.experience}
          />

          <HeaderInfo
            icon={
              <FaGraduationCap
                className="text-indigo-500 dark:text-zinc-400"
                size={16}
              />
            }
            title={data.education}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
