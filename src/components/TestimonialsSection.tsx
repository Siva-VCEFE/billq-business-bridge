
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Kumar Electronics",
      quote: "BillQ transformed our billing process. We save 3 hours daily and never miss invoices anymore.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      business: "Sharma Distributors",
      quote: "The offline mode is a game-changer. Our field team can work anywhere without internet worries.",
      rating: 5
    },
    {
      name: "Amit Patel",
      business: "Patel Manufacturing",
      quote: "Inventory tracking with low stock alerts helped us reduce waste by 30% and increase profits.",
      rating: 5
    },
    {
      name: "Sunita Gupta",
      business: "Gupta Wholesale",
      quote: "BillQ's user-friendly interface made it easy for our entire team to adapt quickly. Excellent support!",
      rating: 5
    },
    {
      name: "Vikram Singh",
      business: "Singh Auto Parts",
      quote: "The real-time inventory updates have streamlined our operations. Best investment we made this year.",
      rating: 5
    },
    {
      name: "Neha Agarwal",
      business: "Agarwal Textiles",
      quote: "Customer management features are outstanding. We can track all interactions and improve our service.",
      rating: 5
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            See how BillQ is helping businesses like yours succeed
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-green-100">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex justify-center mb-4">
                        <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-[#0bc073]" />
                      </div>
                      <p className="text-gray-700 mb-4 sm:mb-6 italic text-center text-sm sm:text-base">
                        "{testimonial.quote}"
                      </p>
                      <div className="text-center">
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                        <div className="text-xs sm:text-sm text-gray-600">{testimonial.business}</div>
                        <div className="flex justify-center mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-base sm:text-lg">★</span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
