import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { Hero } from "../ui/Hero";
import { Nav } from "../ui/nav";

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
