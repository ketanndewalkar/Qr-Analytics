import React from "react";
import Profile from "./Profile";
import { TbLetterLSmall, TbLetterPSmall, TbLetterDSmall } from "react-icons/tb";
import { GoGraph } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";
import { BiQrScan } from "react-icons/bi";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="w-[20%] h-full p-[0.6vw] overflow-hidden">
      <div className="w-full h-full border-1 rounded-lg bg-white border-gray-300 p-[1vw] shadow-sm overflow-hidden">
        <div className="w-full h-full flex flex-col items-center gap-[1vw] overflow-hidden">
          <div className="w-full h-[2.2vw] flex justify-start items-center">
            <img src="/Logo.png" className="h-full" />
          </div>
          <div
            className="w-full h-[1px] rounded"
            style={{
              background: "linear-gradient(to right, white, black, white)",
            }}
          />
          <div className="w-full h-full relative">
            <ul className="text-[1vw] font-bold text-gray-700 gap-[0.4vw] flex flex-col">
              <p className="text-black text-[0.7vw]">MENU</p>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `rounded-lg p-[0.5vw] cursor-pointer flex items-center gap-[1vw] hover:bg-red-100 hover:text-red-500 ${
                    isActive ? "bg-red-100 text-red-500" : ""
                  }`
                }
              >
                <GoGraph className="text-[1.2vw]" /> Dashboard
              </NavLink>{" "}
              <NavLink to="/qrcode" className={({ isActive }) =>
                  `rounded-lg p-[0.5vw] cursor-pointer flex items-center gap-[1vw] hover:bg-red-100 hover:text-red-500 ${
                    isActive ? "bg-red-100 text-red-500" : ""
                  }`
                }>
                <BiQrScan className="text-[1.2vw]" />
                QrCode
              </NavLink>
              {/* <NavLink to="/setting" className={({ isActive }) =>
                  `rounded-lg p-[0.5vw] cursor-pointer flex items-center gap-[1vw] hover:bg-red-100 hover:text-red-500 ${
                    isActive ? "bg-red-100 text-red-500" : ""
                  }`
                }>
                <IoIosSettings className="text-[1.2vw]" />
                Setting
              </NavLink> */}
            </ul>
          </div>
          <div className="w-full h-fit">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
