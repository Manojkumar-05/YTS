import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { Hero } from "../ui/Hero";
import Nav from "../ui/Nav";

const Home = () => {
  return (
    <div className="bg-[#AB4ABA] w-screen h-dvh overflow-auto">
      <Nav />
      <BackgroundGradientAnimation>
        <Hero />    
      </BackgroundGradientAnimation>
    </div>
  );
};

export default Home;
