import type { NextPage } from "next";

// Local import
import HomeSection from "@/components/home/home-section";
import PortfolioSection from "@/components/home/portfolio-section";

const Home: NextPage = () => {
  return (
    <div className="px-16 h-screen overflow-y-scroll snap-y snap-mandatory">
      <HomeSection />
      <PortfolioSection />
      <HomeSection />
      <HomeSection />
    </div>
  );
};

export default Home;
