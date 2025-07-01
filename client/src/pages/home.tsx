import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/hero";
import ProblemStatement from "@/components/sections/problem-statement";
import DataArchitecture from "@/components/sections/data-architecture";
import Products from "@/components/sections/products";
import InteractiveFeatures from "@/components/sections/interactive-features";
import Benefits from "@/components/sections/benefits";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ProblemStatement />
      <DataArchitecture />
      <Products />
      <InteractiveFeatures />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
}
