
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

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
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how BillQ is helping businesses like yours succeed
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <Quote className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-gray-700 mb-6 italic text-center">
                  "{testimonial.quote}"
                </p>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.business}</div>
                  <div className="flex justify-center mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
