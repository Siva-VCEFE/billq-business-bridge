import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Globe, Zap, Target, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    {
      number: "50+",
      label: "Happy Customers",
      icon: <Users className="h-8 w-8 text-[#0bc073]" />
    },
    {
      number: "5+",
      label: "Years of Excellence",
      icon: <Award className="h-8 w-8 text-[#0bc073]" />
    },
    {
      number: "10+",
      label: "Industries Served",
      icon: <Target className="h-8 w-8 text-[#0bc073]" />
    },
    {
      number: "99%",
      label: "Customer Satisfaction",
      icon: <TrendingUp className="h-8 w-8 text-[#0bc073]" />
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            About BillQ - Your Business Growth Partner
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            We are a team of technology experts and business consultants dedicated to empowering Indian businesses with premium management solutions. Our platform combines cutting-edge technology with deep understanding of local business needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="flex justify-center mb-3 sm:mb-4">
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="px-4 sm:px-0">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              To transform how Indian businesses operate by providing enterprise-grade management solutions that are accessible, affordable, and designed for local market needs. We believe every business deserves professional tools to achieve their growth potential.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 mr-3 sm:mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Innovation-Driven</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Constantly evolving with latest technology and business practices</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 mr-3 sm:mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Customer-Centric</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Every feature designed based on real business needs and feedback</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 mr-3 sm:mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Local Expertise</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Deep understanding of Indian business environment and compliance</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 sm:p-8 text-white mx-4 sm:mx-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Why Choose BillQ?</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-blue-200 flex-shrink-0" />
                <span className="text-sm sm:text-base">Premium quality at affordable pricing</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-blue-200 flex-shrink-0" />
                <span className="text-sm sm:text-base">Proven track record with 50+ businesses</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-blue-200 flex-shrink-0" />
                <span className="text-sm sm:text-base">Complete India coverage with local support</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-blue-200 flex-shrink-0" />
                <span className="text-sm sm:text-base">Dedicated customer success team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
