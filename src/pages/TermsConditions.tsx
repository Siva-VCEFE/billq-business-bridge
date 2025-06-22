
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const TermsConditions = () => {
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using BillQ services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
              <p className="mb-4">BillQ provides business management software solutions including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Order management and invoicing</li>
                <li>Inventory tracking and management</li>
                <li>Customer relationship management</li>
                <li>Business analytics and reporting</li>
                <li>Multi-channel integration capabilities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p className="mb-4">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the service only for lawful business purposes</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not attempt to reverse engineer or hack the software</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
              <p className="mb-4">Payment terms are as follows:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All fees are payable in advance</li>
                <li>Setup charges are non-refundable</li>
                <li>Annual renewal is mandatory for online editions</li>
                <li>Renewal is optional for offline editions</li>
                <li>Custom development charges are additional</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">5. Data Ownership</h2>
              <p>You retain full ownership of all data entered into the BillQ system. We act as a data processor and will not access, use, or share your data except as necessary to provide services or as required by law.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">6. Service Availability</h2>
              <p>While we strive for maximum uptime, we cannot guarantee 100% availability. Scheduled maintenance will be communicated in advance. We are not liable for business losses due to service interruptions.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p>Our liability is limited to the amount paid for the service. We are not liable for indirect, consequential, or punitive damages arising from the use of our services.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
              <p className="mb-4">Either party may terminate the service agreement:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With 30 days written notice</li>
                <li>Immediately for material breach</li>
                <li>Upon non-payment of fees</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">9. Support</h2>
              <p>Technical support is provided during business hours (Mon-Sat, 9:30 AM - 6:30 PM IST) via phone, email, and WhatsApp. Response times may vary based on the complexity of the issue.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>VCEFE Tech Company</strong></p>
                <p><strong>Email:</strong> support@billq.co.in</p>
                <p><strong>Phone:</strong> +91 82204 90340</p>
                <p><strong>WhatsApp:</strong> +91 82207 60340</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
