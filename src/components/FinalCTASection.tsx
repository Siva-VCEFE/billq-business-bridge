
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Phone } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Streamline Your Business with BillQ
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Join thousands of businesses already using BillQ to grow faster and work smarter
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                View Pricing & Editions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                <Phone className="mr-2 h-5 w-5" />
                Request Demo
              </Button>
            </div>
            <div className="text-center">
              <div className="text-sm opacity-75 mb-4">
                ✓ 7-day free trial • ✓ No setup fees • ✓ Cancel anytime
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Get Started Today
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="Your Name" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Input 
                  placeholder="Mobile Number" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
              </div>
              <Select>
                <SelectTrigger className="bg-white/20 border-white/30 text-white">
                  <SelectValue placeholder="Business Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="retail">Retail Shop</SelectItem>
                  <SelectItem value="distributor">Distributor</SelectItem>
                  <SelectItem value="manufacturer">Manufacturer</SelectItem>
                  <SelectItem value="service">Service Provider</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="bg-white/20 border-white/30 text-white">
                  <SelectValue placeholder="Preferred Usage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="online">Online</SelectItem>
                  <SelectItem value="offline">Offline</SelectItem>
                  <SelectItem value="both">Both Online & Offline</SelectItem>
                </SelectContent>
              </Select>
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 py-3 font-semibold transition-all duration-200 hover:scale-105">
                Get Free Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
