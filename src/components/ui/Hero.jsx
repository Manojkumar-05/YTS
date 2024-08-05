import React from "react";
import { FlipWords } from "./ui-comp/flip-words";
import { TextGenerateEffect } from "./ui-comp/text-generate-effect";
import NumberTicker from "./ui-comp/number-ticker";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import AnimatedShinyText from "./ui-comp/animated-shiny-text";
import { Cardz } from "./card";
import { BackgroundBeams } from "./ui-comp/background-beams";

export function Hero() {
  const words = ["Modern", "Cutting-Edge", "Cross-Industrial", "Optimized"];

  return (
    <div >
      <div className="mt-[9rem] flex flex-col items-center gap-9 px-4 overflow-auto">
        <section className="lg:text-4xl sm:2xl font-semibold mx-auto  text-[#8c6a5d]">
          <div className="flex">
            <TextGenerateEffect words={"Build"} />
            <FlipWords words={words} /> <br />
          </div>
          <TextGenerateEffect words={"tech solutions with YAR"} />
        </section>
        <button className="z-10 flex items-center justify-center">
          <div
            className={cn(
              "group rounded-full border transition-all ease-in hover:cursor-pointer  border-white/5 bg-black "
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300 text-white">
              <span>Join Us</span>{" "}
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </button>
        <div className="flex flex-col gap-10 text-white font-medium lg:text-2xl my-[4rem] lg:flex-row">
          <div className="h-7">
            <NumberTicker value={100} className="lg:ml-5" />+
            <br />
            Projects
          </div>
          <div className="h-7">
            <NumberTicker value={1000} className="lg:ml-9" />+
            <br />
            Job Openings
          </div>
          <div className="h-7">
            <NumberTicker value={100} className="lg:ml-14" />+
            <br />
            Intern Openings
          </div>
        </div>

        <Cardz />
      </div>

    </div>
  );
}
