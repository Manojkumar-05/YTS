import React from "react";
import { FlipWords } from "./flip-words";
import { Button } from "@nextui-org/react";

export function WordTransitions() {
  const words = ["better", "fast", "optimal", "modern"];

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4 overflow-auto">
      <div className="text-4xl mx-auto font-normal text-neutral-600 text-center">
        Create
        <FlipWords words={words} /> <br />
        tech solutions with YAR
      </div>
      <Button color="" variant="light">Get Started</Button>
    </div>
  );
}
