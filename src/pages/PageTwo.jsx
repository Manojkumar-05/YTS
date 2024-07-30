import Nav from "@/components/ui/nav";
import NumberTicker from "@/components/ui/number-ticker";
import React from "react";

const PageTwo = () => {
  return (
    <div className="bg-red-700 w-screen h-screen">
      <Nav />
      <div>
        <NumberTicker value={1000000} />
      </div>
    </div>
  );
};

export default PageTwo;
