import Navbar from "@/components/layout/Navbar";
import PortfolioBackground from "@/components/layout/PortfolioBackground";

import Hero from "@/components/home/Hero";
import HomeOverview from "@/components/home/HomeOverview";
import FeaturedProjects from "@/components/home/FeaturedProjects";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen bg-[#05070a]">
      {/* Global technology background */}
      <PortfolioBackground />

      {/* Entire website content */}
      <div className="relative z-10">
        <Navbar />

        <main className="overflow-x-clip">
          <Hero />

          <HomeOverview />

          <FeaturedProjects />
        </main>
      </div>
    </div>
  );
}