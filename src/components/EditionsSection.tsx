
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Globe, WifiOff, AlertCircle, CheckCircle, X, Zap, Settings, Shield, Users, Infinity, Star } from 'lucide-react';

const EditionsSection = () => {
  const editions = [
    {
      name: "Starter Pack",
      subtitle: "Essential Invoicing Solution",
      price: "₹6,000",
      originalPrice: null,
      duration: "One-time (Including Setup)",
      renewal: "No renewal required",
      popular: false,
      badge: "Perfect for Small Business",
      color: "from-blue-500 to-blue-600",
      description: "Perfect for small businesses focused on professional invoicing and basic reporting",
      features: [
        "Smart & Instant Billing",
        "GST-Compliant Invoice Generation",
        "Customer Management (Unlimited)",
        "Basic Invoice Reports",
        "Multi-Printer Compatibility",
        "Email & WhatsApp Invoice Delivery",
        "Single User Account",
        "Offline Mode Only"
      ],
      notIncluded: [
        "Order Management with Kanban View",
        "Lead to Invoice Conversion",
        "Multi-Channel Sales Handling",
        "POS System",
        "Inventory Management",
        "Payroll Management",
        "Advanced Analytics",
        "Online Mode"
      ]
    },
    {
      name: "Business Pro",
      subtitle: "Complete Business Management",
      price: "₹12,500 (Offline) / ₹15,000 (Online)",
      originalPrice: "₹18,000",
      duration: "One-time Setup Cost",
      renewal: "20% (Offline - Optional) / 30% (Online - Mandatory)",
      popular: true,
      badge: "Most Popular",
      color: "from-green-500 to-emerald-600",
      description: "Comprehensive solution with unlimited features for growing businesses",
      features: [
        "Everything in Starter Pack",
        "Lead to Invoice in One Click",
        "Multi-Channel Sales Handling",
        "Multi Price Level Setup Option",
        "Wholesale-Specific Invoicing Module",
        "Smart POS for Retail Businesses",
        "Customer Balance & Outstanding Tracker",
        "Vendor & Supplier Payment Management",
        "Expense & Payment Tracking",
        "Inventory Monitoring in Real-Time",
        "Barcode Sticker Printing",
        "Role-Based User Access & Permissions",
        "Comprehensive Reports & Business Insights",
        "Multi-Location Support",
        "Unlimited Users & Data",
        "Online OR Offline Mode",
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
      name: "Enterprise Edition",
      subtitle: "Fully Customized Solution",
      price: "Starting ₹25,000",
      originalPrice: null,
      duration: "Based on Requirements",
      renewal: "Negotiable Terms",
      popular: false,
      badge: "Fully Customizable",
      color: "from-purple-500 to-purple-600",
      description: "Complete business automation with custom workflows and unlimited scalability",
      features: [
        "Everything in Business Pro",
        "Order Management with Kanban View",
        "Sales Order Processing",
        "Automated Payroll & Payslip Management",
        "Mobile App Access (Reporting Only)",
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
      highlight: "🎯 Completely Tailored for Your Business Workflow + Mobile App"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Choose Your Perfect Solution
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Pricing Plans That Scale
            <span className="block text-[#0bc073]">With Your Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From essential invoicing to complete business automation - we have the right package for your business needs. Every system is designed to grow with your business with unlimited scalability.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full text-sm font-medium shadow-md">
              <Infinity className="w-5 h-5 mr-2" />
              Unlimited Users & Data
            </div>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium shadow-md">
              <Globe className="w-5 h-5 mr-2" />
              Online OR Offline Mode
            </div>
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-6 py-3 rounded-full text-sm font-medium shadow-md">
              <span className="w-3 h-3 bg-[#0bc073] rounded-full mr-2"></span>
              Free Setup & Customization
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {editions.map((edition, index) => (
            <Card key={index} className={`relative overflow-hidden group hover:scale-105 transition-all duration-300 ${
              edition.popular 
                ? 'border-2 border-[#0bc073] shadow-2xl ring-4 ring-green-100' 
                : 'border border-gray-200 hover:shadow-xl hover:border-gray-300'
            }`}>
              {/* Gradient Background */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-r ${edition.color} opacity-10`}></div>
              
              {/* Popular Badge */}
              {edition.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-[#0bc073] to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ {edition.badge}
                  </div>
                </div>
              )}
              
              <CardHeader className={`text-center relative z-10 ${edition.popular ? 'pt-8' : 'pt-6'}`}>
                {!edition.popular && (
                  <div className="inline-flex items-center justify-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium mb-4">
                    {edition.badge}
                  </div>
                )}
                
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{edition.name}</CardTitle>
                <p className="text-gray-600 mb-6">{edition.subtitle}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <div className="text-4xl font-bold text-[#0bc073]">{edition.price}</div>
                    {edition.originalPrice && (
                      <div className="text-lg text-gray-400 line-through">{edition.originalPrice}</div>
                    )}
                  </div>
                  <div className="text-sm text-gray-600 mb-1">{edition.duration}</div>
                  <div className="text-xs text-gray-500">Annual Renewal: {edition.renewal}</div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{edition.description}</p>
                
                {edition.highlight && (
                  <div className="bg-gradient-to-r from-[#0bc073] to-emerald-600 text-white px-4 py-3 rounded-lg text-sm font-medium shadow-lg">
                    {edition.highlight}
                  </div>
                )}
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#0bc073] mr-2" />
                    Included Features:
                  </h4>
                  <ul className="space-y-3">
                    {edition.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-[#0bc073] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {edition.notIncluded.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <X className="h-5 w-5 text-gray-400 mr-2" />
                      Not Included:
                    </h4>
                    <ul className="space-y-2">
                      {edition.notIncluded.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <X className="h-4 w-4 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-500">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button 
                  className={`w-full h-12 text-lg font-semibold transition-all duration-300 ${
                    edition.popular 
                      ? 'bg-gradient-to-r from-[#0bc073] to-emerald-600 hover:from-emerald-600 hover:to-[#0bc073] text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1' 
                      : 'bg-white border-2 border-[#0bc073] text-[#0bc073] hover:bg-gradient-to-r hover:from-[#0bc073] hover:to-emerald-600 hover:text-white hover:border-transparent shadow-md hover:shadow-lg'
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
                  {edition.price.includes("Starting") ? "Get Custom Quote" : "Get This Package"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose BillQ Smart Order Management?</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0bc073] to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-3">Rapid Implementation</h4>
              <p className="text-gray-600">Get up and running within 2-7 days with our expert setup</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0bc073] to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-3">100% Customizable</h4>
              <p className="text-gray-600">Tailored to match your exact business workflow</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0bc073] to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-3">Data Security</h4>
              <p className="text-gray-600">Enterprise-grade security for your business data</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0bc073] to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-3">Ongoing Support</h4>
              <p className="text-gray-600">Dedicated support team to help you succeed</p>
            </div>
          </div>

          <div className="mt-10">
            <div className="bg-white rounded-2xl p-8 border border-green-200 shadow-md">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Important Notes:</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0bc073] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Annual renewal is mandatory for online editions to maintain cloud services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0bc073] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Offline edition renewal is optional but recommended for updates and support</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0bc073] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Additional customization beyond standard features will be charged extra</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0bc073] mr-3 mt-0.5 flex-shrink-0" />
                    <span>All plans include unlimited users, customers, and data storage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditionsSection;
