
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/lovable-uploads/1c0997be-885b-4b84-9f10-02bd9aa45f22.png" 
              alt="BillQ" 
              className="h-10 w-auto mb-4 brightness-0 invert filter drop-shadow-sm"
            />
            <p className="text-gray-300 mb-4">
              Smart Order Management System designed to streamline your business operations with unlimited scalability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#0bc073] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0bc073] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0bc073] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0bc073] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0bc073] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-[#0bc073] transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-[#0bc073] transition-colors">Pricing</a></li>
              <li><a href="#support" className="text-gray-300 hover:text-[#0bc073] transition-colors">Support</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#0bc073] transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Smart Billing</span></li>
              <li><span className="text-gray-300">Order Management</span></li>
              <li><span className="text-gray-300">Inventory Tracking</span></li>
              <li><span className="text-gray-300">Customer Management</span></li>
              <li><span className="text-gray-300">Business Analytics</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#0bc073] mt-1" />
                <div>
                  <p className="text-gray-300">Call Support:</p>
                  <a href="tel:+918220490340" className="text-white hover:text-[#0bc073]">+91 82204 90340</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#0bc073] mt-1" />
                <div>
                  <p className="text-gray-300">WhatsApp:</p>
                  <a href="https://wa.me/918220760340" className="text-white hover:text-[#0bc073]">+91 82207 60340</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#0bc073] mt-1" />
                <div>
                  <p className="text-gray-300">Email:</p>
                  <a href="mailto:support@billq.co.in" className="text-white hover:text-[#0bc073]">support@billq.co.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 BillQ. All rights reserved. Made with ❤️ for Indian businesses.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#0bc073] text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#0bc073] text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#0bc073] text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
