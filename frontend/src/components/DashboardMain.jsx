import React from "react";
import { FaDownload, FaImage } from "react-icons/fa6";
import { MdQrCode2 } from "react-icons/md";
import Chart from "./Chart";
import Chart1 from "./Chart1";
const DashboardMain = () => {
  return (
    <div className="w-full h-full overflow-y-auto hide-scrollbar">
      <div className="w-full h-fit mt-[1vw] flex items-center">
        <div className="w-full leading-8">
          <h1 className="text-[2.5vw] font-bold text-gray-800">
            QRwalk Brand Intelligence
          </h1>
          <p className="text-gray-600 font-semibold text-[1.2vw]">
            Your Hyperlocal QR Performance Hub
          </p>
        </div>
        <div className=" w-fit flex items-center text-nowrap">
          <button className="border-1 p-[0.6vw] px-[0.9vw] flex items-center gap-[1vw] rounded-lg text-[0.9vw] font-bold bg-red-400 text-white cursor-pointer">
            <FaDownload className="text-[1vw]" />
            Export Report
          </button>
        </div>
      </div>
      <div className="w-full mt-[2vw] flex gap-[1vw]">
        <div className="w-1/2 mt-[1vw] flex flex-col justify-between rounded-lg bg-white border-1 border-gray-300 p-[1.5vw]">
          <h1 className="text-[1.3vw] font-semibold text-gray-600 flex justify-between items-center">
            Total Scan <MdQrCode2 className="text-[1.5vw] text-red-500" />
          </h1>
          <p className="font-bold text-[2vw]">826</p>
        </div>
        <div className="w-1/2 mt-[1vw] flex flex-col justify-between rounded-lg bg-white border-1 border-gray-300 p-[1.5vw]">
          <h1 className="text-[1.3vw] font-semibold text-gray-600 flex justify-between items-center">
            Brand <FaImage className="text-[1.5vw] text-red-500" />
          </h1>
          <span className="font-bold text-[2vw] h-[1.3vw]"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Zepto_Logo.svg/1200px-Zepto_Logo.svg.png" className="h-full"/></span>
        </div>
        {/* <div className="w-1/4 mt-[1vw] flex flex-col justify-between rounded-lg bg-white border-1 border-gray-300 p-[1.5vw]">
          <h1 className="text-[1.3vw] font-semibold text-gray-600 flex justify-between items-center">
            Total Scan <MdQrCode2 className="text-[1.5vw] text-red-500" />
          </h1>
          <p className="font-bold text-[2vw]">826</p>
        </div>
        <div className="w-1/4 mt-[1vw] flex flex-col justify-between rounded-lg bg-white border-1 border-gray-300 p-[1.5vw]">
          <h1 className="text-[1.3vw] font-semibold text-gray-600 flex justify-between items-center">
            Total Scan <MdQrCode2 className="text-[1.5vw] text-red-500" />
          </h1>
          <p className="font-bold text-[2vw]">826</p>
        </div> */}
      </div>
      <Chart1/>
    </div>
  );
};

export default DashboardMain;
