
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
    
    // Create mailto link with form data
    const subject = encodeURIComponent('Demo Request - BillQ Smart Order Management');
    const body = encodeURIComponent(`
Demo Request Details:

Name: ${formData.name}
Mobile: ${formData.mobile}
Business Type: ${formData.businessType}
Preferred Usage: ${formData.preferredUsage}

Please contact me for a demo of BillQ Smart Order Management System.
    `);
    
    const mailtoLink = `mailto:support@billq.co.in?subject=${subject}&body=${body}`;
    window.open(mailtoLink);
    
    // Also open WhatsApp with the same details
    const whatsappMessage = encodeURIComponent(`Hi, I'm interested in BillQ demo.
Name: ${formData.name}
Mobile: ${formData.mobile}
Business: ${formData.businessType}
Preferred: ${formData.preferredUsage}`);
    
    setTimeout(() => {
      window.open(`https://wa.me/918220760340?text=${whatsappMessage}`, '_blank');
    }, 1000);
    
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#0bc073] to-emerald-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Start Your Digital Business Transformation Today
          </h2>
          <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto mb-6 sm:mb-8">
            Join 50+ Indian businesses using BillQ for smart order management, multi-channel processing, and business growth
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">50+ Growing Businesses</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
              <span className="text-sm sm:text-base">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-300" />
              <span className="text-sm sm:text-base">99.9% Uptime</span>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Ready to Streamline Your Business?</h3>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-300 flex-shrink-0" />
                <span className="text-sm sm:text-base">Free consultation and setup support</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-300 flex-shrink-0" />
                <span className="text-sm sm:text-base">Customizable to your workflow</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-300 flex-shrink-0" />
                <span className="text-sm sm:text-base">Multi-channel order management</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-300 flex-shrink-0" />
                <span className="text-sm sm:text-base">One-click lead to invoice conversion</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-white text-[#0bc073] hover:bg-gray-100 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 text-sm sm:text-base"
              >
                View All Pricing Plans
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-[#0bc073] px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 bg-transparent text-sm sm:text-base"
                onClick={() => window.open('tel:+918220490340')}
              >
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Call: +91 82204 90340
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center">
              Get Free Demo & Consultation
            </h3>
            <p className="text-center mb-6 opacity-90 text-sm sm:text-base">
              Fill this form and our team will contact you within 2 hours
            </p>
            
            {isSubmitted ? (
              <div className="text-center py-8 sm:py-12">
                <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-300 mx-auto mb-4" />
                <h4 className="text-lg sm:text-xl font-bold mb-2">Thank You!</h4>
                <p className="opacity-90 mb-4 text-sm sm:text-base">Your demo request has been sent successfully.</p>
                <p className="text-xs sm:text-sm opacity-75">Our team will contact you within 2 hours via email and WhatsApp</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Your Full Name *" 
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 text-sm sm:text-base h-10 sm:h-12"
                    required
                  />
                  <Input 
                    placeholder="Mobile Number *" 
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 text-sm sm:text-base h-10 sm:h-12"
                    required
                  />
                </div>
                <Select onValueChange={(value) => handleInputChange('businessType', value)}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white h-10 sm:h-12">
                    <SelectValue placeholder="Select Your Business Type *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="retail">Retail Shop / Store</SelectItem>
                    <SelectItem value="distributor">Distributor / Wholesaler</SelectItem>
                    <SelectItem value="manufacturer">Manufacturer</SelectItem>
                    <SelectItem value="service">Service Provider</SelectItem>
                    <SelectItem value="restaurant">Restaurant / Cafe</SelectItem>
                    <SelectItem value="medical">Medical / Clinic</SelectItem>
                    <SelectItem value="ecommerce">E-commerce Business</SelectItem>
                    <SelectItem value="other">Other Business</SelectItem>
                  </SelectContent>
                </Select>
                <Select onValueChange={(value) => handleInputChange('preferredUsage', value)}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white h-10 sm:h-12">
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
                  className="w-full bg-white text-[#0bc073] hover:bg-gray-100 py-3 font-semibold transition-all duration-200 hover:scale-105 text-sm sm:text-base h-10 sm:h-12"
                  disabled={!formData.name || !formData.mobile || !formData.businessType || !formData.preferredUsage}
                >
                  Get Free Demo & Pricing
                </Button>
                <p className="text-xs text-center opacity-75">
                  By submitting, you agree to receive business communication from BillQ team via email and WhatsApp
                </p>
              </form>
            )}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm opacity-90">Growing Customers</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">5K+</div>
              <div className="text-sm opacity-90">Orders Processed</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm opacity-90">Business Types</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">99%</div>
              <div className="text-sm opacity-90">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
