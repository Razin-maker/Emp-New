import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import InsightSection from "@/components/landing/InsightSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ProductPreviewSection from "@/components/landing/ProductPreviewSection";
import DifferenceSection from "@/components/landing/DifferenceSection";
import ForWhomSection from "@/components/landing/ForWhomSection";
import OpenSourceSection from "@/components/landing/OpenSourceSection";
import FutureSection from "@/components/landing/FutureSection";
import PhilosophySection from "@/components/landing/PhilosophySection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <InsightSection />
        <HowItWorksSection />
        <ProductPreviewSection />
        <DifferenceSection />
        <ForWhomSection />
        <OpenSourceSection />
        <FutureSection />
        <PhilosophySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
