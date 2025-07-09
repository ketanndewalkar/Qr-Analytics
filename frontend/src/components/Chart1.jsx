import React, { useState } from "react";
import { FiClock } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const Chart1 = () => {
  const choices = ["Week", "Month", "Year"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState(choices[0]);

  const handleSelect = (timeframe) => {
    setSelectedTimeframe(timeframe);
    setIsOpen(false);
  };

  // Map selection to index in the data array
  const timeframeMap = {
    Week: 0,
    Month: 1,
    Year: 2,
  };

  const data = [
    {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Scan",
          data: [142, 87, 163, 95, 123, 178, 105],
          borderColor: "#FF6467",
          backgroundColor: "#FF6467",
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: "#FF6467",
        },
      ],
    },
    {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Unique",
          data: [132, 98, 175, 120, 143, 96],
          borderColor: "#FF6467",
          backgroundColor: "#FF6467",
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: "#FF6467",
        },
      ],
    },
    {
      labels: ["2021", "2022", "2023", "2024", "2025"],
      datasets: [
        {
          label: "Revenue",
          data: [132, 98, 175, 120, 143],
          borderColor: "#FF6467",
          backgroundColor: "#FF6467",
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: "#FF6467",
        },
      ],
    },
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="w-full h-fit flex my-[1vw] gap-[1vw]">
      {/* Location Insight Panel */}
      <div className="w-1/2 border-1 rounded-lg border-gray-300 h-[40vw] p-[1.5vw] bg-white flex flex-col justify-between">
        <span className="flex items-center gap-[1vw]">
          <IoLocationSharp className="text-[1.5vw] text-red-400" />
          <p className="font-bold text-gray-600">Location Insight</p>
        </span>

        <div className="w-full h-[40%] border-1 rounded-lg mt-[1vw] border-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14884.613183262176!2d79.07502290198312!3d21.146296838518666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0952bd995c7%3A0x9fc6471dada94ffa!2sSitabuldi%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1751958905185!5m2!1sen!2sin"
            className="size-full rounded-lg opacity-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="w-full h-fit mt-[1vw]">
          <p className="text-[1vw] font-semibold text-gray-600">TOP LOCATIONS</p>
          <ul className="w-full mt-[1vw] flex flex-col gap-[0.5vw]">
            {[
              { name: "Nagpur Central", percent: 100, value: 178 },
              { name: "Pune Camp", percent: 82, value: 146 },
              { name: "Aurangabad Junction", percent: 65, value: 116 },
              { name: "Wardha Bazaar", percent: 54, value: 96 },
            ].map((loc, i) => (
              <li key={i} className="w-full flex items-center justify-between">
                <p className="text-[1vw] font-semibold text-gray-600">
                  {loc.name}
                </p>
                <div className="w-[60%] h-full flex items-center justify-between gap-[0.5vw]">
                  <div className="w-[85%] h-[0.8vw] rounded-lg bg-gray-300">
                    <div
                      className="h-full bg-red-400 rounded-lg"
                      style={{ width: `${loc.percent}%` }}
                    ></div>
                  </div>
                  <p className="text-[1vw] font-semibold text-gray-600">
                    {loc.value}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full h-fit flex items-center justify-center rounded-lg mt-[1vw]">
          <p className="text-[1vw] font-semibold text-gray-600 flex h-fit items-center gap-[0.5vw]">
            <img src="/bulb.png" className="h-[2vw]" alt="bulb" />
            "Know where your audience really notices you."
          </p>
        </div>
      </div>

      {/* Time-Based Chart Panel */}
      <div className="w-1/2 border-1 rounded-lg border-gray-300 h-[40vw] p-[1.5vw] bg-white flex flex-col">
        <span className="flex items-center justify-between mb-[1vw]">
          <div className="flex items-center gap-[1vw]">
            <FiClock className="text-[1.5vw] text-red-400" />
            <p className="font-bold text-gray-600">Time-Based Analysis</p>
          </div>

          <div className="relative inline-block w-fit text-left h-[80%]">
            <div
              className="flex items-center justify-between border p-2 gap-[1vw] bg-white rounded-lg cursor-pointer shadow-sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>{selectedTimeframe}</span>
              <IoIosArrowDown
                className={`transform transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {isOpen && (
              <div className="absolute z-10 mt-2 w-full bg-white border rounded-lg shadow-lg overflow-hidden">
                {choices.map((timeframe) => (
                  <div
                    key={timeframe}
                    onClick={() => handleSelect(timeframe)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {timeframe}
                  </div>
                ))}
              </div>
            )}
          </div>
        </span>

        <div className="w-full h-[40%] rounded-lg flex justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <Line data={data[timeframeMap[selectedTimeframe]]} options={options} />
          </div>
        </div>

        <div className="w-full h-full mt-[1vw] flex gap-[1vw]">
          <div className="w-full h-full flex items-center">
            <Bar data={data[timeframeMap[selectedTimeframe]]} options={options1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart1;
