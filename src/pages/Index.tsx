
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PainPointsSection from '../components/PainPointsSection';
import FeaturesSection from '../components/FeaturesSection';
import EditionsSection from '../components/EditionsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TargetAudienceSection from '../components/TargetAudienceSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import FinalCTASection from '../components/FinalCTASection';
import WhatsAppWidget from '../components/support/WhatsAppWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <EditionsSection />
      <HowItWorksSection />
      <TargetAudienceSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;
