import { BackgroundBeams } from "../ui/ui-comp/background-beams";
import { Hero } from "../ui/Hero";

const Home = () => {
  return (
    <div className="bg-[#460073] min-h-screen overflow-auto">
      <Hero />
      <BackgroundBeams />
    </div>
  );
};

export default Home;
