
import React from 'react';
import { AlertTriangle, Clock, FileX, TrendingDown } from 'lucide-react';

const PainPointsSection = () => {
  const painPoints = [
    {
      icon: <FileX className="h-8 w-8 text-red-500" />,
      title: "Manual entries and miscalculations",
      description: "Spending hours on Excel sheets and making costly errors"
    },
    {
      icon: <Clock className="h-8 w-8 text-red-500" />,
      title: "Delayed invoices",
      description: "Losing money due to slow billing processes"
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      title: "No inventory visibility",
      description: "Running out of stock without warning"
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-red-500" />,
      title: "Difficult field team tracking",
      description: "No visibility into field operations and sales"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Still managing orders and invoices on Excel or paper?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These common business challenges are costing you time, money, and peace of mind
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {point.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
