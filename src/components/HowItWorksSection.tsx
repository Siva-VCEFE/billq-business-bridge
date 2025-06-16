
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      title: "Add Orders & Leads",
      description: "Capture customer orders and track potential leads in seconds",
      color: "bg-blue-500"
    },
    {
      step: "02",
      title: "Generate Invoice & Track Inventory",
      description: "Create GST-compliant invoices and monitor stock levels automatically",
      color: "bg-green-500"
    },
    {
      step: "03",
      title: "Get Reports & Follow-up",
      description: "Access instant business insights and automate customer communications",
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How BillQ Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple 3-step process to transform your business operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6`}>
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-8 w-8 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
