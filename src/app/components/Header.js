"use client";
import React from "react";
import { CiMenuBurger, CiSearch, CiMail, CiLight } from "react-icons/ci";
import { IoIosNotificationsOutline, IoIosArrowDown } from "react-icons/io";
import { Darkmode } from "./Darkmode";

const Header = ({ setOpenMenu, profile }) => {
  return (
    <div className="flex px-12 py-4 h-[80px] w-full justify-between items-center shadow-md ">
      {/* Icon mobile menu */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => {
          setOpenMenu(true);
        }}
      >
        <CiMenuBurger className="text-[18px]" />
      </div>
      <div className="hidden md:flex items-center  bg-slate-200 rounded-2xl gap-2 h-full px-4 w-[400px]">
        <CiSearch className="text-[14px] text-black" />
        <input
          type="text"
          placeholder="Press to search"
          className="outline-none  bg-transparent text-[14px] px-1 flex-1"
        />
      </div>
      {/* Right */}
      <div className="flex items-center gap-4">
        <CiMail className="text-3xl cursor-pointer" />
        <IoIosNotificationsOutline className="text-3xl cursor-pointer" />
        <Darkmode />
        <div className="w-[2px] h-[26px] bg-slate-400"></div>
        <div className="flex items-center gap-2">
          <img
            src="/images/thunder.png"
            alt="avatar"
            className="rounded-full w-[50px] h-[50px] object-cover"
          />

          <span className="text-[18px] font-semibold cursor-pointer">
            {profile?.username ? `${profile.username}` : "John Doe"}
          </span>
          <IoIosArrowDown className="text-[16px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
