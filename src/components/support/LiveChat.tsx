
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Send, Phone, Video, Paperclip, Smile, User, Bot } from 'lucide-react';

const LiveChat = () => {
  const [message, setMessage] = useState('');
  const [chatMessages] = useState([
    {
      id: 1,
      type: 'system',
      message: 'Chat session started. You are connected to support agent Sarah.',
      timestamp: '2:30 PM',
      sender: 'System'
    },
    {
      id: 2,
      type: 'agent',
      message: 'Hi! I\'m Sarah from BillQ support. How can I help you today?',
      timestamp: '2:31 PM',
      sender: 'Sarah (Agent)'
    },
    {
      id: 3,
      type: 'user',
      message: 'I\'m having trouble setting up my GST configuration. Can you help?',
      timestamp: '2:32 PM',
      sender: 'You'
    },
    {
      id: 4,
      type: 'agent',
      message: 'Of course! I\'d be happy to help you with GST configuration. Can you tell me which state your business is registered in?',
      timestamp: '2:33 PM',
      sender: 'Sarah (Agent)'
    },
    {
      id: 5,
      type: 'user',
      message: 'My business is registered in Karnataka, but I also sell to customers in other states.',
      timestamp: '2:34 PM',
      sender: 'You'
    },
    {
      id: 6,
      type: 'agent',
      message: 'Perfect! For inter-state transactions, you\'ll need to configure IGST. Let me guide you through the setup process step by step.',
      timestamp: '2:35 PM',
      sender: 'Sarah (Agent)'
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
      // TODO: Implement real-time chat functionality
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Live Chat Support</h1>
          <p className="text-gray-600 mt-2">Real-time assistance from our support team</p>
        </div>

        <Card className="h-[600px] flex flex-col">
          {/* Chat Header */}
          <CardHeader className="border-b bg-blue-50">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-800">Online</Badge>
                    <span className="text-sm text-gray-600">Support Agent</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Video className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Chat Messages */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md ${
                  msg.type === 'system' 
                    ? 'mx-auto' 
                    : msg.type === 'user' 
                      ? 'ml-auto' 
                      : 'mr-auto'
                }`}>
                  {msg.type === 'system' ? (
                    <div className="text-center">
                      <div className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm">
                        {msg.message}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
                    </div>
                  ) : (
                    <div className={`${
                      msg.type === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    } px-4 py-3 rounded-2xl`}>
                      <div className="flex items-center gap-2 mb-1">
                        {msg.type === 'agent' && <Bot className="h-3 w-3" />}
                        <span className="text-xs font-medium">{msg.sender}</span>
                      </div>
                      <p className="text-sm">{msg.message}</p>
                      <p className={`text-xs mt-2 ${
                        msg.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {msg.timestamp}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </CardContent>

          {/* Chat Input */}
          <div className="border-t p-4">
            <div className="flex gap-2 items-center">
              <Button variant="outline" size="sm">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Smile className="h-4 w-4" />
              </Button>
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
              <span>Client ID: CL-2024-001</span>
              <span>Session: 15 minutes</span>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <h3 className="font-semibold mb-2">Screen Sharing</h3>
              <p className="text-sm text-gray-600 mb-3">Share your screen for better assistance</p>
              <Button size="sm" variant="outline" className="w-full">
                Start Screen Share
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <h3 className="font-semibold mb-2">Send Files</h3>
              <p className="text-sm text-gray-600 mb-3">Upload screenshots or documents</p>
              <Button size="sm" variant="outline" className="w-full">
                Upload File
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <h3 className="font-semibold mb-2">Rate Chat</h3>
              <p className="text-sm text-gray-600 mb-3">Help us improve our service</p>
              <Button size="sm" variant="outline" className="w-full">
                Rate Experience
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
