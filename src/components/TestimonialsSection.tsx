
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Building2, MapPin, User, Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mr. Allan Bridjith",
      designation: "Founder & CEO",
      business: "Spaco Workspace",
      location: "Tirunelveli",
      businessLogo: "/placeholder.svg",
      quote: "BillQ has revolutionized our lead management and invoicing process. The seamless integration of accounts management has streamlined our workspace operations, allowing us to focus more on client satisfaction while maintaining perfect financial records.",
      rating: 5,
      businessType: "Co-working Space"
    },
    {
      name: "Mr. Abu",
      designation: "Managing Director", 
      business: "Abu Hanifa Mart",
      location: "Tirunelveli",
      businessLogo: "/placeholder.svg",
      quote: "After a decade in retail business, choosing BillQ POS was our best decision. The system handles our supermarket operations flawlessly - from inventory tracking to customer billing. It's reliable, fast, and perfectly suited for our daily operations.",
      rating: 5,
      businessType: "Retail Supermarket"
    },
    {
      name: "Business Owner",
      designation: "Managing Director",
      business: "Elite Blazers",
      location: "Tamil Nadu",
      businessLogo: "/placeholder.svg", 
      quote: "BillQ's customized order management system has transformed how we handle customer orders and advance payments. The complete business management suite keeps track of everything from customer preferences to final delivery, making our operations incredibly efficient.",
      rating: 5,
      businessType: "Custom Apparel"
    },
    {
      name: "Mr. Manika Raj",
      designation: "Managing Director",
      business: "Nellai Digital Hall",
      location: "Tirunelveli",
      businessLogo: "/placeholder.svg",
      quote: "Our service rental business needed a robust management system, and BillQ delivered perfectly. From booking management to billing and customer service tracking, everything is organized and automated. It's made our digital hall operations seamless.",
      rating: 5,
      businessType: "Digital Services"
    },
    {
      name: "Mr. Abdul Kadher",
      designation: "Managing Director",
      business: "Grand Aari Jewels",
      location: "India",
      businessLogo: "/placeholder.svg",
      quote: "Managing our jewelry business from abroad was challenging until we adopted BillQ. The cloud-based invoice and inventory management allows me to monitor everything in real-time from anywhere in the world. It's absolutely essential for our operations.",
      rating: 5,
      businessType: "Jewelry Business"
    },
    {
      name: "Mr. Sadhik",
      designation: "MD Dubai",
      business: "Royal Hardwares & Electricals", 
      location: "Tirunelveli",
      businessLogo: "/placeholder.svg",
      quote: "BillQ's comprehensive inventory and vendor management system has optimized our hardware business operations. Managing suppliers, stock levels, and customer orders has never been easier. The complete business management features are exactly what we needed.",
      rating: 5,
      businessType: "Hardware & Electricals"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            See how BillQ is helping businesses like yours succeed across different industries
          </p>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 sm:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-green-100 bg-white">
                    <CardContent className="p-4 sm:p-6">
                      {/* Business Header */}
                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0bc073] to-emerald-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                          <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg leading-tight">
                            {testimonial.business}
                          </h3>
                          <div className="flex items-center text-xs sm:text-sm text-gray-600 mt-1">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                            <span className="truncate">{testimonial.location}</span>
                          </div>
                          <div className="text-xs text-[#0bc073] font-medium mt-1">
                            {testimonial.businessType}
                          </div>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="mb-4 sm:mb-6">
                        <div className="flex justify-center mb-3">
                          <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-[#0bc073]" />
                        </div>
                        <p className="text-gray-700 italic text-center text-sm sm:text-base leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                      </div>

                      {/* Rating */}
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Person Details */}
                      <div className="border-t border-gray-100 pt-4">
                        <div className="flex items-center justify-center">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                            <User className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-gray-900 text-sm sm:text-base">
                              {testimonial.name}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600">
                              {testimonial.designation}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-green-200 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Join These Successful Businesses
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Ready to transform your business operations? Get in touch with our team for a personalized demo and consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918220760340?text=Hi, I'm interested in BillQ for my business. Please provide more details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm sm:text-base"
              >
                WhatsApp Business Enquiry
              </a>
              <a
                href="https://wa.me/918220760340?text=Hi, I'm interested in becoming a BillQ affiliate/reseller. Please share the details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#0bc073] text-[#0bc073] rounded-lg font-semibold hover:bg-green-50 transition-colors text-sm sm:text-base"
              >
                Affiliate Program Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
