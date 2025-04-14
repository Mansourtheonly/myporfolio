"use client";

import Typewriter from "typewriter-effect";

const Whoami = () => {
  return (
    <span className="flex bg-zinc-700 items-center text-white  px-3 py-1 w-full  mb-4">
      <span>$ </span>
      <span className="pl-2 font-semibold text-lg">
        <Typewriter
          options={{
            strings: ["whoami"],
            autoStart: true,
            loop: false,
            delay: 20,
            deleteSpeed: 10000000000000000,
          }}
        />
      </span>
    </span>
  );
};

export default Whoami;
