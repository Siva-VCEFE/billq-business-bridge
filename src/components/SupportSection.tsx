
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail, Clock } from 'lucide-react';

const SupportSection = () => {
  const supportOptions = [
    {
      icon: <MessageCircle className="h-8 w-8 text-green-600" />,
      title: "WhatsApp Support",
      description: "Instant help via WhatsApp Business with dedicated support team",
      availability: "24/7 Available",
      action: "Chat on WhatsApp",
      contact: "+91 98765 43210"
    },
    {
      icon: <Phone className="h-8 w-8 text-blue-600" />,
      title: "Phone Support",
      description: "Direct call support for urgent technical issues and consultations",
      availability: "Mon-Sat, 9 AM - 8 PM",
      action: "Call Now",
      contact: "+91 80 1234 5678"
    },
    {
      icon: <Mail className="h-8 w-8 text-purple-600" />,
      title: "Email Support",
      description: "Detailed technical support and documentation via email",
      availability: "Response within 4 hours",
      action: "Send Email",
      contact: "support@billq.in"
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: "Scheduled Consultation",
      description: "One-on-one expert consultation for setup and optimization",
      availability: "By Appointment",
      action: "Book Session",
      contact: "Book 30-min session"
    }
  ];

  return (
    <section id="support" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Premium Support - We're Here When You Need Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get expert assistance from our dedicated support team. Multiple communication channels ensure you get help exactly when and how you need it, keeping your business running smoothly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-blue-500">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gray-50 rounded-2xl">
                    {option.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{option.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="text-sm text-blue-600 font-medium mb-4 bg-blue-50 py-2 px-3 rounded-lg">
                  {option.availability}
                </div>
                <div className="text-sm text-gray-700 mb-4 font-medium">
                  {option.contact}
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Enterprise Support Features
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <span className="text-gray-800 font-medium">Dedicated Account Manager</span>
                    <p className="text-gray-600 text-sm">Personal support representative for Enterprise clients</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <span className="text-gray-800 font-medium">Priority Response Times</span>
                    <p className="text-gray-600 text-sm">Faster resolution for critical business issues</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <span className="text-gray-800 font-medium">On-site Training & Setup</span>
                    <p className="text-gray-600 text-sm">Complete implementation assistance at your location</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <span className="text-gray-800 font-medium">Custom Integration Support</span>
                    <p className="text-gray-600 text-sm">API integration and custom development assistance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Need Immediate Help?</h4>
              <div className="space-y-4">
                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-lg py-4">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  WhatsApp: +91 98765 43210
                </Button>
                <Button size="lg" variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg py-4">
                  <Phone className="mr-3 h-6 w-6" />
                  Call: +91 80 1234 5678
                </Button>
                <p className="text-sm text-gray-600 mt-4">
                  Average response time: Under 15 minutes during business hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
