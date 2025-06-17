"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useIssue } from "../../_hook/useIssue";
import { News } from "@/model/issue";

const EmotionChart = () => {
  const searchParams = useSearchParams();
  const name = searchParams?.get("name") ?? "";
  const { data, isLoading } = useIssue(name);

  const convertNewsToNameScore = data?.newsList.map(
    ({ title, sentimentScore }: any) => ({
      name: title,
      score: sentimentScore,
    })
  );

  console.log("con", convertNewsToNameScore);

  return (
    <div>
      <div className="flex items-center gap-[5px]">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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
        <h3 className="block text-subtitle text-[#1F2937] font-bold">
          감정분석 그래프
        </h3>
      </div>
      <div
        style={{ width: "100%", height: 180 }}
        className="mt-[5px] rounded-[13px] p-[12px] bg-white"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={convertNewsToNameScore}
            margin={{
              top: 5,

              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} /> <Tooltip />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EmotionChart;
