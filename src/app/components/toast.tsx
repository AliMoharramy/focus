"use client";
import { useReducer, createContext } from "react";

function reducer(state: any, action: any) {
  switch (action.type) {
    case "addToast":
      return [...state, action.payload];
    case "removeToast":
      return state.filter((toast: any) => toast.id !== action.payload);
    default:
      return state;
  }
}

export const ToastContext = createContext({} as any);

export default function ToastProvider({ children }: { children: any }) {
  const [state, dispatch] = useReducer(reducer, []);
  const addToast = (message: string, type: "error" | "warn" | "success") => {
    const id = Date.now();
    dispatch({ type: "addToast", payload: { id, message, type } });
    setTimeout(() => {
      dispatch({ type: "removeToast", payload: id });
    }, 3000);
  };
  const toast = {
    success: (message: string) => addToast(message, "success"),
    error: (message: string) => addToast(message, "error"),
    warn: (message: string) => addToast(message, "warn"),
  };
  return (
    <ToastContext.Provider value={toast}>
      {children}
      {Array.from({ length: state.length }, (_, i) => (
        <div
          key={state[i].id}
          className={`fixed bottom-5 p-2 bg-white ${state[i].type === "error" ? "toast-redbox" : ""} ${state[i].type === "warn" ? "toast-orangebox" : ""} ${state[i].type === "success" ? "toast-greenbox" : ""} border-[1px] flex justify-between items-center left-5 w-[75%] xl:w-[22rem] rounded-xl z-50 animate-fade-right animate-duration-[400ms]`}
        >
          {state[i].type === "error" && (
            <div className="flex">
              <div className="bg-red-400 px-2.5 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5"
                >
                  <path
                    fill="#FFF"
                    d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                  />
                </svg>
              </div>
              <div className="flex flex-col font-mono ml-1">
                <p className="font-bold text-[1.2rem] -mb-1.5">Error</p>
                <p className="text-[0.8rem] opacity-40">{state[i].message}</p>
              </div>
            </div>
          )}
          {state[i].type === "warn" && (
            <div className="flex">
              <div className="bg-orange-400 px-2.5 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5"
                >
                  <path
                    fill="#FFF"
                    d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                  />
                </svg>
              </div>
              <div className="flex flex-col font-mono ml-1">
                <p className="font-bold text-[1.15rem] -mb-1.5">Warn</p>
                <p className="text-[0.8rem] opacity-40">{state[i].message}</p>
              </div>
            </div>
          )}
          {state[i].type === "success" && (
            <div className="flex">
              <div className="bg-[#4BB543] px-2.5 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-5"
                >
                  <path
                    fill="#FFF"
                    d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z"
                  />
                </svg>
              </div>
              <div className="flex flex-col font-mono ml-1">
                <p className="font-bold text-[1rem] -mb-1">Successful</p>
                <p className="text-[0.8rem] opacity-40">{state[i].message}</p>
              </div>
            </div>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="w-8 opacity-60 hover:bg-gray-100 hover:opacity-100 rounded-lg p-2"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>
      ))}
    </ToastContext.Provider>
  );
}
