
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Calendar, Clock, CheckCircle, ArrowRight, Download, Play } from 'lucide-react';

const TrialDashboard = () => {
  const [trialData] = useState({
    daysRemaining: 5,
    totalDays: 7,
    clientId: 'CL-2024-001',
    features: [
      { name: 'GST Invoicing', used: true },
      { name: 'Inventory Management', used: true },
      { name: 'Customer Accounts', used: false },
      { name: 'Reports & Analytics', used: false },
      { name: 'Multi-user Access', used: false }
    ]
  });

  const progressPercentage = ((7 - trialData.daysRemaining) / 7) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to BillQ Trial</h1>
          <p className="text-gray-600 mt-2">Client ID: {trialData.clientId}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Trial Days Remaining</CardTitle>
              <Clock className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{trialData.daysRemaining} Days</div>
              <Progress value={progressPercentage} className="mt-2" />
              <p className="text-xs text-gray-600 mt-2">
                {7 - trialData.daysRemaining} of {trialData.totalDays} days used
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Features Explored</CardTitle>
              <CheckCircle className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {trialData.features.filter(f => f.used).length} / {trialData.features.length}
              </div>
              <p className="text-xs text-gray-600 mt-2">Try all features to get the full experience</p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Trial Status</CardTitle>
              <Calendar className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-green-600">Active</div>
              <p className="text-xs text-gray-600 mt-2">Full access to all trial features</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start" variant="outline">
                <Play className="mr-2 h-4 w-4" />
                Watch Tutorial Videos
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Sample Data
              </Button>
              <Button className="w-full justify-start bg-blue-600 text-white hover:bg-blue-700">
                <ArrowRight className="mr-2 h-4 w-4" />
                Explore All Features
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Feature Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {trialData.features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{feature.name}</span>
                    <div className={`px-2 py-1 rounded-full text-xs ${
                      feature.used 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {feature.used ? 'Used' : 'Not Used'}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-2">Ready to Continue?</h3>
          <p className="mb-4 opacity-90">
            Don't let your progress stop! Choose a plan that fits your business needs.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100">
            View Pricing Plans
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TrialDashboard;
