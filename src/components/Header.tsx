
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { User, LogIn, UserPlus } from 'lucide-react';
import LoginModal from './auth/LoginModal';
import SignupModal from './auth/SignupModal';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">BillQ</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#support" className="text-gray-600 hover:text-blue-600 transition-colors">Support</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => setShowLogin(true)}
                className="flex items-center gap-2"
              >
                <LogIn className="h-4 w-4" />
                Sign In
              </Button>
              <Button 
                onClick={() => setShowSignup(true)}
                className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
              >
                <UserPlus className="h-4 w-4" />
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </header>

      <LoginModal 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)}
        onSwitchToSignup={() => {
          setShowLogin(false);
          setShowSignup(true);
        }}
      />
      
      <SignupModal 
        isOpen={showSignup} 
        onClose={() => setShowSignup(false)}
        onSwitchToLogin={() => {
          setShowSignup(false);
          setShowLogin(true);
        }}
      />
    </>
  );
};

export default Header;
