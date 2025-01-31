"use client";
import { useState } from "react";
import CircleProgress from "../components/circleProgress";
import TimerSetting from "./timerSetting";

export default function Timer() {
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  return (
    <div className="relative flex flex-col gap-12 items-center pt-32 h-full">
      {isSettingOpen && <TimerSetting setIsSettingOpen={setIsSettingOpen} />}
      <div className="relative">
        <p className="absolute text-[#222222] text-[4rem] font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[family-name:var(--font-chewy)]">
          24:59
        </p>
        <CircleProgress
          percent={1}
          color="#222222"
          size={300}
          strokeWidth={15}
        />
      </div>
      <div className="flex gap-0.5 font-mono">
        <button className="bg-[#222222] flex items-center gap-2 p-3 rounded-l-xl text-[#F6F6F6]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-5"
          >
            <path
              fill="#F6F6F6"
              d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176c0-8.7 4.7-16.7 12.3-20.9z"
            />
          </svg>
          <p>START TIMER</p>
        </button>
        <button
          className="bg-[#222222] flex items-center gap-2 p-3 rounded-r-xl text-[#F6F6F6]"
          onClick={() => setIsSettingOpen(true)}
        >
          SETTING
        </button>
      </div>
    </div>
  );
}
