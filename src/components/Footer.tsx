
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a 
              href="#" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block mb-4"
            >
              <img 
                src="/lovable-uploads/1c0997be-885b-4b84-9f10-02bd9aa45f22.png" 
                alt="BillQ" 
                className="h-12 sm:h-14 md:h-16 w-auto brightness-200 invert filter drop-shadow-lg hover:scale-105 transition-transform"
              />
            </a>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Smart Order Management System designed to streamline your business operations with unlimited scalability.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#0bc073] transition-colors">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0bc073] transition-colors">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0bc073] transition-colors">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0bc073] transition-colors">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0bc073] transition-colors">
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6 sm:mb-0">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-[#0bc073] transition-colors text-sm sm:text-base">Features</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-[#0bc073] transition-colors text-sm sm:text-base">Pricing</a></li>
              <li><a href="#support" className="text-gray-300 hover:text-[#0bc073] transition-colors text-sm sm:text-base">Support</a></li>
              <li>
                <a 
                  href="/privacy-policy" 
                  className="text-gray-300 hover:text-[#0bc073] transition-colors text-sm sm:text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('/privacy-policy', '_blank');
                  }}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="mb-6 sm:mb-0">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Solutions</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300 text-sm sm:text-base">Smart Billing</span></li>
              <li><span className="text-gray-300 text-sm sm:text-base">Order Management</span></li>
              <li><span className="text-gray-300 text-sm sm:text-base">Inventory Tracking</span></li>
              <li><span className="text-gray-300 text-sm sm:text-base">Customer Management</span></li>
              <li><span className="text-gray-300 text-sm sm:text-base">Business Analytics</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-[#0bc073] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm">Call Support:</p>
                  <a href="tel:+918220490340" className="text-white hover:text-[#0bc073] text-sm sm:text-base">+91 82204 90340</a>
                </div>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-[#0bc073] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm">WhatsApp:</p>
                  <a href="https://wa.me/918220760340" className="text-white hover:text-[#0bc073] text-sm sm:text-base">+91 82207 60340</a>
                </div>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#0bc073] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm">Email:</p>
                  <a href="mailto:support@billq.co.in" className="text-white hover:text-[#0bc073] text-sm sm:text-base">support@billq.co.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-gray-400 text-xs sm:text-sm">
                © {new Date().getFullYear()} BillQ. All rights reserved. Made with ❤️ for Indian businesses.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Powered by{' '}
                <a 
                  href="https://www.vcefe.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0bc073] hover:text-emerald-400 transition-colors"
                >
                  VCEFE Tech Company
                </a>
              </p>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
              <a 
                href="/privacy-policy" 
                className="text-gray-400 hover:text-[#0bc073] text-xs sm:text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('/privacy-policy', '_blank');
                }}
              >
                Privacy Policy
              </a>
              <a 
                href="/terms-conditions" 
                className="text-gray-400 hover:text-[#0bc073] text-xs sm:text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('/terms-conditions', '_blank');
                }}
              >
                Terms of Service
              </a>
              <a 
                href="/cookie-policy" 
                className="text-gray-400 hover:text-[#0bc073] text-xs sm:text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('/cookie-policy', '_blank');
                }}
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
