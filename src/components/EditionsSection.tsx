
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const EditionsSection = () => {
  const editions = [
    {
      name: "Starter",
      price: "₹999",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Basic Order Management",
        "GST-Ready Invoicing",
        "Customer Management",
        "Basic Reports",
        "Online/Offline Access",
        "Single User"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "₹2,499",
      period: "/month",
      description: "For growing businesses",
      features: [
        "Everything in Starter",
        "Inventory Tracking",
        "Multi-user Access (5 users)",
        "Advanced Reports",
        "WhatsApp Integration",
        "Expense Tracking",
        "Supplier Management"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹4,999",
      period: "/month",
      description: "For large operations",
      features: [
        "Everything in Business",
        "Unlimited Users",
        "Field Team Tracking",
        "Advanced Analytics",
        "API Access",
        "Priority Support",
        "Custom Integrations"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose the Plan That Fits Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible pricing options designed to grow with your business
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {editions.map((edition, index) => (
            <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${
              edition.popular ? 'border-blue-500 border-2 scale-105' : 'hover:scale-105'
            }`}>
              {edition.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{edition.name}</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {edition.price}
                  <span className="text-lg font-normal text-gray-600">{edition.period}</span>
                </div>
                <p className="text-gray-600">{edition.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {edition.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full py-3 font-semibold transition-all duration-200 ${
                    edition.popular 
                      ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditionsSection;
