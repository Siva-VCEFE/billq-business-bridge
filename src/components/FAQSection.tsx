
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
      question: "What is BillQ Smart Order Management System and how does it work?",
      answer: "BillQ is a comprehensive business management software that combines smart invoicing, order management, inventory tracking, and customer relationship management in one platform. It works both online and offline, allowing you to manage your entire business workflow from lead generation to invoice delivery with automated features and unlimited scalability."
    },
    {
      question: "Can I use BillQ without internet connection (offline mode)?",
      answer: "Yes! BillQ works perfectly offline with full functionality. You can create orders, generate invoices, manage inventory, and process sales without internet. All data automatically syncs when you're back online, ensuring seamless business operations regardless of connectivity."
    },
    {
      question: "Is BillQ suitable for both small businesses and large enterprises?",
      answer: "Absolutely! BillQ scales from small retail shops to large enterprises. Our Starter Pack is perfect for small businesses needing basic invoicing, while Business Pro handles growing companies, and Enterprise Plus offers completely customized solutions for large organizations with complex workflows."
    },
    {
      question: "How does the 'Lead to Invoice in One Click' feature work?",
      answer: "Our revolutionary one-click conversion instantly transforms your leads into professional, GST-compliant invoices. Simply select a lead and click convert - all customer data, product details, and pricing are automatically populated, saving hours of manual data entry and reducing errors."
    },
    {
      question: "What makes BillQ different from other billing software?",
      answer: "BillQ is not just billing software - it's a complete Smart Order Management System. Unique features include unlimited everything (users, invoices, customers), true offline capability, multi-channel sales handling, Kanban order management, barcode printing, payroll management, and 100% customizable workflows tailored to your business needs."
    },
    {
      question: "Is BillQ GST compliant and does it support Indian tax requirements?",
      answer: "Yes, BillQ is fully GST compliant and designed specifically for Indian businesses. It automatically calculates GST, generates compliant invoices, handles HSN codes, and supports all Indian tax requirements including e-invoicing and e-way bills where applicable."
    },
    {
      question: "Can multiple users access BillQ simultaneously?",
      answer: "Yes! Unlike other software with user restrictions, BillQ offers unlimited users across all paid plans. You can set role-based permissions, track user activities, and allow your entire team to work simultaneously without any additional charges."
    },
    {
      question: "What kind of support is included and how quickly can I get help?",
      answer: "All plans include comprehensive support - email support for Starter Pack, phone support for Business Pro, and 24/7 priority support with dedicated account manager for Enterprise Plus. We also provide free setup, training, and ongoing assistance to ensure your success."
    },
    {
      question: "How quickly can BillQ be implemented in my business?",
      answer: "BillQ can be implemented within 2-7 days depending on your plan and customization requirements. Our expert team handles the complete setup, data migration, user training, and customization to match your exact business workflow, ensuring smooth transition from your current system."
    },
    {
      question: "What happens to my data and can I export it if needed?",
      answer: "Your data is completely secure with enterprise-grade security and regular backups. You maintain full ownership of your data and can export it anytime in multiple formats (Excel, PDF, CSV). BillQ ensures data portability and never locks you into the platform."
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
            Everything you need to know about BillQ Smart Order Management System
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#0bc073]">
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
