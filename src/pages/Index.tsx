import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <About />
    </div>
  );
};

export default Index;
