
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
  Zap,
  Check
} from 'lucide-react';

const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      id: 1,
      icon: <Kanban className="h-12 w-12 text-blue-600" />,
      title: "Multi-Channel Order Management",
      shortDesc: "Unified order processing with visual Kanban workflow",
      description: "Transform your order management with our advanced Kanban board system. Handle orders from multiple channels - online marketplaces, direct sales, phone orders, and WhatsApp - all in one unified dashboard. Visual workflow management makes it easy to track order status from lead to delivery.",
      benefits: ["Visual Kanban board workflow", "Multi-platform integration", "Real-time order tracking", "Automated status updates", "Custom workflow stages"],
      highlight: "Convert leads to orders with drag-and-drop simplicity"
    },
    {
      id: 2,
      icon: <Zap className="h-12 w-12 text-green-600" />,
      title: "One-Click Invoice Generation",
      shortDesc: "Transform leads and orders into professional invoices instantly",
      description: "Revolutionary one-click conversion system that transforms your leads and orders into professional, GST-compliant invoices instantly. No more manual data entry or time-consuming invoice creation. Just click and convert - it's that simple.",
      benefits: ["Single-click conversion", "Auto-populated customer data", "GST compliance built-in", "Professional templates", "Instant delivery options"],
      highlight: "Save 90% time on invoice creation with smart automation"
    },
    {
      id: 3,
      icon: <Users className="h-12 w-12 text-purple-600" />,
      title: "Intelligent CRM System",
      shortDesc: "Advanced customer relationship management with AI insights",
      description: "Enterprise-grade CRM that understands your customers better than you do. Track customer journey, predict buying behavior, automate follow-ups, and turn prospects into loyal customers with intelligent insights and automated engagement.",
      benefits: ["360° customer view", "Predictive analytics", "Automated follow-ups", "Behavior tracking", "Sales pipeline management"],
      highlight: "Increase customer retention by 40% with intelligent automation"
    },
    {
      id: 4,
      icon: <Package className="h-12 w-12 text-orange-600" />,
      title: "Smart Inventory Control",
      shortDesc: "AI-powered inventory management with predictive analytics",
      description: "Never run out of stock or overstock again. Our AI-powered inventory system predicts demand, automates reordering, tracks multiple locations, and optimizes your inventory investment for maximum profitability.",
      benefits: ["AI demand forecasting", "Auto-reorder alerts", "Multi-location tracking", "Stock optimization", "Real-time updates"],
      highlight: "Reduce inventory costs by 25% with smart predictions"
    },
    {
      id: 5,
      icon: <Smartphone className="h-12 w-12 text-red-600" />,
      title: "Omnichannel Communication",
      shortDesc: "WhatsApp Business integration with automated messaging",
      description: "Connect with customers where they are. Integrated WhatsApp Business, SMS, and email automation ensures you never miss a customer interaction. Automated notifications, order updates, and personalized marketing campaigns.",
      benefits: ["WhatsApp Business API", "Automated notifications", "Multi-channel messaging", "Customer engagement tracking", "Personalized campaigns"],
      highlight: "Boost customer engagement by 60% with omnichannel approach"
    },
    {
      id: 6,
      icon: <BarChart3 className="h-12 w-12 text-violet-600" />,
      title: "Business Intelligence Suite",
      shortDesc: "Advanced analytics for data-driven growth decisions",
      description: "Make informed decisions with powerful business intelligence. Custom dashboards, predictive analytics, profit optimization insights, and executive reporting help you understand your business like never before.",
      benefits: ["Custom dashboards", "Predictive analytics", "Profit optimization", "Executive reports", "Real-time insights"],
      highlight: "Increase profitability by 35% with data-driven decisions"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features That Drive <span className="text-blue-600">Business Growth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover enterprise-grade features designed to streamline operations, boost productivity, and accelerate your business growth. Each feature is crafted to solve real business challenges.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Feature Steps */}
          <div className="lg:col-span-5">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <Card 
                  key={feature.id} 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedFeature === index 
                      ? 'ring-2 ring-blue-500 shadow-lg bg-blue-50 border-blue-200' 
                      : 'hover:border-blue-200'
                  }`}
                  onClick={() => setSelectedFeature(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 p-3 rounded-xl ${
                        selectedFeature === index ? 'bg-blue-100' : 'bg-gray-100'
                      }`}>
                        <div className="flex items-center justify-center w-8 h-8">
                          <span className={`text-lg font-bold ${
                            selectedFeature === index ? 'text-blue-600' : 'text-gray-500'
                          }`}>
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold mb-2 ${
                          selectedFeature === index ? 'text-blue-900' : 'text-gray-900'
                        }`}>
                          {feature.title}
                        </h3>
                        <p className={`text-sm ${
                          selectedFeature === index ? 'text-blue-700' : 'text-gray-600'
                        }`}>
                          {feature.shortDesc}
                        </p>
                      </div>
                      <ChevronRight className={`h-5 w-5 ${
                        selectedFeature === index ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Feature Detail */}
          <div className="lg:col-span-7">
            <Card className="h-full">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl">
                    {features[selectedFeature].icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-900">
                      {features[selectedFeature].title}
                    </CardTitle>
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium mt-2 inline-block">
                      {features[selectedFeature].highlight}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Feature Illustration */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-100">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mb-4">
                      <div className="text-white text-4xl">
                        {React.cloneElement(features[selectedFeature].icon, { className: "h-16 w-16 text-white" })}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Feature Visualization
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Interactive demo available in premium version
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {features[selectedFeature].description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">Key Benefits:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {features[selectedFeature].benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                            <Check className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="bg-blue-600 hover:bg-blue-700 flex-1">
                      Try This Feature
                    </Button>
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
