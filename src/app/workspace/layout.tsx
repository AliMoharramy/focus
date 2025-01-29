"use client";
import { useState } from "react";
import NewTask from "./components/newTask";
import TabBar from "./components/tabBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isAddTask, setIsAddTask] = useState(false);
  return (
    <main className=" bg-[#F6F6F6] h-dvh overflow-y-scroll py-5">
      {isAddTask && <NewTask setIsAddTask={setIsAddTask} />}
      {children}
      <TabBar setIsAddTask={setIsAddTask} />
    </main>
  );
}
