
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ShoppingBag, 
  Truck, 
  Users, 
  Settings, 
  User, 
  Coffee 
} from 'lucide-react';

const TargetAudienceSection = () => {
  const audiences = [
    {
      icon: <ShoppingBag className="h-12 w-12 text-blue-600" />,
      title: "Retail Shops",
      description: "Manage inventory, sales, and customer relationships"
    },
    {
      icon: <Truck className="h-12 w-12 text-green-600" />,
      title: "Distributors",
      description: "Track orders, deliveries, and supplier relationships"
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600" />,
      title: "Field Sales Teams",
      description: "Capture orders on-the-go with offline capability"
    },
    {
      icon: <Settings className="h-12 w-12 text-orange-600" />,
      title: "Small Manufacturers",
      description: "Manage production, inventory, and order fulfillment"
    },
    {
      icon: <User className="h-12 w-12 text-indigo-600" />,
      title: "Freelancers & Service Providers",
      description: "Professional invoicing and client management"
    },
    {
      icon: <Coffee className="h-12 w-12 text-red-600" />,
      title: "Cafes, Clinics & Agencies",
      description: "Streamline operations and customer service"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Who Can Use BillQ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed for businesses of all types and sizes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {audience.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {audience.title}
                </h3>
                <p className="text-gray-600">
                  {audience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
