
import Accordions from "@/components/ui/accordion";
import Nav from "@/components/ui/nav";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Wcard } from "@/components/ui/Wcard";
import { WordTransitions } from "@/components/ui/wordTransitions";
import React from "react";

const PageThree = () => {
  return (
    <div className="bg-indigo-800 w-screen h-dvh overflow-auto">
      <Nav />
      <TracingBeam className="px-6">
          <div>
        <Wcard />
        <Accordions />
          </div>
      </TracingBeam>
    </div>
  );
};

export default PageThree;
