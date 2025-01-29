import CircleProgress from "./circleProgress";

export default function RecentTask() {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <div className="flex justify-between border-2 p-3 border-black w-full rounded-2xl relative z-10 bg-white">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-xl">Website for Rune.io</p>
            <p className="opacity-40 text-[0.7rem] font-sans font-bold">
              Digital Product Design
            </p>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4"
              >
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
              </svg>
              <p className="font-bold text-[0.8rem] font-mono">12 Tasks</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <p className="absolute text-[0.8rem] font-[family-name:var(--font-rubic-paint)]">
              40%
            </p>
            <CircleProgress
              percent={40}
              color="#F06C54"
              size={60}
              strokeWidth={8}
            />
          </div>
        </div>
        <div className="absolute left-[2.5%] bottom-[-3px] w-[95%] h-[20px] bg-black z-0 rounded-xl"></div>
      </div>
      <div className="relative">
        <div className="flex justify-between border-2 p-3 border-black w-full rounded-2xl relative z-10 bg-white">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-xl">Dashboard for ProSavvy</p>
            <p className="opacity-40 text-[0.7rem] font-sans font-bold">
              Digital Product Design
            </p>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4"
              >
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
              </svg>
              <p className="font-bold text-[0.8rem] font-mono">12 Tasks</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <p className="absolute text-[0.8rem] font-[family-name:var(--font-rubic-paint)]">
              75%
            </p>
            <CircleProgress
              percent={75}
              color="#50C1C6"
              size={60}
              strokeWidth={8}
            />
          </div>
        </div>
        <div className="absolute left-[2.5%] bottom-[-3px] w-[95%] h-[20px] bg-black z-0 rounded-xl"></div>
      </div>
      <div className="relative">
        <div className="flex justify-between border-2 p-3 border-black w-full rounded-2xl relative z-10 bg-white">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-xl">Mobile Apps for Track.id</p>
            <p className="opacity-40 text-[0.7rem] font-sans font-bold">
              Digital Product Design
            </p>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4"
              >
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
              </svg>
              <p className="font-bold text-[0.8rem] font-mono">12 Tasks</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <p className="absolute text-[0.8rem] font-[family-name:var(--font-rubic-paint)]">
              50%
            </p>
            <CircleProgress
              percent={50}
              color="#FFC446"
              size={60}
              strokeWidth={8}
            />
          </div>
        </div>
        <div className="absolute left-[2.5%] bottom-[-3px] w-[95%] h-[20px] bg-black z-0 rounded-xl"></div>
      </div>
      <div className="relative">
        <div className="flex justify-between border-2 p-3 border-black w-full rounded-2xl relative z-10 bg-white">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-xl">Mobile Apps for Track.id</p>
            <p className="opacity-40 text-[0.7rem] font-sans font-bold">
              Digital Product Design
            </p>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4"
              >
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
              </svg>
              <p className="font-bold text-[0.8rem] font-mono">12 Tasks</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <p className="absolute text-[0.8rem] font-[family-name:var(--font-rubic-paint)]">
              50%
            </p>
            <CircleProgress
              percent={50}
              color="#FFC446"
              size={60}
              strokeWidth={8}
            />
          </div>
        </div>
        <div className="absolute left-[2.5%] bottom-[-3px] w-[95%] h-[20px] bg-black z-0 rounded-xl"></div>
      </div>
      <div className="relative">
        <div className="flex justify-between border-2 p-3 border-black w-full rounded-2xl relative z-10 bg-white">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-xl">Website for Rune.io</p>
            <p className="opacity-40 text-[0.7rem] font-sans font-bold">
              Digital Product Design
            </p>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4"
              >
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
              </svg>
              <p className="font-bold text-[0.8rem] font-mono">12 Tasks</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <p className="absolute text-[0.8rem] font-[family-name:var(--font-rubic-paint)]">
              40%
            </p>
            <CircleProgress
              percent={40}
              color="#F06C54"
              size={60}
              strokeWidth={8}
            />
          </div>
        </div>
        <div className="absolute left-[2.5%] bottom-[-3px] w-[95%] h-[20px] bg-black z-0 rounded-xl"></div>
      </div>
      <div className="relative">
        <div className="flex justify-between border-2 p-3 border-black w-full rounded-2xl relative z-10 bg-white">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-xl">Dashboard for ProSavvy</p>
            <p className="opacity-40 text-[0.7rem] font-sans font-bold">
              Digital Product Design
            </p>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4"
              >
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
              </svg>
              <p className="font-bold text-[0.8rem] font-mono">12 Tasks</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <p className="absolute text-[0.8rem] font-[family-name:var(--font-rubic-paint)]">
              75%
            </p>
            <CircleProgress
              percent={75}
              color="#50C1C6"
              size={60}
              strokeWidth={8}
            />
          </div>
        </div>
        <div className="absolute left-[2.5%] bottom-[-3px] w-[95%] h-[20px] bg-black z-0 rounded-xl"></div>
      </div>
      <div className="relative">
        <div className="flex justify-between border-2 p-3 border-black w-full rounded-2xl relative z-10 bg-white">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-xl">Mobile Apps for Track.id</p>
            <p className="opacity-40 text-[0.7rem] font-sans font-bold">
              Digital Product Design
            </p>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4"
              >
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
              </svg>
              <p className="font-bold text-[0.8rem] font-mono">12 Tasks</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <p className="absolute text-[0.8rem] font-[family-name:var(--font-rubic-paint)]">
              50%
            </p>
            <CircleProgress
              percent={50}
              color="#FFC446"
              size={60}
              strokeWidth={8}
            />
          </div>
        </div>
        <div className="absolute left-[2.5%] bottom-[-3px] w-[95%] h-[20px] bg-black z-0 rounded-xl"></div>
      </div>
      <div className="relative">
        <div className="flex justify-between border-2 p-3 border-black w-full rounded-2xl relative z-10 bg-white">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-xl">Mobile Apps for Track.id</p>
            <p className="opacity-40 text-[0.7rem] font-sans font-bold">
              Digital Product Design
            </p>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4"
              >
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
              </svg>
              <p className="font-bold text-[0.8rem] font-mono">12 Tasks</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <p className="absolute text-[0.8rem] font-[family-name:var(--font-rubic-paint)]">
              50%
            </p>
            <CircleProgress
              percent={50}
              color="#FFC446"
              size={60}
              strokeWidth={8}
            />
          </div>
        </div>
        <div className="absolute left-[2.5%] bottom-[-3px] w-[95%] h-[20px] bg-black z-0 rounded-xl"></div>
      </div>
    </div>
  );
}
