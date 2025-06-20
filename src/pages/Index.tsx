
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
import AboutSection from '../components/AboutSection';
import SupportSection from '../components/SupportSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PainPointsSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="pricing">
        <EditionsSection />
      </div>
      <HowItWorksSection />
      <TargetAudienceSection />
      <TestimonialsSection />
      <FAQSection />
      <div id="support">
        <SupportSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <FinalCTASection />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;
