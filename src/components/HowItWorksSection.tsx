
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Settings, Zap, ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Download className="h-8 w-8 text-[#0bc073]" />,
      title: "Quick Setup",
      description: "Download and install BillQ. Complete setup within 1 hour with our guided onboarding process.",
      step: "01"
    },
    {
      icon: <Settings className="h-8 w-8 text-[#0bc073]" />,
      title: "Customize Workflow",
      description: "Configure your business processes, add products/services, and set up your preferred workflow stages.",
      step: "02"
    },
    {
      icon: <Zap className="h-8 w-8 text-[#0bc073]" />,
      title: "Start Managing",
      description: "Begin processing orders, generating invoices, and tracking your business growth with real-time insights.",
      step: "03"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            How BillQ Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Get started with BillQ in three simple steps and transform your business operations today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-green-100">
                <CardHeader className="text-center pb-4">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#0bc073] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-green-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-[#0bc073] hover:bg-[#089a5f] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
