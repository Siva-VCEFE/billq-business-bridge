
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
import Footer from '../components/Footer';

const Index = () => {
  // Google Analytics initialization
  React.useEffect(() => {
    // Google Analytics 4
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

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
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;
