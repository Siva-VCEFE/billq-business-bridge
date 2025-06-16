
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FileText, 
  Package, 
  Users, 
  CreditCard, 
  BarChart3, 
  Smartphone,
  UserCheck,
  Wifi,
  Settings
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Order & Lead Management",
      description: "Capture and track orders from leads to completion"
    },
    {
      icon: <FileText className="h-8 w-8 text-green-600" />,
      title: "GST-Ready Invoicing",
      description: "Generate compliant invoices with just one click"
    },
    {
      icon: <Package className="h-8 w-8 text-purple-600" />,
      title: "Inventory Tracking",
      description: "Real-time stock monitoring with low stock alerts"
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Customer & Supplier Accounts",
      description: "Manage all your business relationships in one place"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-red-600" />,
      title: "Expense & Payment Tracking",
      description: "Keep track of all financial transactions"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-600" />,
      title: "Reports & Profit Insights",
      description: "Get detailed analytics and business insights"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      title: "WhatsApp Updates",
      description: "Send automatic updates to customers via WhatsApp"
    },
    {
      icon: <UserCheck className="h-8 w-8 text-blue-600" />,
      title: "Multi-user with Roles",
      description: "Team access with customizable permissions"
    },
    {
      icon: <Wifi className="h-8 w-8 text-gray-600" />,
      title: "Online/Offline Mode",
      description: "Work seamlessly with or without internet"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything Your Business Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to streamline your operations and boost productivity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  {feature.icon}
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
