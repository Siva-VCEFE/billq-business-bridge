
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
  Check,
  MousePointer,
  Store,
  QrCode,
  DollarSign,
  Truck,
  Eye,
  Printer,
  Shield,
  Clock,
  Infinity
} from 'lucide-react';

const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      id: 1,
      icon: <Zap className="h-12 w-12 text-[#0bc073]" />,
      title: "Smart & Instant Billing",
      shortDesc: "Lightning-fast invoice generation with intelligent automation",
      description: "Transform your billing process with our smart automation engine. Generate professional, GST-compliant invoices instantly with pre-filled customer data, automatic tax calculations, and customizable templates. Perfect for businesses that need speed without compromising accuracy.",
      benefits: ["Instant invoice generation", "Auto tax calculations", "Custom invoice templates", "GST compliance", "Digital signature support"],
      highlight: "Create invoices 10x faster with smart automation"
    },
    {
      id: 2,
      icon: <Kanban className="h-12 w-12 text-[#0bc073]" />,
      title: "Order Management with Kanban View",
      shortDesc: "Visual workflow management for seamless order tracking",
      description: "Manage your entire order lifecycle with our intuitive Kanban board. Drag and drop orders through different stages - from inquiry to delivery. Perfect for businesses handling multiple orders simultaneously with visual clarity.",
      benefits: ["Visual order tracking", "Drag-and-drop workflow", "Custom order stages", "Team collaboration", "Real-time updates"],
      highlight: "Manage 100+ orders effortlessly with visual workflow"
    },
    {
      id: 3,
      icon: <MousePointer className="h-12 w-12 text-[#0bc073]" />,
      title: "Lead to Invoice in One Click",
      shortDesc: "Convert prospects into paying customers instantly",
      description: "Revolutionary one-click conversion that transforms leads directly into professional invoices. No manual data entry, no duplicate work - just smart conversion that saves hours of administrative work every day.",
      benefits: ["One-click conversion", "Auto-populated data", "Lead tracking", "Conversion analytics", "Follow-up reminders"],
      highlight: "Convert leads to revenue in under 30 seconds"
    },
    {
      id: 4,
      icon: <Globe className="h-12 w-12 text-[#0bc073]" />,
      title: "Multi-Channel Sales Handling",
      shortDesc: "Unified platform for all your sales channels",
      description: "Centralize sales from multiple channels - online marketplaces, direct sales, phone orders, WhatsApp, and walk-in customers. One dashboard to rule them all, with automatic synchronization and unified reporting.",
      benefits: ["Multi-platform integration", "Unified dashboard", "Channel-wise analytics", "Automated sync", "Cross-channel insights"],
      highlight: "Manage 5+ sales channels from one powerful dashboard"
    },
    {
      id: 5,
      icon: <Package className="h-12 w-12 text-[#0bc073]" />,
      title: "Wholesale-Specific Invoicing Module",
      shortDesc: "Specialized billing for wholesale and B2B transactions",
      description: "Purpose-built for wholesale businesses with bulk pricing, tiered discounts, credit terms, and B2B-specific features. Handle large orders, manage dealer networks, and maintain complex pricing structures effortlessly.",
      benefits: ["Bulk pricing management", "Tiered discount system", "Credit terms handling", "Dealer network support", "B2B invoice formats"],
      highlight: "Streamline wholesale operations with specialized tools"
    },
    {
      id: 6,
      icon: <Store className="h-12 w-12 text-[#0bc073]" />,
      title: "Smart POS for Retail Businesses",
      shortDesc: "Complete point-of-sale solution for modern retail",
      description: "Full-featured POS system designed for retail environments. Quick product search, multiple payment modes, customer management, and real-time inventory updates. Perfect for shops, boutiques, and retail outlets.",
      benefits: ["Quick product search", "Multiple payment modes", "Customer database", "Real-time inventory", "Receipt printing"],
      highlight: "Process retail sales in under 15 seconds per transaction"
    },
    {
      id: 7,
      icon: <QrCode className="h-12 w-12 text-[#0bc073]" />,
      title: "Barcode Sticker Printing",
      shortDesc: "Professional barcode generation and printing system",
      description: "Generate and print professional barcode stickers for your products. Support for multiple barcode formats, customizable label designs, and integration with popular barcode scanners for seamless inventory management.",
      benefits: ["Multiple barcode formats", "Custom label designs", "Batch printing", "Scanner integration", "Inventory linking"],
      highlight: "Automate inventory tracking with professional barcodes"
    },
    {
      id: 8,
      icon: <DollarSign className="h-12 w-12 text-[#0bc073]" />,
      title: "Customer Balance & Outstanding Tracker",
      shortDesc: "Complete customer financial relationship management",
      description: "Track customer balances, outstanding payments, and credit limits with automated reminders. Maintain healthy cash flow with smart payment tracking and automated follow-ups for overdue accounts.",
      benefits: ["Balance tracking", "Outstanding management", "Automated reminders", "Credit limit monitoring", "Payment history"],
      highlight: "Reduce bad debt by 80% with smart payment tracking"
    },
    {
      id: 9,
      icon: <Truck className="h-12 w-12 text-[#0bc073]" />,
      title: "Vendor & Supplier Payment Management",
      shortDesc: "Streamlined vendor relationship and payment handling",
      description: "Manage your entire vendor ecosystem with purchase orders, payment tracking, and supplier performance analytics. Maintain healthy supplier relationships with timely payments and clear communication.",
      benefits: ["Purchase order management", "Payment scheduling", "Supplier analytics", "Performance tracking", "Communication tools"],
      highlight: "Optimize supplier relationships and reduce procurement costs"
    },
    {
      id: 10,
      icon: <Calculator className="h-12 w-12 text-[#0bc073]" />,
      title: "Expense & Payment Tracking",
      shortDesc: "Complete financial control with expense management",
      description: "Track every rupee with comprehensive expense management. Categorize expenses, track payments, generate expense reports, and maintain complete financial visibility for better business decisions.",
      benefits: ["Expense categorization", "Payment tracking", "Financial reports", "Budget monitoring", "Tax preparation"],
      highlight: "Gain complete financial visibility and control"
    },
    {
      id: 11,
      icon: <Eye className="h-12 w-12 text-[#0bc073]" />,
      title: "Inventory Monitoring in Real-Time",
      shortDesc: "Live inventory tracking with intelligent alerts",
      description: "Never run out of stock or overstock again. Real-time inventory monitoring with automatic alerts, demand forecasting, and smart reorder points. Perfect for maintaining optimal inventory levels.",
      benefits: ["Real-time tracking", "Stock alerts", "Demand forecasting", "Reorder automation", "Multi-location support"],
      highlight: "Reduce inventory costs by 25% with smart monitoring"
    },
    {
      id: 12,
      icon: <Printer className="h-12 w-12 text-[#0bc073]" />,
      title: "Multi-Printer Compatibility",
      shortDesc: "Universal printing support for all business needs",
      description: "Support for thermal printers, laser printers, and dot matrix printers. Print invoices, receipts, labels, and reports on any printer with customizable formats and automatic printer selection.",
      benefits: ["Thermal printer support", "Laser printer compatibility", "Custom print formats", "Multiple paper sizes", "Automatic printer selection"],
      highlight: "Print on any printer with perfect formatting every time"
    },
    {
      id: 13,
      icon: <Shield className="h-12 w-12 text-[#0bc073]" />,
      title: "Role-Based User Access & Permissions",
      shortDesc: "Enterprise-grade security with granular access control",
      description: "Secure your business data with role-based access control. Define user roles, set permissions, and ensure sensitive information is only accessible to authorized personnel. Perfect for growing teams.",
      benefits: ["Role-based access", "Granular permissions", "User activity logs", "Data security", "Team management"],
      highlight: "Enterprise-level security for businesses of all sizes"
    },
    {
      id: 14,
      icon: <BarChart3 className="h-12 w-12 text-[#0bc073]" />,
      title: "Comprehensive Reports & Business Insights",
      shortDesc: "Advanced analytics for data-driven business growth",
      description: "Make informed decisions with powerful business intelligence. Generate detailed reports on sales, inventory, customer behavior, and financial performance. Transform data into actionable insights.",
      benefits: ["Sales analytics", "Financial reports", "Customer insights", "Inventory analysis", "Custom dashboards"],
      highlight: "Increase profitability by 35% with data-driven decisions"
    },
    {
      id: 15,
      icon: <Users className="h-12 w-12 text-[#0bc073]" />,
      title: "Automated Payroll & Payslip Management",
      shortDesc: "Complete HR solution with automated payroll processing",
      description: "Streamline your HR operations with automated payroll calculation, payslip generation, and employee management. Handle attendance, overtime, deductions, and compliance requirements effortlessly.",
      benefits: ["Automated payroll", "Digital payslips", "Attendance tracking", "Tax calculations", "Compliance management"],
      highlight: "Save 20+ hours monthly on payroll processing"
    },
    {
      id: 16,
      icon: <Wifi className="h-12 w-12 text-[#0bc073]" />,
      title: "Use Online or Offline – Your Choice",
      shortDesc: "Flexibility to work anywhere, anytime",
      description: "Complete freedom to work online or offline based on your needs. Seamless synchronization when online, full functionality when offline. Never let connectivity issues stop your business operations.",
      benefits: ["Offline functionality", "Online synchronization", "Cloud backup", "Data security", "Flexible working"],
      highlight: "100% business continuity regardless of internet connectivity"
    },
    {
      id: 17,
      icon: <Infinity className="h-12 w-12 text-[#0bc073]" />,
      title: "Unlimited Everything – No Restrictions",
      shortDesc: "Scale without limits or hidden charges",
      description: "Truly unlimited usage with no restrictions on users, invoices, customers, or data storage. Scale your business without worrying about hitting limits or paying extra charges. Growth-friendly pricing.",
      benefits: ["Unlimited users", "Unlimited invoices", "Unlimited customers", "Unlimited storage", "No hidden charges"],
      highlight: "Scale infinitely without any usage restrictions or extra costs"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features That Drive <span className="text-[#0bc073]">Business Growth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover enterprise-grade features designed to streamline operations, boost productivity, and accelerate your business growth. Each feature is crafted to solve real business challenges with unlimited scalability.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Feature Steps */}
          <div className="lg:col-span-5">
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4">
              {features.map((feature, index) => (
                <Card 
                  key={feature.id} 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedFeature === index 
                      ? 'ring-2 ring-[#0bc073] shadow-lg bg-green-50 border-green-200' 
                      : 'hover:border-green-200'
                  }`}
                  onClick={() => setSelectedFeature(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 p-3 rounded-xl ${
                        selectedFeature === index ? 'bg-green-100' : 'bg-gray-100'
                      }`}>
                        <div className="flex items-center justify-center w-8 h-8">
                          <span className={`text-lg font-bold ${
                            selectedFeature === index ? 'text-[#0bc073]' : 'text-gray-500'
                          }`}>
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold mb-2 ${
                          selectedFeature === index ? 'text-green-900' : 'text-gray-900'
                        }`}>
                          {feature.title}
                        </h3>
                        <p className={`text-sm ${
                          selectedFeature === index ? 'text-green-700' : 'text-gray-600'
                        }`}>
                          {feature.shortDesc}
                        </p>
                      </div>
                      <ChevronRight className={`h-5 w-5 ${
                        selectedFeature === index ? 'text-[#0bc073]' : 'text-gray-400'
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
                  <div className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl">
                    {features[selectedFeature].icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-900">
                      {features[selectedFeature].title}
                    </CardTitle>
                    <div className="bg-gradient-to-r from-[#0bc073] to-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium mt-2 inline-block">
                      {features[selectedFeature].highlight}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Feature Illustration */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-100">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#0bc073] to-emerald-600 rounded-3xl flex items-center justify-center mb-4">
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
                            <Check className="h-4 w-4 text-[#0bc073]" />
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="bg-[#0bc073] hover:bg-[#089a5f] flex-1">
                      Try This Feature
                    </Button>
                    <Button variant="outline" className="border-[#0bc073] text-[#0bc073] hover:bg-green-50">
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
