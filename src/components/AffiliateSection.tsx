
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { HandHeart, DollarSign, Users, TrendingUp, CheckCircle, Star, Globe, Headphones } from 'lucide-react';
import { toast } from 'sonner';

const AffiliateSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    experience: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill all required fields');
      return;
    }

    const subject = encodeURIComponent(`BillQ Affiliate Program Application - ${formData.name}`);
    const body = encodeURIComponent(`
New Affiliate Program Application:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Website: ${formData.website}
Experience: ${formData.experience}
Message: ${formData.message}

Submitted on: ${new Date().toLocaleString()}
    `);
    
    window.open(`mailto:affiliate@billq.co.in?subject=${subject}&body=${body}`);
    
    setIsSubmitted(true);
    toast.success('Application submitted successfully!');
  };

  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8 text-[#0bc073]" />,
      title: "Attractive Commission",
      description: "Earn up to 30% commission on every successful sale you refer to us."
    },
    {
      icon: <Users className="h-8 w-8 text-[#0bc073]" />,
      title: "Dedicated Support",
      description: "Get dedicated affiliate manager support and sales materials to help you succeed."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#0bc073]" />,
      title: "Growing Market",
      description: "Tap into the rapidly growing business automation and billing software market."
    },
    {
      icon: <Globe className="h-8 w-8 text-[#0bc073]" />,
      title: "Proven Product",
      description: "Promote a trusted solution with 5+ years of excellence and satisfied customers."
    }
  ];

  const requirements = [
    "Experience in business software sales or consulting",
    "Existing network of business contacts",
    "Basic understanding of billing and inventory management",
    "Commitment to provide quality customer service",
    "Professional website or business presence (preferred)"
  ];

  return (
    <section id="affiliate" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HandHeart className="w-4 h-4 mr-2" />
            Partner with Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Join Our Affiliate Program
            <span className="block text-[#0bc073]">Grow Your Business with BillQ</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with BillQ and earn attractive commissions while helping businesses streamline their operations with our proven solutions.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Requirements & Information */}
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Star className="h-6 w-6 text-[#0bc073] mr-2" />
                  Who Can Join?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0bc073] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Headphones className="h-6 w-6 text-[#0bc073] mr-2" />
                  What We Provide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0bc073] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Comprehensive product training and certification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0bc073] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Marketing materials and sales collaterals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0bc073] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Technical support for your customers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0bc073] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Regular commission payouts and performance tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0bc073] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Co-marketing opportunities and lead sharing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <div>
            {isSubmitted ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-[#0bc073] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your interest in our affiliate program. We'll review your application and get back to you within 2-3 business days.
                  </p>
                  <Button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        website: '',
                        experience: '',
                        message: ''
                      });
                    }}
                    className="bg-[#0bc073] hover:bg-[#089a5f]"
                  >
                    Submit Another Application
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Apply Now</CardTitle>
                  <p className="text-gray-600">Fill out the form below to join our affiliate program</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Website URL
                      </label>
                      <Input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="https://yourwebsite.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Relevant Experience
                      </label>
                      <Input
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        placeholder="Years of experience in business software sales"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us why you'd like to become a BillQ affiliate..."
                        rows={4}
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-[#0bc073] hover:bg-[#089a5f] py-3"
                    >
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0bc073] to-emerald-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Partner with BillQ?</h3>
            <p className="text-lg sm:text-xl mb-6 opacity-90">
              Join our growing network of partners and start earning attractive commissions today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                variant="outline"
                className="bg-white text-[#0bc073] hover:bg-gray-50 border-white"
                onClick={() => {
                  const subject = encodeURIComponent('BillQ Affiliate Program Inquiry');
                  const body = encodeURIComponent(`Hi,

I'm interested in learning more about the BillQ Affiliate Program.

Please provide me with:
- Detailed commission structure
- Program terms and conditions
- Marketing materials available
- Next steps to get started

Looking forward to partnering with BillQ.`);
                  window.open(`mailto:affiliate@billq.co.in?subject=${subject}&body=${body}`);
                }}
              >
                Contact Us for More Info
              </Button>
              <span className="text-sm opacity-80">or call us at +91 9876543210</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateSection;
