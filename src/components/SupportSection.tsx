
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail, Clock, Headphones, FileText } from 'lucide-react';

const SupportSection = () => {
  const supportOptions = [
    {
      icon: <MessageCircle className="h-8 w-8 text-green-600" />,
      title: "WhatsApp Support",
      description: "Instant help via WhatsApp Business",
      availability: "24/7 Available",
      action: "Chat Now"
    },
    {
      icon: <Phone className="h-8 w-8 text-blue-600" />,
      title: "Phone Support",
      description: "Direct call support for urgent issues",
      availability: "Mon-Sat, 9 AM - 8 PM",
      action: "Call Now"
    },
    {
      icon: <Mail className="h-8 w-8 text-purple-600" />,
      title: "Email Support",
      description: "Detailed support via email",
      availability: "Response within 4 hours",
      action: "Send Email"
    },
    {
      icon: <Headphones className="h-8 w-8 text-orange-600" />,
      title: "Live Chat",
      description: "Real-time chat with support team",
      availability: "Mon-Fri, 10 AM - 7 PM",
      action: "Start Chat"
    },
    {
      icon: <FileText className="h-8 w-8 text-red-600" />,
      title: "Support Tickets",
      description: "Track and manage support requests",
      availability: "Always Available",
      action: "Create Ticket"
    },
    {
      icon: <Clock className="h-8 w-8 text-teal-600" />,
      title: "Scheduled Consultation",
      description: "Book expert consultation sessions",
      availability: "By Appointment",
      action: "Book Session"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Premium Support - We're Here to Help
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get expert assistance when you need it. Our dedicated support team ensures your business operations run smoothly with multiple support channels and quick response times.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {option.icon}
                </div>
                <CardTitle className="text-xl">{option.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="text-sm text-blue-600 font-medium mb-4">
                  {option.availability}
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-50 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Enterprise Support Features
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Dedicated account manager for Enterprise clients</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Priority support with faster response times</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">On-site training and setup assistance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Custom integration and API support</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Need Immediate Help?</h4>
              <div className="space-y-3">
                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp: +91 98765 43210
                </Button>
                <Button size="lg" variant="outline" className="w-full">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: +91 80 1234 5678
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
