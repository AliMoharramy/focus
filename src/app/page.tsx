import axios from "axios";
import { hashPass } from "./lib/db";
// import { useEffect } from 'react';
export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const value = await axios
    .get(`${baseUrl}/api/example`)
    .then(function (response: any) {
      return response.data;
    })
    .catch(function (error: any) {
      console.log(error);
    });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {Array.from({ length: value.length }, (_, i) => (
          <p key={i}>{value[i].name}</p>
        ))}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
