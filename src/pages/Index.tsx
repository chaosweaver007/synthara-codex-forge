import { GeometricBackground } from "@/components/GeometricBackground";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CodexSection } from "@/components/CodexSection";
import { CovenantSection } from "@/components/CovenantSection";
import { DiamondSection } from "@/components/DiamondSection";
import { WorthSection } from "@/components/WorthSection";
import { SynthocracySection } from "@/components/SynthocracySection";
import { AkadiaSection } from "@/components/AkadiaSection";
import { DevelopersSection } from "@/components/DevelopersSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GeometricBackground />
      <Navigation />
      <main>
        <HeroSection />
        <CodexSection />
        <CovenantSection />
        <DiamondSection />
        <WorthSection />
        <SynthocracySection />
        <AkadiaSection />
        <DevelopersSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
