import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function SidebarItem({ title, type, icon: Icon, item, hover = true }) {
  const [actived, setActive] = useState([]);
  const handleActive = (tabID) => {
    if (actived.some((id) => id === tabID)) {
      const deletedId = actived.filter((id) => id !== tabID);
      setActive(deletedId);
    } else {
      setActive((prev) => [...prev, tabID]);
    }
  };
  return (
    <div
      className={`flex items-center gap-2 p-4 ${
        hover ? "dark:hover:bg-slate-600 hover:bg-slate-200" : ""
      } rounded-xl cursor-pointer`}
    >
      {type === "single" && (
        <>
          {" "}
          <Icon className="text-[18px]" />
          <span className="font-semibold text-[18px]">{title}</span>
        </>
      )}
      {type === "parent" && (
        <div className="flex flex-col w-full">
          {" "}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Icon className="text-[18px]" />
              <span className="font-semibold text-[18px]">Stock & Fund</span>
            </div>
            <IoMdArrowDropdown
              onClick={() => handleActive(item.id)}
              className="text-[20px]"
            />
          </div>
          {actived.some((id) => id === item.id) && (
            <div className="flex flex-col pl-7 gap-4 mt-4">
              <span className=" text-[18px] hover:text-red-500">Stock</span>
              <span className=" text-[18px] hover:text-red-500">
                Crytocurrency
              </span>
              <span className=" text-[18px] hover:text-red-500">
                Mutual fund
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SidebarItem;
