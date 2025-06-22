
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp, Users, Zap } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HeroSection = () => {
  const carouselImages = [
    {
      title: "Multi-Channel Order Management",
      description: "Kanban board view for visual workflow management",
      bgColor: "from-[#0bc073] to-emerald-600",
      icon: "📋"
    },
    {
      title: "One-Click Invoice Generation",
      description: "Convert leads to invoices instantly",
      bgColor: "from-green-600 to-emerald-600",
      icon: "⚡"
    },
    {
      title: "Intelligent CRM System",
      description: "AI-powered customer relationship management",
      bgColor: "from-teal-600 to-green-600",
      icon: "🎯"
    },
    {
      title: "Smart Business Analytics",
      description: "Data-driven insights for growth decisions",
      bgColor: "from-emerald-600 to-teal-600",
      icon: "📊"
    }
  ];

  const businessStats = [
    { number: "50+", label: "Growing Businesses", icon: <Users className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { number: "90%", label: "Time Saved on Orders", icon: <Zap className="h-4 w-4 sm:h-5 sm:w-5" /> },
    { number: "40%", label: "Revenue Growth", icon: <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" /> }
  ];

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 sm:py-16 md:py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-green-100 text-green-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-[#0bc073] rounded-full mr-2 animate-pulse"></span>
              Trusted by 50+ Growing Businesses
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Smart Order Management
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0bc073] to-emerald-600"> Beyond Traditional Billing</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              Revolutionary business management platform that combines <strong>multi-channel order processing</strong>, <strong>Kanban workflow visualization</strong>, and <strong>one-click lead-to-invoice conversion</strong>. Fully customizable to match your unique business workflow - because every business is different.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-green-100">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-base">
                  📋
                </div>
                <span className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">Visual Kanban Order Management</span>
              </div>
              <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-green-100">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-base">
                  ⚡
                </div>
                <span className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">One-Click Lead to Invoice</span>
              </div>
              <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-green-100">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-base">
                  🎯
                </div>
                <span className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">Multi-Channel Integration</span>
              </div>
              <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-green-100">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-base">
                  🔧
                </div>
                <span className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">Custom Workflow Design</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
              <Button size="lg" className="bg-gradient-to-r from-[#0bc073] to-emerald-600 hover:from-[#089a5f] hover:to-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg transition-all duration-200 hover:scale-105 shadow-lg">
                Get Free Demo Today
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={scrollToPricing}
                className="border-2 border-[#0bc073] text-[#0bc073] hover:bg-green-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg transition-all duration-200 hover:scale-105"
              >
                View All Pricing Plans
              </Button>
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              {businessStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-1 sm:mb-2">
                    <div className="text-[#0bc073] mr-1 sm:mr-2">{stat.icon}</div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{stat.number}</div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <Carousel 
              className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto" 
              opts={{ align: "start", loop: true }}
              plugins={[
                Autoplay({
                  delay: 2500,
                  stopOnInteraction: false,
                })
              ]}
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 transform hover:scale-105 transition-transform duration-300 border border-white/50">
                      <div className={`bg-gradient-to-r ${image.bgColor} h-32 sm:h-36 md:h-40 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex flex-col items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="text-white text-center relative z-10">
                          <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">{image.icon}</div>
                          <div className="text-sm sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 px-2">{image.title}</div>
                          <div className="text-xs sm:text-sm opacity-90 px-2">{image.description}</div>
                        </div>
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        <div className="h-3 sm:h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
                        <div className="h-3 sm:h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4 animate-pulse"></div>
                        <div className="h-3 sm:h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2 animate-pulse"></div>
                      </div>
                      <div className="mt-4 sm:mt-6 flex justify-between items-center">
                        <div className="flex space-x-1 sm:space-x-2">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#0bc073] rounded-full"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-500 rounded-full"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-teal-500 rounded-full"></div>
                        </div>
                        <div className="text-xs text-gray-500 bg-gray-100 px-2 sm:px-3 py-1 rounded-full">
                          Live Preview
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#0bc073] to-emerald-500 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <p className="text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">Join successful businesses already using our platform</p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 opacity-60">
            <div className="bg-white/80 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg border border-gray-200">
              <span className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base">Manufacturing</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg border border-gray-200">
              <span className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base">Retail</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg border border-gray-200">
              <span className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base">Wholesale</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg border border-gray-200">
              <span className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base">Services</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg border border-gray-200">
              <span className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base">E-commerce</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
