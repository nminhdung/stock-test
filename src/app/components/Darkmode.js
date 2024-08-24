"use client";
import React, { useEffect, useState } from "react";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

export const Darkmode = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === systemTheme ? systemTheme : theme;


  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            className="text-xl cursor-pointer hover:text-amber-500 transition duration-300"
            onClick={() => setTheme("light")}
          />
        ) : (
          <MdDarkMode
            className="text-xl cursor-pointer hover:text-amber-500 transition duration-300"
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  );
};
