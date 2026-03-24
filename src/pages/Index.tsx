import HeroSection from "@/components/landing/HeroSection";
import ChallengeSection from "@/components/landing/ChallengeSection";
import DailyProblemsSection from "@/components/landing/DailyProblemsSection";
import MindsetSection from "@/components/landing/MindsetSection";
import CtaBanner from "@/components/landing/CtaBanner";
import ProcessSection from "@/components/landing/ProcessSection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import FaqSection from "@/components/landing/FaqSection";
import FinalCtaSection from "@/components/landing/FinalCtaSection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <main className="overflow-x-hidden">
    <HeroSection />
    <ChallengeSection />
    <DailyProblemsSection />
    <MindsetSection />
    <CtaBanner />
    <ProcessSection />
    <ExperienceSection />
    <FaqSection />
    <FinalCtaSection />
    <Footer />
  </main>
);

export default Index;
