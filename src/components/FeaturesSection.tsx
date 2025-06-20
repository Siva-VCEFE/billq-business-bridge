
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Package, 
  Users, 
  CreditCard, 
  BarChart3, 
  Smartphone,
  UserCheck,
  Wifi,
  MapPin,
  Calculator,
  Globe,
  ChevronRight
} from 'lucide-react';

const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "GST Invoice Software",
      description: "Generate GST-compliant invoices for all states including CGST, SGST, IGST",
      details: "Complete GST billing solution with automatic tax calculations, HSN codes, and compliance for inter-state and intra-state transactions. Supports all Indian states including Karnataka, Tamil Nadu, Maharashtra, and more.",
      benefits: ["Multi-state GST compliance", "Automatic tax calculations", "HSN code management", "E-invoice ready"]
    },
    {
      icon: <Package className="h-8 w-8 text-green-600" />,
      title: "Inventory Management System",
      description: "Real-time stock tracking with low stock alerts and batch management",
      details: "Advanced inventory control with barcode scanning, batch tracking, expiry date management, and automatic reorder points. Perfect for retail shops and distributors.",
      benefits: ["Barcode scanning", "Batch tracking", "Expiry management", "Auto reorder alerts"]
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Customer & Supplier CRM",
      description: "Complete customer relationship management with payment tracking",
      details: "Manage customer data, track payment history, send payment reminders, and maintain detailed supplier records with purchase history and outstanding amounts.",
      benefits: ["Payment tracking", "Credit management", "Customer history", "Automated reminders"]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-indigo-600" />,
      title: "WhatsApp Business Integration",
      description: "Send invoices and payment reminders directly via WhatsApp",
      details: "Automated WhatsApp messaging for invoice sharing, payment reminders, order confirmations, and customer follow-ups. Boost your customer engagement effortlessly.",
      benefits: ["Invoice sharing", "Payment reminders", "Order updates", "Customer engagement"]
    },
    {
      icon: <MapPin className="h-8 w-8 text-red-600" />,
      title: "Field Sales Management",
      description: "Track field team performance and manage remote orders",
      details: "Complete field sales solution with GPS tracking, order collection, expense management, and real-time reporting for field executives and sales teams.",
      benefits: ["GPS tracking", "Remote order entry", "Expense tracking", "Performance reports"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-600" />,
      title: "Business Analytics & Reports",
      description: "Detailed profit analysis and business insights dashboard",
      details: "Comprehensive reporting including sales analysis, profit margins, tax reports, customer analysis, and inventory reports. Make data-driven business decisions.",
      benefits: ["Profit analysis", "Sales reports", "Tax summaries", "Customer insights"]
    },
    {
      icon: <Wifi className="h-8 w-8 text-gray-600" />,
      title: "Offline Billing Software",
      description: "Work without internet - sync when connected",
      details: "Complete offline functionality for billing, inventory, and customer management. Automatically syncs data when internet is available. Perfect for areas with poor connectivity.",
      benefits: ["No internet required", "Auto sync", "Reliable operation", "Remote area friendly"]
    },
    {
      icon: <Calculator className="h-8 w-8 text-teal-600" />,
      title: "Multi-State Tax Compliance",
      description: "Supports GST for all Indian states and union territories",
      details: "Comprehensive tax management for all Indian states including special provisions for Jammu & Kashmir, North-East states, and union territories with different tax structures.",
      benefits: ["All state compliance", "Union territory support", "Special state provisions", "Regular updates"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Complete Business Management Software Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All-in-one billing and inventory software designed for Indian businesses with GST compliance, offline access, and powerful automation features
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    selectedFeature === index ? 'ring-2 ring-blue-500 shadow-lg' : ''
                  }`}
                  onClick={() => setSelectedFeature(index)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      {feature.icon}
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">{feature.description}</p>
                    <div className="flex items-center text-blue-600 text-sm font-medium">
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <Card className="sticky top-8 h-fit">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  {features[selectedFeature].icon}
                  <CardTitle className="text-xl">{features[selectedFeature].title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">{features[selectedFeature].details}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {features[selectedFeature].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Started with This Feature
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
