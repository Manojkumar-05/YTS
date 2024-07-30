import React from "react";
import { FlipWords } from "./flip-words";
import { Dock } from "./dock";
import NumberTicker from "./number-ticker";

export function WordTransitions() {
  const words = ["better", "fast", "optimal", "modern"];

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Create
        <FlipWords words={words} /> <br />
        tech solutions with YAR
      </div>
    </div>
  );
}
