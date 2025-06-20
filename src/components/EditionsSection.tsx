
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Globe, WifiOff, AlertCircle } from 'lucide-react';

const EditionsSection = () => {
  const [selectedMode, setSelectedMode] = useState('online');

  const editions = [
    {
      name: "Professional Starter",
      onlinePrice: "₹6,000",
      offlinePrice: "₹5,000",
      description: "Perfect for growing small businesses and service providers",
      features: [
        "Multi-Channel Order Management",
        "Lead to Invoice Conversion",
        "Customer Management (up to 500)",
        "Basic Kanban Board View",
        "Payment Tracking & Reports",
        "Single User Access",
        "Email Support",
        "GST Compliance & Documentation"
      ],
      popular: false,
      renewal: { online: "30% (Required)", offline: "20% (Optional)" }
    },
    {
      name: "Business Pro",
      onlinePrice: "₹15,000",
      offlinePrice: "₹12,500",
      description: "Ideal for established businesses with advanced workflow needs",
      features: [
        "Everything in Professional Starter",
        "Advanced Order Management & Kanban",
        "Multi-user Access (up to 5 users)",
        "WhatsApp Business Integration",
        "Advanced CRM & Lead Management",
        "Supplier & Purchase Management",
        "Business Intelligence Reports",
        "Barcode & QR Code Support",
        "Customer Credit Management",
        "Priority Email & Chat Support"
      ],
      popular: true,
      renewal: { online: "30% (Required)", offline: "20% (Optional)" }
    },
    {
      name: "Enterprise Suite",
      onlinePrice: "₹18,000",
      offlinePrice: "₹16,500",
      description: "Complete solution for large operations with field teams",
      features: [
        "Everything in Business Pro",
        "Unlimited Users & Locations",
        "Advanced Field Team Management",
        "GPS Tracking & Territory Management",
        "Enterprise CRM with Analytics",
        "API Access & Custom Integrations",
        "Custom Report Builder",
        "Dedicated Account Manager",
        "Phone & WhatsApp Support",
        "On-site Training & Setup"
      ],
      popular: false,
      renewal: { online: "30% (Required)", offline: "20% (Optional)" }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Premium Business Platform - Choose Your Edition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Invest in your business growth with our premium platform. One-time setup with flexible renewal options designed for Indian businesses.
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
          
          {selectedMode === 'online' && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 flex items-center justify-center gap-2">
              <AlertCircle className="h-5 w-5 text-amber-600" />
              <span className="text-amber-800 font-medium">Online Edition requires yearly renewal for continued access</span>
            </div>
          )}
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
                  Yearly Renewal: {selectedMode === 'online' ? edition.renewal.online : edition.renewal.offline}
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
                  ✓ Premium platform access ✓ Professional setup ✓ Expert installation support
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Premium Platform?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Enterprise-Grade Solution</h4>
              <p className="text-gray-600 text-sm">Professional platform built for serious businesses ready to scale and optimize operations.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Flexible Ownership Model</h4>
              <p className="text-gray-600 text-sm">One-time investment with flexible renewal options. Offline edition works even without renewal.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">ROI-Focused Design</h4>
              <p className="text-gray-600 text-sm">Every feature designed to increase efficiency, reduce costs, and drive business growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditionsSection;
