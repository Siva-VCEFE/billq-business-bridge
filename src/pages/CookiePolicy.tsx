
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="mb-6 flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies</h2>
              <p>Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our services.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                  <p>These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                  <p>We use analytics cookies to understand how visitors interact with our website. This helps us improve our services and user experience.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                  <p>These cookies remember your preferences and settings to provide a more personalized experience.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                  <p>These cookies track your browsing habits to deliver relevant advertisements and measure the effectiveness of our marketing campaigns.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">3. Third-Party Cookies</h2>
              <p className="mb-4">We may use third-party services that set cookies on our behalf:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and integration</li>
                <li><strong>Payment Processors:</strong> For secure payment processing</li>
                <li><strong>Customer Support Tools:</strong> For live chat and support services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">4. Managing Cookies</h2>
              <p className="mb-4">You can control and manage cookies in several ways:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Browser Settings</h3>
                  <p>Most browsers allow you to control cookies through their settings. You can usually find cookie settings in the 'options' or 'preferences' menu of your browser.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cookie Consent</h3>
                  <p>When you first visit our website, we'll ask for your consent to use cookies. You can update your preferences at any time.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Opt-Out Links</h3>
                  <p>For certain third-party cookies, you can opt out directly through the service provider's website.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">5. Cookie Retention</h2>
              <p className="mb-4">Cookies are retained for different periods:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until manually deleted</li>
                <li><strong>Third-party Cookies:</strong> Retention periods are determined by the respective third parties</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">6. Updates to This Policy</h2>
              <p>We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. Please revisit this page periodically to stay informed about our use of cookies.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="mb-4">If you have any questions about our use of cookies, please contact us:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> privacy@billq.co.in</p>
                <p><strong>Phone:</strong> +91 82204 90340</p>
                <p><strong>Company:</strong> VCEFE Tech Company</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
