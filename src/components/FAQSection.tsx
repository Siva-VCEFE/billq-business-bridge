
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Can I use BillQ offline?",
      answer: "Yes! BillQ works perfectly offline. You can create orders, generate invoices, and manage inventory without internet. Data syncs automatically when you're back online."
    },
    {
      question: "Is internet required all the time?",
      answer: "No, internet is not required all the time. BillQ has robust offline capabilities. You only need internet for initial setup, data syncing, and accessing cloud features like WhatsApp integration."
    },
    {
      question: "How do I upgrade to a higher edition?",
      answer: "You can upgrade your plan anytime from your BillQ dashboard. The upgrade is instant, and you'll have access to all new features immediately. We also offer prorated billing."
    },
    {
      question: "Is BillQ GST compliant?",
      answer: "Absolutely! BillQ is fully GST compliant and generates invoices that meet all Indian tax requirements. We stay updated with the latest GST regulations."
    },
    {
      question: "Is support included in pricing?",
      answer: "Yes, all plans include customer support. Starter gets email support, Business gets phone support, and Enterprise gets priority support with dedicated account manager."
    },
    {
      question: "Can multiple users access the same account?",
      answer: "Yes, Business and Enterprise plans support multiple users with role-based access. You can control what each team member can see and do in the system."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers to help you get started
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
