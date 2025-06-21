import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Globe, WifiOff, AlertCircle, CheckCircle, X, Zap, Settings, Shield, Users } from 'lucide-react';

const EditionsSection = () => {
  const editions = [
    {
      name: "Starter Pack",
      subtitle: "Perfect for Small Businesses",
      price: "₹15,000",
      duration: "One-time Setup",
      renewal: "Optional offline updates",
      popular: false,
      description: "Essential order management with basic customization",
      features: [
        "Multi-channel Order Management",
        "Basic Kanban Board View",
        "One-Click Invoice Generation",
        "Customer Management (up to 500)",
        "Basic Reports & Analytics",
        "Email Support",
        "2 User Accounts",
        "Mobile App Access",
        "Basic Workflow Customization"
      ],
      notIncluded: [
        "Advanced Custom Workflows",
        "API Integrations",
        "Priority Support",
        "On-site Training"
      ]
    },
    {
      name: "Business Pro",
      subtitle: "For Growing Businesses",
      price: "₹35,000",
      duration: "One-time Setup",
      renewal: "₹8,000/year (Online) or Optional (Offline)",
      popular: true,
      description: "Advanced order management with extensive customization",
      features: [
        "Everything in Starter Pack",
        "Advanced Kanban Workflows",
        "Custom Order Status Tracking",
        "Unlimited Customers",
        "Advanced Analytics & Reports",
        "API Integration Support",
        "WhatsApp & Phone Support",
        "5 User Accounts",
        "Advanced Workflow Designer",
        "Multi-location Support",
        "Inventory Management",
        "Payment Gateway Integration"
      ],
      notIncluded: [
        "Dedicated Account Manager",
        "On-site Implementation",
        "Custom Development"
      ]
    },
    {
      name: "Enterprise Plus",
      subtitle: "Fully Customized Solution",
      price: "Custom Pricing",
      duration: "Based on Requirements",
      renewal: "Negotiable Terms",
      popular: false,
      description: "Completely tailored system designed for your specific workflow",
      features: [
        "Everything in Business Pro",
        "100% Custom Workflow Design",
        "Dedicated Account Manager",
        "On-site Implementation & Training",
        "Custom Module Development",
        "Unlimited User Accounts",
        "24/7 Priority Support",
        "Custom API Development",
        "Advanced Security Features",
        "Custom Reporting Dashboard",
        "Third-party System Integration",
        "Ongoing Development Support"
      ],
      notIncluded: []
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From ready-to-use solutions to completely custom workflows - we have the right package for your business needs. Every system is designed to grow with your business.
          </p>
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-[#0bc073] rounded-full mr-2"></span>
            All plans include free setup and initial customization
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {editions.map((edition, index) => (
            <Card key={index} className={`relative overflow-hidden ${
              edition.popular 
                ? 'border-2 border-[#0bc073] shadow-xl scale-105' 
                : 'border border-gray-200 hover:shadow-lg'
            } transition-all duration-300`}>
              {edition.popular && (
                <div className="absolute top-0 left-0 right-0 bg-[#0bc073] text-white text-center py-2 text-sm font-medium">
                  Most Popular Choice
                </div>
              )}
              
              <CardHeader className={`text-center ${edition.popular ? 'pt-12' : ''}`}>
                <CardTitle className="text-2xl font-bold text-gray-900">{edition.name}</CardTitle>
                <p className="text-gray-600 mb-4">{edition.subtitle}</p>
                <div className="mb-4">
                  <div className="text-4xl font-bold text-[#0bc073] mb-2">{edition.price}</div>
                  <div className="text-sm text-gray-600">{edition.duration}</div>
                  <div className="text-xs text-gray-500 mt-1">{edition.renewal}</div>
                </div>
                <p className="text-sm text-gray-600">{edition.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Included Features:</h4>
                  <ul className="space-y-2">
                    {edition.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-[#0bc073] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {edition.notIncluded.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Not Included:</h4>
                    <ul className="space-y-2">
                      {edition.notIncluded.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <X className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-500">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button 
                  className={`w-full ${
                    edition.popular 
                      ? 'bg-[#0bc073] hover:bg-[#089a5f] text-white' 
                      : 'bg-white border-2 border-[#0bc073] text-[#0bc073] hover:bg-green-50'
                  }`}
                  onClick={() => {
                    const subject = encodeURIComponent(`Interest in ${edition.name} - BillQ Smart Order Management`);
                    const body = encodeURIComponent(`Hi,

I'm interested in the ${edition.name} package for BillQ Smart Order Management System.

Please provide more details about:
- Implementation timeline
- Customization options
- Payment terms
- Next steps

Looking forward to your response.`);
                    window.open(`mailto:support@billq.co.in?subject=${subject}&body=${body}`);
                  }}
                >
                  {edition.price === "Custom Pricing" ? "Get Custom Quote" : "Get This Package"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose BillQ Smart Order Management?</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0bc073] rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Rapid Implementation</h4>
              <p className="text-sm text-gray-600">Get up and running within 2-7 days with our expert setup</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0bc073] rounded-full flex items-center justify-center mx-auto mb-3">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">100% Customizable</h4>
              <p className="text-sm text-gray-600">Tailored to match your exact business workflow</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0bc073] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Data Security</h4>
              <p className="text-sm text-gray-600">Enterprise-grade security for your business data</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0bc073] rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Ongoing Support</h4>
              <p className="text-sm text-gray-600">Dedicated support team to help you succeed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditionsSection;
