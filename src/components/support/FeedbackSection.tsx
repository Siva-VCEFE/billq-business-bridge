
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Star, Send, CheckCircle, Building2, Quote } from 'lucide-react';
import { toast } from 'sonner';

const FeedbackSection = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sample testimonials from Google My Business (would be fetched from actual GMB API)
  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Kumar Electronics",
      businessLogo: "/placeholder.svg",
      quote: "BillQ transformed our billing process. We save 3 hours daily and never miss invoices anymore.",
      rating: 5,
      source: "Google My Business"
    },
    {
      name: "Priya Sharma", 
      business: "Sharma Distributors",
      businessLogo: "/placeholder.svg",
      quote: "The offline mode is a game-changer. Our field team can work anywhere without internet worries.",
      rating: 5,
      source: "Google My Business"
    },
    {
      name: "Amit Patel",
      business: "Patel Manufacturing", 
      businessLogo: "/placeholder.svg",
      quote: "Inventory tracking with low stock alerts helped us reduce waste by 30% and increase profits.",
      rating: 5,
      source: "Google My Business"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!rating || !feedback || !name || !email || !businessName) {
      toast.error('Please fill all fields and provide a rating');
      return;
    }

    // Email to support
    const subject = encodeURIComponent(`BillQ Feedback - ${rating} Stars from ${name} (${businessName})`);
    const body = encodeURIComponent(`
Customer Feedback:

Name: ${name}
Business: ${businessName}
Email: ${email}
Rating: ${rating}/5 stars
Feedback: ${feedback}

Submitted on: ${new Date().toLocaleString()}
    `);
    
    window.open(`mailto:support@billq.co.in?subject=${subject}&body=${body}`);
    
    setIsSubmitted(true);
    toast.success('Thank you for your feedback!');
  };

  return (
    <div className="space-y-12">
      {/* Customer Testimonials */}
      <div>
        <h4 className="text-xl font-bold text-gray-900 mb-8 text-center">
          Join Successful Businesses Already Using Our Platform
        </h4>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-green-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <Building2 className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">{testimonial.business}</h5>
                    <p className="text-sm text-gray-600">{testimonial.name}</p>
                  </div>
                </div>
                
                <div className="flex justify-center mb-4">
                  <Quote className="h-8 w-8 text-[#0bc073]" />
                </div>
                <p className="text-gray-700 mb-4 italic text-center">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex justify-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-gray-500 text-center">via {testimonial.source}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Feedback Form */}
      {isSubmitted ? (
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-[#0bc073] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600">
              Your feedback has been submitted successfully. We appreciate your input and will use it to improve our services.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="mt-4 bg-[#0bc073] hover:bg-[#089a5f]"
            >
              Submit Another Feedback
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-gray-900">
              Share Your BillQ Experience
            </CardTitle>
            <p className="text-center text-gray-600">
              Your feedback helps us improve and serve you better
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Rating */}
              <div className="text-center">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Rate your experience
                </label>
                <div className="flex justify-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          star <= (hoveredRating || rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal & Business Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name
                  </label>
                  <Input
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Enter your business name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Feedback */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Feedback
                </label>
                <Textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Tell us about your experience with BillQ..."
                  rows={4}
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#0bc073] hover:bg-[#089a5f] flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FeedbackSection;
