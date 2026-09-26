import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import TrainersSection from "@/components/TrainersSection";
import PricingSection from "@/components/PricingSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import BMICalculator from "@/components/BMICalculator";
import ScheduleSection from "@/components/ScheduleSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingJoinButton from "@/components/FloatingJoinButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <TrainersSection />
      <PricingSection />
      <GallerySection />
      <TestimonialsSection />
      <FacilitiesSection />
      <BMICalculator />
      <ScheduleSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingJoinButton />
    </div>
  );
};

export default Index;
