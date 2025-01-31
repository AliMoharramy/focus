"use client";

import { useRef, useState } from "react";

export default function TimerSetting({
  setIsSettingOpen,
}: {
  setIsSettingOpen: Function;
}) {
  const tags = ["Focus", "Study", "Work", "Sport", "Play", "Muse"];
  const [selectedMode, setSelectedMode] = useState("pomo");
  const [selectedTags, setSelectedTags] = useState<any>([]);
  const [remidRange, setRemidRange] = useState(25);
  const [isRemind, setIsRemind] = useState(false);
  const [isAddTag, setIsAddTag] = useState(false);
  const addTagRef = useRef<HTMLDivElement>(null);

  function handleClick(event: any) {
    if (
      isAddTag &&
      addTagRef.current &&
      !addTagRef.current.contains(event.target)
    ) {
      setIsAddTag(false);
    }
  }

  return (
    <div
      className="absolute w-full p-5 h-[90%] overflow-y-scroll mb-10 rounded-t-3xl bottom-0 left-0 bg-[#F6F6F6] z-50 border-t-2 animate-fade-up animate-duration-300"
      onClick={handleClick}
    >
      <div className="flex items-center  mb-12">
        <div
          className="bg-[#EBEBEB] p-2 rounded-full px-2.5"
          onClick={() => setIsSettingOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="w-4 opacity-80"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-2 p-1.5 text-sm gap-1 rounded-2xl items-center justify-center bg-[#EBEBEB] select-none">
            <p
              className={`text-center p-1.5 px-2 rounded-xl ${selectedMode === "pomo" ? "bg-white" : "opacity-50"}`}
              onClick={() => setSelectedMode("pomo")}
            >
              POMODORO
            </p>
            <p
              className={`text-center p-1.5 px-2 rounded-xl ${selectedMode === "infi" ? "bg-white" : "opacity-50"}`}
              onClick={() => setSelectedMode("infi")}
            >
              INFINITE
            </p>
          </div>
        </div>
      </div>
      {selectedMode === "infi" && <div className="w-[90%] mx-auto">
        <div className="flex justify-between">
          <p className="font-bold text-xl">Time reminder</p>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={() => setIsRemind(isRemind ? false : true)}
            />
            <div
              className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-gray-700 dark:bg-gray-300 
                        peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] 
                        after:start-[2px] after:bg-gray-500 peer-checked:after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"
            ></div>
          </label>
        </div>
        {isRemind && (
          <div className="animate-fade-down animate-duration-200 p-1 mt-2">
            <label htmlFor="steps-range" className="block text-[0.8rem] opacity-70 font-medium">
              Remind every : {remidRange}min
            </label>
            <input
              id="steps-range"
              type="range"
              min="25"
              value={remidRange}
              max="100"
              step="25"
              onChange={(e: any) => setRemidRange(e.target.value)}
              className="w-full h-[2px] rounded-lg appearance-none cursor-pointer 
                   bg-gray-300 bg-gradient-to-r from-black to-black
                   bg-[length:calc((var(--val)-25)/75*100%)_100%] bg-no-repeat
                   accent-black 
                   [&::-webkit-slider-thumb]:appearance-none 
                   [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 
                   [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full"
              style={{ "--val": `${remidRange}` } as React.CSSProperties}
            />
          </div>
        )}
      </div>}
      <div className="w-[90%] mx-auto mt-5">
        <div className="flex justify-between">
          <p className="font-bold text-xl">Tag</p>
          <div
            className="bg-[#EBEBEB] p-2 rounded-full px-[0.6rem]"
            onClick={() => setIsAddTag(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-4 opacity-80"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-6">
          {Array.from({ length: tags.length }, (_, i) => (
            <div
              key={i}
              className={`${selectedTags.includes(tags[i]) ? "bg-[#222222] text-[#F6F6F6] animate-fade animate-duration-300 justify-between" : "bg-white animate-fade justify-center animate-duration-300"} flex items-center p-4 py-5 rounded-xl`}
              onClick={() =>
                setSelectedTags(
                  selectedTags.includes(tags[i])
                    ? selectedTags.filter((tag: string) => tag !== tags[i])
                    : [...selectedTags, tags[i]],
                )
              }
            >
              <p className="font-bold text-sm opacity-80">{tags[i]}</p>
              {selectedTags.includes(tags[i]) && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-[0.8rem]"
                >
                  <path
                    fill="#F6F6F6"
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
      {isAddTag && (
        <div
          ref={addTagRef}
          className="absolute p-5 flex flex-col bottom-0 w-full h-[18%] left-0 z-[60] bg-[#F6F6F6] bg-opacity-80 animate-fade-right animate-duration-300"
        >
          {/* <div className="flex items-center gap-4">
        <div
          className="bg-[#EBEBEB] p-2 rounded-full px-2.5"
          onClick={() => setIsSettingOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="w-4 opacity-80"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>
        <div className="flex justify-center w-full bg-[#EBEBEB] rounded-full p-2">
          <p className="font-bold text-[0.9rem]">Add Tag</p>
        </div>
          </div> */}
          <form className="mt-4 grid grid-cols-4 gap-2">
            <div className="relative w-full col-span-3">
              <input
                type="text"
                name="tag"
                className="border-2 p-3 placeholder:text-[0.75rem]  text-sm font-bold placeholder:font-bold border-black border-opacity-50 w-full rounded-xl focus:outline-none relative z-10 bg-white"
                placeholder="work"
                maxLength={10}
              />
            </div>
            <button className="text-clip p-3 rounded-xl text-[#F6F6F6] bg-[#222222]">
              ADD
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
