import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import HomeOverview from "@/components/home/HomeOverview";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <HomeOverview />
    </main>
  );
}