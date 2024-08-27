"use client";
import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import { FaEyeSlash, FaApple } from "react-icons/fa";
import { HiOutlineNewspaper } from "react-icons/hi";
import {
  FaArrowDown,
  FaArrowUp,
  FaChartLine,
  FaFacebook,
  FaGoogle,
  FaMicrosoft,
  FaPlus,
} from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  MdOutlineDashboard,
  MdOutlineWallet,
  MdOutlineHome,
  MdGroups,
  MdOutlineSettings,
} from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import Home from "../page";
import SidebarItem from "../components/SidebarItem";
import Header from "../components/Header";
import LineChart from "../components/LineChart";
import MyWatchList from "../components/MyWatchlist";
import Link from "next/link";

const dashboardItems = [
  { id: 1, title: "Home", icon: MdOutlineHome, type: "single" },
  { id: 2, title: "Dashboard", icon: MdOutlineDashboard, type: "single" },
  { id: 3, title: "Wallet", icon: MdOutlineWallet, type: "single" },
  { id: 4, title: "News", icon: HiOutlineNewspaper, type: "single" },
  { id: 5, title: "Stock & Fund", icon: FaChartLine, type: "parent" },
];

const table1 = [
  {
    id: 1,
    title: "Apple",
    icon: FaApple,
  },
  {
    id: 2,
    title: "Facebook",
    icon: FaFacebook,
  },
  {
    id: 3,
    title: "Microsoft",
    icon: FaMicrosoft,
  },
  {
    id: 4,
    title: "Google",
    icon: FaGoogle,
  },
];

function Dashboard() {
  const [openMenu, setOpenMenu] = useState(false);
  const [changeLayout, setChangeLayout] = useState("horizontal");
  const [profile, setProfile] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    const cookieValue = Cookie.get("user");
    if (cookieValue) {
      const cookieUser = JSON.parse(cookieValue);
      setProfile({
        username: cookieValue.username,
        email: cookieValue.email,
      });
    }
  }, []);
  return (
    <div className="flex relative min-h-screen w-full  ">
      {/* left  */}
      <div className="hidden md:block md:w-[330px] top-0 bottom-0 md:fixed  shadow-xl  border-r p-2">
        <div className="flex items-center gap-1 justify-center p-4">
          <div className="bg-black  rounded-xl">
            <img
              src="/images/thunder.png"
              alt="logo"
              className="w-[30px] h-[30px] object-cover "
            />
          </div>

          <Link href="/">
            <h1 className="font-bold text-xl">GoStock</h1>
          </Link>
        </div>
        <div className="bg-black p-4 text-white rounded-xl flex justify-between items-center my-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-[14px] text-white">Total Investment</h3>
            <div className="flex items-center gap-2">
              <h1 className="text-xl">$5380,90</h1>
              <FaEyeSlash size={10} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-[16px] text-green-500">+18,10%</h2>
            <FaArrowUp className="text-green-500 text-[16px]" />
          </div>
        </div>
        <ul className="flex flex-col ">
          <div className="flex-1">
            {dashboardItems.map((item) => {
              return (
                <SidebarItem
                  key={item.id}
                  title={item.title}
                  type={item.type}
                  icon={item.icon}
                  item={item}
                />
              );
            })}
          </div>
          <div className=" p-2 border-t mt-14">
            <div className="flex items-center gap-2 p-4 dark:hover:bg-slate-600 hover:bg-slate-200 rounded-xl cursor-pointer">
              <MdGroups className="text-[18px]" />
              <span className="font-semibold text-[18px]">Our community</span>
            </div>{" "}
            <div className="flex items-center gap-2 p-4 dark:hover:bg-slate-600 hover:bg-slate-200 rounded-xl cursor-pointer justify-between">
              <div className="flex items-center gap-2 ">
                <MdOutlineSettings className="text-[18px]" />
                <span className="font-semibold text-[18px]">Settings</span>
              </div>
              <span className="bg-red-500 rounded-full px-2 py-1 text-white inline-flex items-center text-[10px] justify-center ">
                {" "}
                6
              </span>
            </div>
            <div className="flex items-center gap-2 p-4 dark:hover:bg-slate-600 hover:bg-slate-200 rounded-xl cursor-pointer">
              <FiPhone className="text-[18px]" />
              <span className="font-semibold text-[18px]">Contacts</span>
            </div>{" "}
          </div>
        </ul>
      </div>
      <div className="hidden md:block w-[330px] mr-[80px]"></div>
      {/* Mobile menu */}
      <div
        className={
          openMenu
            ? "bg-black fixed p-4 top-0 left-0 w-full h-full z-50   text-sm  text-white flex flex-col gap-y-10   duration-300"
            : "bg-black fixed p-4 top-0 left-[-100%] w-full h-full z-50   text-sm   text-white flex flex-col gap-y-10   duration-300"
        }
      >
        <div className="flex items-center gap-1 justify-center ">
          <div className="bg-black  rounded-xl">
            <img
              src="/images/thunder.png"
              alt="logo"
              className="w-[30px] h-[30px] object-cover "
            />
          </div>

          <h1 className="font-bold text-xl">GoStock</h1>
        </div>
        {dashboardItems.map((item) => {
          return (
            <SidebarItem
              key={item.id}
              title={item.title}
              type={item.type}
              icon={item.icon}
              item={item}
              hover={false}
            />
          );
        })}
        <div className=" p-2 border-t mt-14">
          <div className="flex items-center gap-2 p-4 hover:bg-slate-100 rounded-xl cursor-pointer">
            <MdGroups className="text-[18px]" />
            <span className="font-semibold text-[18px]">Our community</span>
          </div>{" "}
          <div className="flex items-center gap-2 p-4 hover:bg-slate-100 rounded-xl cursor-pointer justify-between">
            <div className="flex items-center gap-2 ">
              <MdOutlineSettings className="text-[18px]" />
              <span className="font-semibold text-[18px]">Settings</span>
            </div>
            <span className="bg-red-500 rounded-full px-2 py-1 text-white inline-flex items-center text-[10px] justify-center ">
              {" "}
              6
            </span>
          </div>
          <div className="flex items-center gap-2 p-4 hover:bg-slate-100 rounded-xl cursor-pointer">
            <FiPhone className="text-[18px]" />
            <span className="font-semibold text-[18px]">Contacts</span>
          </div>{" "}
        </div>
        <AiOutlineCloseCircle
          onClick={() => setOpenMenu(false)}
          className="lg:hidden absolute top-[20px] right-10 cursor-pointer"
          size={30}
        />
      </div>
      {/* right  */}
      <div className="w-full h-full pb-[50px] ">
        <Header setOpenMenu={setOpenMenu} profile={profile} />
        <div className="w-full ">
          <div className="flex items-center gap-3 my-10">
            <h1 className="text-xl font-bold">My Portfollio</h1>
            <h2
              className="font-semibold px-4 py-2 shadow-md cursor-pointer"
              onClick={() => {
                setChangeLayout((prev) => {
                  if (prev === "horizontal") {
                    setChangeLayout("vertical");
                  } else {
                    setChangeLayout("horizontal");
                  }
                });
              }}
            >
              Change layout
            </h2>
          </div>
          <div
            className={`px-8 py-6 shadow-md rounded-2xl grid ${
              changeLayout === "horizontal"
                ? "md:grid-cols-2 lg:grid-cols-4"
                : ""
            } gap-4`}
          >
            {table1.map((item) => {
              let Icon = item.icon;
              return (
                <div
                  className=" flex flex-col gap-4 w-full shadow-md p-4 dark:shadow-white"
                  key={item.id}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-black text-white rounded-full p-2 w-fit">
                        {" "}
                        <Icon className="text-[30px]" />
                      </div>
                      <h2 className="text-xl font-semibold">{item.title}</h2>
                    </div>
                    <div className="w-[50px] h-[50px] "></div>
                  </div>
                  <div className="flex flex-col gap-4 ">
                    <div className="flex items-center justify-between">
                      <h2>Total Shares</h2>
                      <span className="font-bold text-[16px]">$310,40</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <h2 className="">Total Return</h2>
                      <div className="flex items-center gap-2">
                        {" "}
                        <span className="font-bold text-[16px]">-1,4%</span>
                        <FaArrowDown />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className={`grid ${
              changeLayout === "horizontal" ? "md:grid-cols-10" : "grid"
            }  mt-10 gap-4 w-full h-full px-4 `}
          >
            <div className="md:col-span-6 dark:shadow-white shadow-md  px-4 py-6  w-full h-full flex flex-col">
              <div className="flex items-center w-full justify-between pb-10 border-b-2 ">
                <div className="flex items-center gap-4">
                  <div className="bg-black text-white rounded-full p-2 w-fit">
                    {" "}
                    <FaApple className="text-[30px]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-bold">Apple inc</h1>
                    <span className="text-[16px]">AAPL</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <span className="inline-flex rounded-3xl h-full px-2 gap-1 bg-red-500  items-center text-[10px] text-white w-fit">
                      -1,10%
                      <FaArrowDown className="text-[10px]" />
                    </span>
                    <h1 className="font-bold text-xl">$150,70</h1>
                  </div>
                  <h2 className="text-[14px]">Last updated at 14.30</h2>
                </div>
              </div>
              <div className="w-full h-full">
                <LineChart />
              </div>
            </div>
            <div
              className={`${
                changeLayout === "horizontal" ? "" : "md:col-span-6"
              } md:col-span-4 shadow-md  px-4  py-6 w-full  dark:shadow-white rounded-md`}
            >
              <div className="flex justify-between items-center ">
                <h1 className="text-xl font-bold">My watchlist</h1>
                <FaPlus className="text-[16px]" />
              </div>
              <MyWatchList changeLayout={changeLayout} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
