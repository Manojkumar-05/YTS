import Nav from "@/components/ui/nav";
import NumberTicker from "@/components/ui/number-ticker";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Wcard } from "@/components/ui/Wcard";
import React from "react";

const PageTwo = () => {
  return (
    <div className="bg-red-700 w-screen h-dvh overflow-auto">
      <Nav />
      <TracingBeam className="">
        <div>
          <NumberTicker value={1000000} />
        </div>
        <Wcard />
        <Wcard />
      </TracingBeam>
    </div>
  );
};

export default PageTwo;
