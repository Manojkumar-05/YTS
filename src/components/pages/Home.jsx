import { BackgroundGradientAnimation } from "../ui/ui-comp/background-gradient-animation";
import { Hero } from "../ui/Hero";
const Home = () => {
  return (
    <div className="bg-[#AB4ABA] w-screen h-dvh overflow-auto">
      <BackgroundGradientAnimation>
        <Hero />
      </BackgroundGradientAnimation>
    </div>
  );
};

export default Home;
