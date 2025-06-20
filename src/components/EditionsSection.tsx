
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Globe, WifiOff } from 'lucide-react';

const EditionsSection = () => {
  const [selectedMode, setSelectedMode] = useState('online');

  const editions = [
    {
      name: "Starter Pack",
      onlinePrice: "₹6,000",
      offlinePrice: "₹5,000",
      description: "Perfect for small retail shops and service providers",
      features: [
        "Basic GST Billing & Invoicing",
        "Customer Management (up to 500)",
        "Basic Inventory Tracking",
        "Payment Tracking",
        "Basic Reports & Analytics",
        "Single User Access",
        "Email Support",
        "Multi-state GST Compliance"
      ],
      popular: false,
      renewal: { online: "30%", offline: "20%" }
    },
    {
      name: "Business Pack",
      onlinePrice: "₹15,000",
      offlinePrice: "₹12,500",
      description: "Ideal for growing businesses and distributors",
      features: [
        "Everything in Starter Pack",
        "Advanced Inventory Management",
        "Multi-user Access (up to 5 users)",
        "WhatsApp Business Integration",
        "Expense & Purchase Management",
        "Supplier Account Management",
        "Advanced Reports & Analytics",
        "Barcode Scanning Support",
        "Customer Credit Management",
        "Priority Email Support"
      ],
      popular: true,
      renewal: { online: "30%", offline: "20%" }
    },
    {
      name: "Enterprise CRM",
      onlinePrice: "₹18,000",
      offlinePrice: "₹16,500",
      description: "Complete solution for large operations and field teams",
      features: [
        "Everything in Business Pack",
        "Unlimited Users & Locations",
        "Field Sales Team Management",
        "GPS Tracking & Route Planning",
        "Advanced CRM Features",
        "API Access & Integrations",
        "Custom Report Builder",
        "Dedicated Account Manager",
        "Phone & WhatsApp Support",
        "On-site Training Available"
      ],
      popular: false,
      renewal: { online: "30%", offline: "20%" }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            One-Time Setup Charges - Choose Your Business Software Edition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Affordable one-time payment plans for Indian businesses. No monthly fees, lifetime software access with yearly renewal for updates and support.
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg flex">
              <button
                onClick={() => setSelectedMode('online')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 flex items-center gap-2 ${
                  selectedMode === 'online'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Globe className="h-4 w-4" />
                Online Edition
              </button>
              <button
                onClick={() => setSelectedMode('offline')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 flex items-center gap-2 ${
                  selectedMode === 'offline'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <WifiOff className="h-4 w-4" />
                Offline Edition
              </button>
            </div>
          </div>
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
                  {selectedMode === 'online' ? edition.onlinePrice : edition.offlinePrice}
                  <span className="text-lg font-normal text-gray-600"> one-time</span>
                </div>
                <p className="text-gray-600">{edition.description}</p>
                <div className="text-sm text-blue-600 font-medium">
                  Yearly Renewal: {selectedMode === 'online' ? edition.renewal.online : edition.renewal.offline}% of product value
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {edition.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
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
                  Choose {edition.name}
                </Button>
                <p className="text-xs text-gray-500 text-center mt-3">
                  ✓ No monthly fees ✓ Lifetime access ✓ Free installation support
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose One-Time Payment?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">No Monthly Subscription</h4>
              <p className="text-gray-600 text-sm">Pay once and use forever. No recurring monthly or yearly subscription fees.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Lifetime Software Access</h4>
              <p className="text-gray-600 text-sm">Continue using the software even if you skip renewal. Only updates require renewal.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Cost-Effective for SMEs</h4>
              <p className="text-gray-600 text-sm">Perfect for Indian small businesses who want to avoid monthly payment burden.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditionsSection;
