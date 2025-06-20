
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HeroSection = () => {
  const carouselImages = [
    {
      title: "Complete Business Suite",
      description: "All-in-one enterprise management platform",
      bgColor: "from-blue-600 to-indigo-600"
    },
    {
      title: "Smart Order Management",
      description: "Multi-channel orders with Kanban board view",
      bgColor: "from-green-600 to-emerald-600"
    },
    {
      title: "Advanced CRM System",
      description: "Convert leads to invoices with one click",
      bgColor: "from-purple-600 to-violet-600"
    },
    {
      title: "Mobile-First Design",
      description: "Premium experience across all devices",
      bgColor: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Premium Business Management
              <span className="text-blue-600"> Platform for Growth</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Complete enterprise solution with advanced CRM, multi-channel order management, Kanban workflow, and intelligent automation. Convert leads to invoices instantly while managing your entire business ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                View Premium Plans
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                <Play className="mr-2 h-5 w-5" />
                Watch Platform Demo
              </Button>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              ✓ Enterprise-grade security ✓ Multi-channel integration ✓ Advanced analytics ✓ Premium support
            </div>
          </div>
          <div className="relative">
            <Carousel 
              className="w-full max-w-md mx-auto" 
              opts={{ align: "start", loop: true }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                })
              ]}
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                      <div className={`bg-gradient-to-r ${image.bgColor} h-32 rounded-lg mb-6 flex items-center justify-center`}>
                        <div className="text-white text-center">
                          <div className="text-2xl font-bold mb-2">{image.title}</div>
                          <div className="text-sm opacity-90">{image.description}</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
