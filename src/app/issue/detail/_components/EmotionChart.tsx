"use client";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,

    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,

    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,

    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,

    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,

    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,

    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,

    amt: 2100,
  },
];

const EmotionChart = () => {
  return (
    <div>
      <div className="flex items-center gap-[5px]">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_149_637)">
            <path
              d="M19.1668 5L11.2502 12.9167L7.0835 8.75L0.833496 15M19.1668 5H14.1668M19.1668 5L19.1668 10"
              stroke="#1E1E1E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_149_637">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h3 className="block text-subtitle text-[#1F2937] font-bold">감정분석 그래프</h3>
      </div>
      <div style={{ width: "100%", height: 180 }} className="mt-[5px] rounded-[13px] p-[12px] bg-white">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,

              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EmotionChart;
