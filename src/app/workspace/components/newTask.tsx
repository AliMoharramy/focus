"use client";

import { useState } from "react";

export default function NewTask({ setIsAddTask }: { setIsAddTask: Function }) {
  const categories = [
    "Design",
    "Development",
    "Coding",
    "Meeting",
    "Study",
    "Office Time",
    "User Experience",
  ];
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: any) => {
    setSelectedCategories((prev: any) =>
      prev.includes(category)
        ? prev.filter((item: any) => item !== category)
        : [...prev, category],
    );
  };

  return (
    <div className="fixed bg-[#F6F6F6] h-full py-4 w-full top-0 left-0 z-[60] animate-fade-up animate-duration-[300ms]">
      <div className="w-[87%] mx-auto flex justify-between mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="w-10 bg-[#EEEEEE] p-2.5 px-3.5 rounded-lg cursor-pointer"
          onClick={() => setIsAddTask(false)}
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-10 bg-[#EEEEEE] p-2.5 px-3.5 rounded-lg cursor-pointer"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </div>
      <form className="w-[87%] mx-auto mt-6 flex flex-col gap-3">
        <p className="font-bold text-2xl opacity-85">New Tasks</p>
        <div className="relative w-full">
          <input
            type="text"
            name="title"
            className="border-2 p-2.5 placeholder:text-[0.75rem] text-sm font-bold placeholder:font-bold border-black border-opacity-50 w-full rounded-xl focus:outline-none relative z-10 bg-white"
            placeholder="Task Title"
          />
          <div className="absolute left-[2.5%] bottom-[-3px] w-[95%] h-[20px] bg-black z-0 rounded-xl"></div>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            name="date"
            className="border-2 p-2.5 placeholder:text-[0.75rem] text-sm font-bold placeholder:font-bold border-black border-opacity-50 w-full rounded-xl focus:outline-none relative z-10 bg-white"
            placeholder="Date"
          />
          <div className="absolute left-[2.5%] bottom-[-3px] w-[95%] h-[20px] bg-black z-0 rounded-xl"></div>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            name="assignee"
            className="border-2 p-2.5 placeholder:text-[0.75rem] text-sm font-bold placeholder:font-bold border-black border-opacity-50 w-full rounded-xl focus:outline-none relative z-10 bg-white"
            placeholder="Assignee"
          />
          <div className="absolute left-[2.5%] bottom-[-3px] w-[95%] h-[20px] bg-black z-0 rounded-xl"></div>
        </div>
        <div className="relative w-full">
          <textarea
            name="detail"
            className="border-2 h-32 p-2.5 placeholder:text-[0.75rem] text-sm font-bold placeholder:font-bold border-black border-opacity-50 w-full rounded-xl focus:outline-none relative z-10 bg-white"
            placeholder="Add your task details"
          ></textarea>
          <div className="absolute left-[2.5%] bottom-[2.5px] w-[95%] h-[20px] bg-black z-0 rounded-xl"></div>
        </div>
        <div className="mt-8 ">
          <p className="font-bold text-sm opacity-80">Category</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
              <p
                key={category}
                onClick={() => toggleCategory(category)}
                className={`text-[0.7rem] font-sans font-bold p-2 px-3 rounded-lg cursor-pointer transition-all
              ${
                selectedCategories.includes(category)
                  ? "bg-[#d1d5db] text-[#374151]"
                  : "bg-[#ECECEC] text-[#616161]"
              }`}
              >
                {category}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <p className="font-bold text-sm opacity-80">
            Get alert for this task
          </p>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#f26d5667] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#F26E56] after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-700 dark:bg-gray-300"></div>
          </label>
        </div>
        <div className="absolute bottom-0 left-0 w-full flex justify-center mb-4">
          <button
            type="submit"
            className="w-[87%] text-[#F6F6F6] font-sans font-bold mx-auto p-4 text-center bg-[#F26E56] rounded-xl"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}
