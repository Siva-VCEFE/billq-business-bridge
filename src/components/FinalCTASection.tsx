
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Phone, CheckCircle, Users, Star } from 'lucide-react';

const FinalCTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    businessType: '',
    preferredUsage: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Start Your Digital Business Transformation Today
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Join 10,000+ Indian businesses using BillQ for GST billing, inventory management, and business growth
          </p>
          
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="text-sm">10,000+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-sm">4.8/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-sm">99.9% Uptime</span>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-6">Ready to Streamline Your Business?</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Free installation and setup support</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>7-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>No monthly fees - one-time payment</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Works offline - no internet dependency</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                View All Pricing Plans
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                <Phone className="mr-2 h-5 w-5" />
                Call: +91-9876543210
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-2 text-center">
              Get Free Demo & Consultation
            </h3>
            <p className="text-center mb-6 opacity-90">
              Fill this form and our team will contact you within 2 hours
            </p>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Thank You!</h4>
                <p className="opacity-90">Our team will contact you within 2 hours</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Your Full Name *" 
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    required
                  />
                  <Input 
                    placeholder="Mobile Number *" 
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    required
                  />
                </div>
                <Select onValueChange={(value) => handleInputChange('businessType', value)}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="Select Your Business Type *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="retail">Retail Shop / Store</SelectItem>
                    <SelectItem value="distributor">Distributor / Wholesaler</SelectItem>
                    <SelectItem value="manufacturer">Manufacturer</SelectItem>
                    <SelectItem value="service">Service Provider</SelectItem>
                    <SelectItem value="restaurant">Restaurant / Cafe</SelectItem>
                    <SelectItem value="medical">Medical / Clinic</SelectItem>
                    <SelectItem value="other">Other Business</SelectItem>
                  </SelectContent>
                </Select>
                <Select onValueChange={(value) => handleInputChange('preferredUsage', value)}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="Preferred Software Mode *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="online">Online Edition (Cloud-based)</SelectItem>
                    <SelectItem value="offline">Offline Edition (Desktop)</SelectItem>
                    <SelectItem value="both">Both Online & Offline</SelectItem>
                  </SelectContent>
                </Select>
                <Button 
                  type="submit"
                  className="w-full bg-white text-blue-600 hover:bg-gray-100 py-3 font-semibold transition-all duration-200 hover:scale-105"
                  disabled={!formData.name || !formData.mobile || !formData.businessType || !formData.preferredUsage}
                >
                  Get Free Demo & Pricing
                </Button>
                <p className="text-xs text-center opacity-75">
                  By submitting, you agree to receive business communication from BillQ team
                </p>
              </form>
            )}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">10,000+</div>
              <div className="text-sm opacity-90">Happy Customers</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">50M+</div>
              <div className="text-sm opacity-90">Invoices Generated</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">28</div>
              <div className="text-sm opacity-90">States Covered</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-sm opacity-90">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
