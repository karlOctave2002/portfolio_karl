import Navbar from "@/components/layout/Navbar";
import PortfolioBackground from "@/components/layout/PortfolioBackground";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import HomeOverview from "@/components/home/HomeOverview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ExperienceEducation from "@/components/home/ExperienceEducation";
import Certifications from "@/components/home/Certifications";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen bg-[#05070a]">
      {/* Global technology background */}
      <PortfolioBackground />

      {/* Website content */}
      <div className="relative z-10">
        <Navbar />

        <main className="overflow-x-clip">
          <Hero />

          <HomeOverview />

          <FeaturedProjects />

          <ExperienceEducation />

          <Certifications />

          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}