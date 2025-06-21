
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';
import ContactModal from './contact/ContactModal';

const Header = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-[#0bc073]">BillQ</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-[#0bc073] transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-[#0bc073] transition-colors">Pricing</a>
              <a href="#support" className="text-gray-600 hover:text-[#0bc073] transition-colors">Support</a>
              <a href="#about" className="text-gray-600 hover:text-[#0bc073] transition-colors">About</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => window.open('tel:+918220490340')}
                className="hidden sm:flex items-center gap-2 border-[#0bc073] text-[#0bc073] hover:bg-[#0bc073] hover:text-white"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
              <Button 
                onClick={() => setShowContact(true)}
                className="bg-[#0bc073] hover:bg-[#089a5f] flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Get Demo
              </Button>
            </div>
          </div>
        </div>
      </header>

      <ContactModal 
        isOpen={showContact} 
        onClose={() => setShowContact(false)}
      />
    </>
  );
};

export default Header;
