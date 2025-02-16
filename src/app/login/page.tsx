"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { ToastContext } from "../components/toast";
import Loading from "../components/Loading";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useContext(ToastContext);
  async function submit(e: any) {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await axios.post("/api/login", formData);
      const data = response.data;

      if (data && data.hash) {
        const expirationDate = new Date();
        expirationDate.setMonth(expirationDate.getMonth() + 3);
        document.cookie = `accessCookie=${data.hash}; expires=${expirationDate.toUTCString()}; path=/`;
        toast.success("logged in :)");
        setIsLoading(false);
      } else {
        toast.error("Incorrect username or password.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error logging in: ", error);
      setIsLoading(false);
    }
  }
  const router = useRouter();
  return (
    <main className=" bg-[#F6F6F6] animate-fade">
      <div className="h-dvh w-[85%] xl:w-full xl:max-w-[25rem] mx-auto py-10 relative">
        <div className="ml-0.5 mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="w-10 bg-[#EEEEEE] p-2.5 px-3.5 rounded-lg cursor-pointer"
            onClick={() => router.push("/")}
          >
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </div>
        <div className="my-6">
          <h3 className={`font-bold text-2xl`}>Welcome Back! 👋</h3>
          <p className="opacity-40 text-[0.7rem] mt-4 font-sans font-bold">
            Log in to your Streamline account to access all your services <br />{" "}
            and manage your bookings easily.
          </p>
        </div>
        <form
          className="font-sans flex flex-col gap-5 mt-10"
          onSubmit={(e: any) => {
            setIsLoading(true);
            submit(e);
          }}
        >
          <div className="relative w-full">
            <input
              type="text"
              name="username"
              className="border-2 p-3 placeholder:text-[0.75rem]  text-sm font-bold placeholder:font-bold border-black border-opacity-50 w-full rounded-xl focus:outline-none relative z-10 bg-white"
              placeholder="username | @brucewayne23"
            />
            <div className="absolute left-[2.5%] bottom-[-3px] w-[95%] h-[20px] bg-black z-0 rounded-xl"></div>
          </div>
          <div className="relative w-full">
            <input
              type="password"
              name="password"
              className="border-2 p-3 placeholder:text-[0.75rem]  text-sm font-bold placeholder:font-bold border-black border-opacity-50 w-full rounded-xl focus:outline-none relative z-10 bg-white"
              placeholder="password"
            />
            <div className="absolute left-[2.5%] bottom-[-3px] w-[95%] h-[20px] bg-black z-0 rounded-xl"></div>
          </div>
          <button
            type="submit"
            className="bg-[#F26E56] text-[#F6F6F6] rounded-xl p-3.5 font-bold mt-10"
          >
            {isLoading ? <Loading style="w-[20px]" color="#FFF" /> : "Login"}
          </button>
        </form>
        <div className="flex items-center justify-center space-x-2 mt-6">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="text-gray-400 text-[0.7rem] font-bold font-mono">
            Or
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="grid grid-cols-3 gap-4 [&>div]:border-black [&>div]:border-opacity-50 mt-6">
          <div className="bg-white cursor-pointer border-2 flex items-center justify-center rounded-xl p-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
              className="w-[1.3rem]"
            >
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
          </div>
          <div className="bg-white cursor-pointer border-2 flex items-center justify-center rounded-xl p-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-[1.3rem]"
            >
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
          </div>
          <div className="bg-white cursor-pointer border-2 flex items-center justify-center rounded-xl p-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              className="w-[1.3rem]"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
