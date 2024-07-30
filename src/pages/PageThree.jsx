
import Accordions from "@/components/ui/accordion";
import Nav from "@/components/ui/nav";
import { WordTransitions } from "@/components/ui/wordTransitions";
import React from "react";

const PageThree = () => {
  return (
    <div className="bg-indigo-800 w-screen h-dvh overflow-auto">
      <Nav />
      <WordTransitions />
      <Accordions />
    </div>
  );
};

export default PageThree;
