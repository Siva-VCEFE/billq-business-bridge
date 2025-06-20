
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
  ChevronRight,
  Kanban,
  ShoppingCart,
  Zap
} from 'lucide-react';

const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      icon: <Kanban className="h-8 w-8 text-blue-600" />,
      title: "Multi-Channel Order Management",
      description: "Unified order processing with Kanban board visualization across all channels",
      details: "Advanced order management system with Kanban board view for visual workflow management. Handle orders from multiple channels including online stores, marketplaces, and direct sales in one unified dashboard.",
      benefits: ["Kanban board workflow", "Multi-channel integration", "Order status tracking", "Automated notifications"]
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: "Lead to Invoice Conversion",
      description: "Convert leads and orders to professional invoices with a single click",
      details: "Streamline your sales process with intelligent lead management. Convert prospects to customers and generate invoices instantly with pre-filled customer data and order details.",
      benefits: ["One-click conversion", "Lead tracking", "Auto-populated invoices", "Sales pipeline management"]
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Advanced CRM System",
      description: "Complete customer relationship management with intelligent insights",
      details: "Enterprise-grade CRM with customer journey tracking, interaction history, payment behavior analysis, and automated follow-up sequences for maximum customer retention.",
      benefits: ["Customer journey mapping", "Interaction history", "Automated follow-ups", "Behavior analytics"]
    },
    {
      icon: <FileText className="h-8 w-8 text-indigo-600" />,
      title: "Smart Document Generation",
      description: "Professional invoices, quotations, and reports with GST compliance",
      details: "Generate professional business documents with intelligent templates, automatic tax calculations, and compliance management for seamless business operations.",
      benefits: ["Professional templates", "GST compliance", "Automated calculations", "Brand customization"]
    },
    {
      icon: <Package className="h-8 w-8 text-orange-600" />,
      title: "Intelligent Inventory Control",
      description: "Real-time inventory tracking with predictive analytics and automation",
      details: "Advanced inventory management with AI-powered demand forecasting, automatic reorder points, and multi-location tracking for optimized stock management.",
      benefits: ["Predictive analytics", "Multi-location tracking", "Auto reorder alerts", "Demand forecasting"]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-red-600" />,
      title: "Omnichannel Communication",
      description: "WhatsApp Business, SMS, and email automation for customer engagement",
      details: "Integrated communication platform with automated messaging, customer notifications, and multi-channel support for enhanced customer experience.",
      benefits: ["WhatsApp automation", "Multi-channel messaging", "Customer notifications", "Engagement tracking"]
    },
    {
      icon: <MapPin className="h-8 w-8 text-teal-600" />,
      title: "Field Team Excellence",
      description: "Complete field sales management with GPS tracking and performance analytics",
      details: "Comprehensive field team management with real-time tracking, territory management, visit scheduling, and performance analytics for maximum field productivity.",
      benefits: ["GPS tracking", "Territory management", "Visit scheduling", "Performance metrics"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-violet-600" />,
      title: "Business Intelligence Suite",
      description: "Advanced analytics and reporting for data-driven decision making",
      details: "Comprehensive business intelligence with custom dashboards, predictive analytics, profit optimization insights, and executive reporting for strategic decision making.",
      benefits: ["Custom dashboards", "Predictive analytics", "Profit optimization", "Executive reports"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Premium Business Management Platform Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade solution designed for ambitious businesses. Advanced order management, CRM automation, and intelligent workflows that scale with your growth.
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
                  Explore This Feature
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
