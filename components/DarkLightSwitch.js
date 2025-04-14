"use client";

import { FaCloudMoon } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";

import { useTheme } from "next-themes";

import { useState, useEffect } from "react";
import classNames from "classnames";

const DarkLightSwitch = () => {
  const [state, setState] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setState(true);
  }, []);

  if (!state) {
    return null;
  }

  return (
    <div
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
      className="fixed top-2 right-2 w-12 h-[18px] z-[9999999999] bg-indigo-300 rounded-full flex items-center hover:cursor-pointer"
    >
      <span
        className={classNames(
          "w-7 h-7 flex justify-center items-center bg-indigo-500 rounded-full transition-all duration-500",
          { "ml-5": theme === "dark" }
        )}
      >
        {theme == "dark" ? (
          <FaCloudMoon className="text-white" size={14} />
        ) : (
          <LuSunMoon className="text-white" size={14} />
        )}
      </span>
      <span></span>
    </div>
  );
};

export default DarkLightSwitch;
