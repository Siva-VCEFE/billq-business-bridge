
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Plus, X, Building2 } from 'lucide-react';

const ClientShowcase = () => {
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "Sample Client 1",
      logo: "/placeholder.svg",
      industry: "Retail"
    },
    {
      id: 2,
      name: "Sample Client 2", 
      logo: "/placeholder.svg",
      industry: "Manufacturing"
    },
    {
      id: 3,
      name: "Sample Client 3",
      logo: "/placeholder.svg", 
      industry: "Wholesale"
    },
    {
      id: 4,
      name: "Sample Client 4",
      logo: "/placeholder.svg",
      industry: "Services"
    }
  ]);

  const [showUploadForm, setShowUploadForm] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // This would be managed by actual authentication

  // Mock admin login for demonstration
  const handleAdminToggle = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join hundreds of satisfied customers who have transformed their business operations with BillQ
          </p>
          
          {/* Admin Toggle - This would be hidden in production and managed by proper authentication */}
          <Button 
            onClick={handleAdminToggle}
            variant="outline"
            size="sm"
            className="mb-8 text-xs"
          >
            {isAdmin ? "Exit Admin Mode" : "Admin Mode (Demo)"}
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {clients.map((client) => (
            <Card key={client.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="relative">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="h-16 w-auto mx-auto mb-4 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  {isAdmin && (
                    <Button
                      size="sm"
                      variant="destructive"
                      className="absolute -top-2 -right-2 h-6 w-6 p-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => setClients(clients.filter(c => c.id !== client.id))}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  )}
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{client.name}</h4>
                <p className="text-sm text-gray-600">{client.industry}</p>
              </CardContent>
            </Card>
          ))}

          {/* Add New Client Card - Only visible to admin */}
          {isAdmin && (
            <Card className="border-2 border-dashed border-gray-300 hover:border-[#0bc073] transition-colors cursor-pointer">
              <CardContent 
                className="p-6 text-center h-full flex flex-col items-center justify-center"
                onClick={() => setShowUploadForm(true)}
              >
                <Plus className="h-12 w-12 text-gray-400 mb-2" />
                <p className="text-gray-600 font-medium">Add New Client</p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Upload Form Modal */}
        {showUploadForm && isAdmin && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Add New Client</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowUploadForm(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Client Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#0bc073] focus:border-[#0bc073]"
                    placeholder="Enter client name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#0bc073] focus:border-[#0bc073]"
                    placeholder="Enter industry"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Logo Upload
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Button
                    className="flex-1 bg-[#0bc073] hover:bg-[#089a5f]"
                    onClick={() => {
                      // Here you would handle the actual upload
                      setShowUploadForm(false);
                    }}
                  >
                    Add Client
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setShowUploadForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-[#0bc073] mb-2">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0bc073] mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0bc073] mb-2">24/7</div>
              <div className="text-gray-600">System Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
