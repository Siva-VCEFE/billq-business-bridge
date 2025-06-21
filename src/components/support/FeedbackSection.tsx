
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Star, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const FeedbackSection = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!rating || !feedback || !name || !email) {
      toast.error('Please fill all fields and provide a rating');
      return;
    }

    // Here you would normally send to your backend
    console.log('Feedback submitted:', { rating, feedback, name, email });
    
    // Email to support
    const subject = encodeURIComponent(`BillQ Feedback - ${rating} Stars from ${name}`);
    const body = encodeURIComponent(`
Customer Feedback:

Name: ${name}
Email: ${email}
Rating: ${rating}/5 stars
Feedback: ${feedback}

Submitted on: ${new Date().toLocaleString()}
    `);
    
    // Send email to support
    window.open(`mailto:support@billq.co.in?subject=${subject}&body=${body}`);
    
    setIsSubmitted(true);
    toast.success('Thank you for your feedback!');
  };

  if (isSubmitted) {
    return (
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
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold text-gray-900">
          Share Your Experience
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

          {/* Personal Info */}
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
  );
};

export default FeedbackSection;
