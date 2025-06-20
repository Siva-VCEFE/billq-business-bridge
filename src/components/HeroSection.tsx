
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroSection = () => {
  const carouselImages = [
    {
      title: "Dashboard Overview",
      description: "Complete business management at your fingertips",
      bgColor: "from-blue-600 to-indigo-600"
    },
    {
      title: "Invoice Generation",
      description: "GST-compliant invoices in one click",
      bgColor: "from-green-600 to-emerald-600"
    },
    {
      title: "Inventory Tracking",
      description: "Real-time stock monitoring and alerts",
      bgColor: "from-purple-600 to-violet-600"
    },
    {
      title: "Mobile Access",
      description: "Work anywhere, anytime - online or offline",
      bgColor: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Best Billing Software for Small Business
              <span className="text-blue-600"> Online & Offline</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Complete GST billing software with inventory management, customer accounts, and field team tracking. Works perfectly offline - no internet required for daily operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                View Pricing & Plans
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                <Play className="mr-2 h-5 w-5" />
                Watch Live Demo
              </Button>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              ✓ No monthly fees ✓ Lifetime updates ✓ Works offline ✓ Multi-state GST ready
            </div>
          </div>
          <div className="relative">
            <Carousel className="w-full max-w-md mx-auto" opts={{ align: "start", loop: true }}>
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
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
