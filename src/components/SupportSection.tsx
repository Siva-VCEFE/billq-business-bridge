
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle, Clock, Users, Award, Globe } from 'lucide-react';
import FeedbackSection from './support/FeedbackSection';

const SupportSection = () => {
  const supportOptions = [
    {
      icon: <Phone className="h-8 w-8 text-[#0bc073]" />,
      title: "Call Support",
      description: "Speak directly with our support team",
      contact: "+91 82204 90340",
      action: () => window.open('tel:+918220490340'),
      availability: "Mon-Sat: 9 AM - 7 PM"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-[#0bc073]" />,
      title: "WhatsApp Support",
      description: "Quick help via WhatsApp messaging",
      contact: "+91 82207 60340",
      action: () => window.open('https://wa.me/918220760340?text=Hi, I need help with BillQ'),
      availability: "Mon-Sat: 9 AM - 7 PM"
    },
    {
      icon: <Mail className="h-8 w-8 text-[#0bc073]" />,
      title: "Email Support",
      description: "Detailed technical assistance via email",
      contact: "support@billq.co.in",
      action: () => window.open('mailto:support@billq.co.in?subject=BillQ Support Request'),
      availability: "Response within 24 hours"
    }
  ];

  const stats = [
    {
      icon: <Clock className="h-8 w-8 text-[#0bc073]" />,
      value: "< 2 Hours",
      label: "Average Response Time"
    },
    {
      icon: <Users className="h-8 w-8 text-[#0bc073]" />,
      value: "500+",
      label: "Happy Customers Served"
    },
    {
      icon: <Award className="h-8 w-8 text-[#0bc073]" />,
      value: "98%",
      label: "Customer Satisfaction"
    },
    {
      icon: <Globe className="h-8 w-8 text-[#0bc073]" />,
      value: "Pan India",
      label: "Service Coverage"
    }
  ];

  return (
    <section id="support" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Support When You Need It
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated support team is here to help you succeed. Get assistance through your preferred channel with fast, reliable, and expert guidance during business hours.
          </p>
        </div>

        {/* Support Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-green-200">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {option.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {option.title}
                </CardTitle>
                <p className="text-gray-600">{option.description}</p>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="font-semibold text-gray-900">{option.contact}</div>
                  <div className="text-sm text-gray-600 mt-1">{option.availability}</div>
                </div>
                <Button 
                  onClick={option.action}
                  className="w-full bg-[#0bc073] hover:bg-[#089a5f]"
                >
                  Contact Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feedback Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">We Value Your Feedback</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Help us improve BillQ by sharing your experience. Your feedback drives our continuous improvement.
            </p>
          </div>
          <FeedbackSection />
        </div>

        {/* Additional Support Info */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Immediate Help?</h3>
            <p className="text-gray-600 mb-6">
              Our support team is standing by to help you with setup, training, troubleshooting, and any questions about BillQ during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open('https://wa.me/918220760340?text=Hi, I need help with BillQ')}
                className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Now
              </Button>
              <Button 
                onClick={() => window.open('tel:+918220490340')}
                variant="outline"
                className="border-[#0bc073] text-[#0bc073] hover:bg-green-50 flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Call Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
