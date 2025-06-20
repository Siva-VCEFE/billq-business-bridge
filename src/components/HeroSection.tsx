
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
      bgColor: "from-blue-600 to-indigo-600",
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
      bgColor: "from-purple-600 to-violet-600",
      icon: "🎯"
    },
    {
      title: "Smart Business Analytics",
      description: "Data-driven insights for growth decisions",
      bgColor: "from-orange-600 to-red-600",
      icon: "📊"
    }
  ];

  const businessStats = [
    { number: "500+", label: "Businesses Trust Us", icon: <Users className="h-5 w-5" /> },
    { number: "90%", label: "Time Saved on Orders", icon: <Zap className="h-5 w-5" /> },
    { number: "40%", label: "Revenue Growth", icon: <TrendingUp className="h-5 w-5" /> }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Trusted by 500+ Growing Businesses
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your Business with 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Smart Order Management</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Revolutionary business management platform that combines <strong>multi-channel order processing</strong>, <strong>Kanban workflow visualization</strong>, and <strong>one-click invoice generation</strong>. Turn leads into revenue 90% faster with intelligent automation.
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-blue-100">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  📋
                </div>
                <span className="text-gray-700 font-medium">Visual Kanban Order Management</span>
              </div>
              <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-green-100">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  ⚡
                </div>
                <span className="text-gray-700 font-medium">One-Click Lead to Invoice</span>
              </div>
              <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-purple-100">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  🎯
                </div>
                <span className="text-gray-700 font-medium">Multi-Channel Integration</span>
              </div>
              <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-orange-100">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  📊
                </div>
                <span className="text-gray-700 font-medium">AI-Powered Business Insights</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg">
                Start Free Trial Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105">
                <Play className="mr-2 h-5 w-5" />
                Watch Success Stories
              </Button>
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-3 gap-6">
              {businessStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="text-blue-600 mr-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Carousel 
              className="w-full max-w-lg mx-auto" 
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
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300 border border-white/50">
                      <div className={`bg-gradient-to-r ${image.bgColor} h-40 rounded-2xl mb-6 flex flex-col items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="text-white text-center relative z-10">
                          <div className="text-4xl mb-3">{image.icon}</div>
                          <div className="text-xl font-bold mb-2">{image.title}</div>
                          <div className="text-sm opacity-90">{image.description}</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
                        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4 animate-pulse"></div>
                        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2 animate-pulse"></div>
                      </div>
                      <div className="mt-6 flex justify-between items-center">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        </div>
                        <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          Live Preview
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-6">Join successful businesses already using our platform</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-lg border border-gray-200">
              <span className="text-gray-700 font-semibold">Manufacturing</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-lg border border-gray-200">
              <span className="text-gray-700 font-semibold">Retail</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-lg border border-gray-200">
              <span className="text-gray-700 font-semibold">Services</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-lg border border-gray-200">
              <span className="text-gray-700 font-semibold">Wholesale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
