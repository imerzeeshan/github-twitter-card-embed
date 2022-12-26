import React, { useState } from "react";
import { AtSymbolIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { CodeBracketIcon } from "@heroicons/react/24/outline";

export default function ParentBox() {
  const [darkMode, setDarkMode] = useState(true);
  const [theme, setTheme] = useState("dracula");
  const [response, setResponse] = useState(true);
  const [border, setBorder] = useState(true);
  const [time, setTime] = useState(true);
  const [icon, setIcon] = useState("default");
  return (
    <div className="flex flex-col items-center">
      <span className="mt-28 text-cyan-200 font-semibold text-3xl">
        PREVIEW
      </span>
      <div
        className={`flex relative ring mt-10 rounded ring-cyan-200 transition-all ease-in-out ${
          darkMode ? `bg-[#010409]` : `bg-white`
        } `}
      >
        <img
          src={`/api/test?theme=${theme}&response=${response}&border=${border}&time=${time}&icon=${icon}`}
          alt=""
          className="p-8"
        />
        <button
          className="bg-cyan-200 absolute right-0 -top-8 p-1 flex text-xs items-center gap-1 pl-2 pr-1 rounded-t font-semibold group"
          onClick={() => setDarkMode(!darkMode)}
        >
          Theme
          {darkMode ? (
            <SunIcon className="w-6 group-active:scale-75 transition-all ease-in-out" />
          ) : (
            <MoonIcon className="w-6 group-active:scale-75 transition-all ease-in-out" />
          )}
        </button>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-10 flex flex-col items-center gap-6"
      >
        <div className="flex bg-cyan-200 text-cyan-900 p-2 gap-2 rounded focus-within:ring ring-cyan-200/20 focus-within:bg-[#72f1ff]">
          <AtSymbolIcon className="w-6" />
          <input
            type="text"
            name=""
            id=""
            required
            placeholder="Twitter Username"
            className="bg-transparent outline-none placeholder-cyan-900/80"
          />
        </div>
        <button
          type="submit"
          className="bg-green-200 text-green-900 px-6 py-3 font-semibold flex gap-2 rounded-full ring ring-green-200/30 active:scale-95 transition-all ease-in-out"
        >
          <CodeBracketIcon className="w-6 stroke-2" /> Copy Code
        </button>
      </form>
      <div className="my-10 text-white">
        <p className="text-cyan-200 font-semibold text-3xl">Customisations</p>
        <span className="flex justify-center items-center gap-2">
          Response:{" "}
          <input
            type="checkbox"
            name=""
            id=""
            checked={response}
            className="w-4 h-4 accent-cyan-200"
            onChange={() => setResponse(!response)}
          />
        </span>
        <span className="flex justify-center items-center gap-2">
          Time:{" "}
          <input
            type="checkbox"
            name=""
            id=""
            checked={time}
            className="w-4 h-4 accent-cyan-200"
            onChange={() => setTime(!time)}
          />
        </span>
        <span className="flex justify-center items-center gap-2">
          Border:{" "}
          <input
            type="checkbox"
            name=""
            id=""
            checked={border}
            className="w-4 h-4 accent-cyan-200"
            onChange={() => setBorder(!border)}
          />
        </span>
      </div>
    </div>
  );
}
