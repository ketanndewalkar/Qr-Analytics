import React from "react";
import { FiClock } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
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
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';

// Register all needed chart components once
ChartJS.register(
  LineElement,
  BarElement,
  ArcElement, // for Pie chart
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const Chart = () => {
  const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [400, 600, 300, 800, 700, 900],
      borderColor: '#FF6467',
      backgroundColor: 'rgba(255, 100, 103, 0.2)', // translucent fill
      fill: true,
      tension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: '#FF6467',
    },
  ],
};

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data1 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr',"May","Jun","Jul"],
  datasets: [
    {
      label: 'Sales',
      data: [300, 500, 200, 400,500,700, 600],
      backgroundColor: '#FF6467',
      borderRadius: 5,
    },
  ],
};

  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
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
            {[{ name: 'Rajura', percent: 100, value: 1000 },
              { name: 'Sitabuldi Bus Stand', percent: 70, value: 760 },
              { name: 'Amravati', percent: 30, value: 300 },
              { name: 'Nashik', percent: 20, value: 200 }].map((loc, i) => (
              <li key={i} className="w-full flex items-center justify-between">
                <p className="text-[1vw] font-semibold text-gray-600">{loc.name}</p>
                <div className="w-[60%] h-full flex items-center justify-between gap-[0.5vw]">
                  <div className="w-[85%] h-[0.8vw] rounded-lg bg-gray-300">
                    <div
                      className="h-full bg-red-400 rounded-lg"
                      style={{ width: `${loc.percent}%` }}
                    ></div>
                  </div>
                  <p className="text-[1vw] font-semibold text-gray-600">{loc.value}</p>
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
        <span className="flex items-center gap-[1vw]">
          <FiClock className="text-[1.5vw] text-red-400" />
          <p className="font-bold text-gray-600">Time-Based Analysis</p>
        </span>

        <div className="w-full h-[40%] rounded-lg mt-[1.5vw] flex justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <Line data={data} options={options} />
          </div>
        </div>

        <div className="w-full h-full mt-[1vw] flex gap-[1vw]">
          <div className="w-full h-full flex items-center">
            <Bar data={data1} options={options1} />
          </div>
          {/* <div className="w-1/2 h-full flex items-center">
            <Pie data={pieData} options={pieOptions} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Chart;
