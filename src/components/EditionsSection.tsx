
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X, Zap, Settings, Shield, Users, Infinity, Star, HardDrive } from 'lucide-react';

const EditionsSection = () => {
  const editions = [
    {
      name: "Starter Pack",
      subtitle: "Essential Invoicing Solution",
      price: "₹6,000",
      duration: "One-time Setup Cost",
      storage: "5GB Storage",
      popular: false,
      badge: "Perfect for Small Business",
      color: "border-blue-200 hover:border-blue-300",
      bgColor: "bg-blue-50",
      buttonStyle: "bg-blue-600 hover:bg-blue-700",
      description: "Perfect for small businesses focused on professional invoicing",
      features: [
        "Smart & Instant Billing",
        "GST-Compliant Invoice Generation", 
        "Customer Management (Unlimited)",
        "Basic Invoice Reports",
        "Multi-Printer Compatibility",
        "Email & WhatsApp Invoice Delivery",
        "Single User Account",
        "Offline Mode"
      ]
    },
    {
      name: "Business Pro",
      subtitle: "Complete Business Management",
      offlinePrice: "₹15,000",
      onlinePrice: "₹16,500", 
      duration: "One-time Setup Cost",
      storage: "15GB Storage",
      renewal: "Annual Renewal: 20% (Offline - Optional) / 30% (Online - Mandatory)",
      popular: true,
      badge: "Most Popular",
      color: "border-green-300 hover:border-green-400",
      bgColor: "bg-green-50",
      buttonStyle: "bg-gradient-to-r from-[#0bc073] to-emerald-600 hover:from-emerald-600 hover:to-[#0bc073]",
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
      highlight: "🚀 UNLIMITED Everything - Users, Invoices, Customers!"
    },
    {
      name: "Enterprise Edition", 
      subtitle: "Fully Customized Solution",
      price: "Custom Pricing",
      duration: "Based on Requirements",
      storage: "Custom Storage",
      renewal: "Negotiable Terms",
      popular: false,
      badge: "Fully Customizable",
      color: "border-purple-200 hover:border-purple-300",
      bgColor: "bg-purple-50",
      buttonStyle: "bg-purple-600 hover:bg-purple-700",
      description: "Complete business automation with custom workflows",
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
        "Priority Support (Business Hours)",
        "Custom API Development",
        "Advanced Security Features",
        "Third-party System Integration",
        "Ongoing Development Support",
        "White-label Solutions"
      ],
      highlight: "🎯 Completely Tailored for Your Business Workflow"
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
            Simple, Transparent Pricing
            <span className="block text-[#0bc073]">That Grows With You</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From essential invoicing to complete business automation - choose the right package for your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {editions.map((edition, index) => (
            <Card key={index} className={`relative overflow-hidden group transition-all duration-300 ${edition.color} ${
              edition.popular 
                ? 'ring-2 ring-[#0bc073] shadow-xl transform scale-105' 
                : 'hover:shadow-lg hover:-translate-y-1'
            }`}>
              
              {/* Popular Badge */}
              {edition.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-[#0bc073] to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ {edition.badge}
                  </div>
                </div>
              )}
              
              <div className={`absolute top-0 left-0 right-0 h-24 ${edition.bgColor} opacity-50`}></div>
              
              <CardHeader className={`text-center relative z-10 ${edition.popular ? 'pt-8' : 'pt-6'}`}>
                {!edition.popular && (
                  <div className="inline-flex items-center justify-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium mb-4 mx-auto">
                    {edition.badge}
                  </div>
                )}
                
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{edition.name}</CardTitle>
                <p className="text-gray-600 mb-6">{edition.subtitle}</p>
                
                <div className="mb-6">
                  {edition.offlinePrice ? (
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-[#0bc073]">
                        Offline: {edition.offlinePrice}
                      </div>
                      <div className="text-2xl font-bold text-[#0bc073]">
                        Online: {edition.onlinePrice}
                      </div>
                    </div>
                  ) : (
                    <div className="text-3xl font-bold text-[#0bc073]">{edition.price}</div>
                  )}
                  <div className="text-sm text-gray-600 mt-2">{edition.duration}</div>
                  <div className="flex items-center justify-center mt-2 text-sm text-gray-500">
                    <HardDrive className="w-4 h-4 mr-1" />
                    {edition.storage}
                  </div>
                  {edition.renewal && (
                    <div className="text-xs text-gray-500 mt-1">{edition.renewal}</div>
                  )}
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{edition.description}</p>
                
                {edition.highlight && (
                  <div className="bg-gradient-to-r from-[#0bc073] to-emerald-600 text-white px-4 py-3 rounded-lg text-sm font-medium shadow-lg mb-4">
                    {edition.highlight}
                  </div>
                )}
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 text-center">What's Included:</h4>
                  <ul className="space-y-2">
                    {edition.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-4 w-4 text-[#0bc073] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className={`w-full h-12 text-lg font-semibold transition-all duration-300 ${edition.buttonStyle} text-white shadow-lg hover:shadow-xl`}
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

        {/* Why Choose BillQ */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose BillQ?</h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0bc073] to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-3">Quick Setup</h4>
              <p className="text-gray-600">Get running within 2-7 days</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0bc073] to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-3">Fully Customizable</h4>
              <p className="text-gray-600">Tailored to your workflow</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0bc073] to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Infinity className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-3">Unlimited Usage</h4>
              <p className="text-gray-600">No limits on users or data</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0bc073] to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-3">Expert Support</h4>
              <p className="text-gray-600">Business hours support</p>
            </div>
          </div>

          <div className="mt-10">
            <div className="bg-white rounded-2xl p-8 border border-green-200 shadow-md">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Important Notes:</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#0bc073] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Annual renewal is mandatory for online editions to maintain cloud services</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#0bc073] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Offline edition renewal is optional but recommended for updates and support</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#0bc073] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Additional customization beyond standard features will be charged extra</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#0bc073] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Storage limitations apply as per selected package</span>
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
