import Image from "next/image";
import TaskOverview from "./components/task-overview";
import RecentTask from "./components/recentTask";

export default function WorkSpace() {
  return (
    <>
      <div className="w-[90%] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-[3.9rem] h-[3.9rem] rounded-full">
            <Image
              src="/avatar/Boy2.png"
              alt="avatar"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div>
            <p className="font-bold text-2xl">Hi, Bruce👋</p>
            <p className="opacity-40 text-[0.7rem] font-sans font-bold">
              Your daily adventure starts now
            </p>
          </div>
        </div>
        {/* <div className="p-2 bg-[#EEEEEE] rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 opacity-60"><path d="M384 96l0 128-128 0 0-128 128 0zm0 192l0 128-128 0 0-128 128 0zM192 224L64 224 64 96l128 0 0 128zM64 288l128 0 0 128L64 416l0-128zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"/></svg>
            </div> */}
      </div>
      <TaskOverview />
      <div className="w-[90%] mx-auto mt-6 mb-14">
        <p className="font-bold text-xl opacity-80 mb-4">Recent Task</p>
        <RecentTask />
      </div>
    </>
  );
}
