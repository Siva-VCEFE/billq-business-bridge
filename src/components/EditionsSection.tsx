
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Globe, WifiOff, AlertCircle, CheckCircle, X, Zap, Settings, Shield, Users, Infinity } from 'lucide-react';

const EditionsSection = () => {
  const editions = [
    {
      name: "Starter Pack",
      subtitle: "Essential Invoicing Solution",
      price: "₹15,000",
      duration: "One-time Setup",
      renewal: "₹5,000/year (Online) or Optional (Offline)",
      popular: false,
      description: "Perfect for small businesses focused on professional invoicing and basic reporting",
      features: [
        "Smart & Instant Billing",
        "GST-Compliant Invoice Generation",
        "Customer Management (Unlimited)",
        "Basic Reports & Analytics",
        "Multi-Printer Compatibility",
        "Barcode Sticker Printing",
        "Email & WhatsApp Invoice Delivery",
        "2 User Accounts",
        "Mobile App Access",
        "Online/Offline Mode"
      ],
      notIncluded: [
        "Order Management with Kanban View",
        "Lead to Invoice Conversion",
        "Multi-Channel Sales Handling",
        "POS System",
        "Inventory Management",
        "Payroll Management",
        "Advanced Analytics"
      ]
    },
    {
      name: "Business Pro",
      subtitle: "Complete Business Management",
      price: "₹35,000",
      duration: "One-time Setup",
      renewal: "₹8,000/year (Online) or Optional (Offline)",
      popular: true,
      description: "Comprehensive solution with unlimited features for growing businesses",
      features: [
        "Everything in Starter Pack",
        "Lead to Invoice in One Click",
        "Multi-Channel Sales Handling",
        "Wholesale-Specific Invoicing Module",
        "Smart POS for Retail Businesses",
        "Customer Balance & Outstanding Tracker",
        "Vendor & Supplier Payment Management",
        "Expense & Payment Tracking",
        "Inventory Monitoring in Real-Time",
        "Role-Based User Access & Permissions",
        "Comprehensive Reports & Business Insights",
        "Multi-Location Support",
        "Unlimited Users & Data",
        "Priority Support"
      ],
      notIncluded: [
        "Sales Order Management",
        "Kanban Board View",
        "Automated Payroll & Payslip Management"
      ],
      highlight: "🚀 UNLIMITED Everything - Users, Invoices, Customers, Storage!"
    },
    {
      name: "Enterprise Plus",
      subtitle: "Fully Customized Solution",
      price: "Custom Pricing",
      duration: "Based on Requirements",
      renewal: "Negotiable Terms",
      popular: false,
      description: "Complete business automation with custom workflows and unlimited scalability",
      features: [
        "Everything in Business Pro",
        "Order Management with Kanban View",
        "Sales Order Processing",
        "Automated Payroll & Payslip Management",
        "100% Custom Workflow Design",
        "Dedicated Account Manager",
        "On-site Implementation & Training",
        "Custom Module Development",
        "24/7 Priority Support",
        "Custom API Development",
        "Advanced Security Features",
        "Third-party System Integration",
        "Ongoing Development Support",
        "White-label Solutions"
      ],
      notIncluded: [],
      highlight: "🎯 Completely Tailored for Your Business Workflow"
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
            From essential invoicing to complete business automation - we have the right package for your business needs. Every system is designed to grow with your business with unlimited scalability.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <Infinity className="w-4 h-4 mr-2" />
              Unlimited Users & Data
            </div>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <Globe className="w-4 h-4 mr-2" />
              Online & Offline Mode
            </div>
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-[#0bc073] rounded-full mr-2"></span>
              Free Setup & Customization
            </div>
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
                {edition.highlight && (
                  <div className="bg-gradient-to-r from-[#0bc073] to-emerald-600 text-white px-3 py-2 rounded-lg text-xs font-medium mt-3">
                    {edition.highlight}
                  </div>
                )}
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
