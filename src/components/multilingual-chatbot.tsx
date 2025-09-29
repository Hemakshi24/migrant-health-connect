import { useState } from 'react';
import { MessageCircle, X, Send, Globe } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const languages = {
  en: 'English',
  hi: 'हिंदी',
  bn: 'বাংলা',
  ta: 'தமிழ்',
  ml: 'മലയാളം',
  or: 'ଓଡ଼ିଆ'
};

const botResponses = {
  en: {
    greeting: "Hello! I'm your health assistant. How can I help you today?",
    appointment: "To book an appointment, please go to 'Consult Doctor' section in your app.",
    records: "You can view your health records in the 'My Records' section.",
    emergency: "For medical emergencies, please call 102 or visit the nearest hospital.",
    vaccination: "Check your vaccination status in the 'Health Records' → 'Vaccinations' tab."
  },
  hi: {
    greeting: "नमस्ते! मैं आपका स्वास्थ्य सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
    appointment: "अपॉइंटमेंट बुक करने के लिए, कृपया अपने ऐप में 'डॉक्टर से सलाह' सेक्शन पर जाएं।",
    records: "आप 'मेरे रिकॉर्ड' सेक्शन में अपने स्वास्थ्य रिकॉर्ड देख सकते हैं।",
    emergency: "मेडिकल इमरजेंसी के लिए, कृपया 102 पर कॉल करें या निकटतम अस्पताल जाएं।",
    vaccination: "अपना टीकाकरण स्टेटस 'हेल्थ रिकॉर्ड्स' → 'टीकाकरण' टैब में चेक करें।"
  }
};

export function MultilingualChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<keyof typeof languages>('en');

  const addMessage = (text: string, isBot: boolean = false) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      addMessage(inputMessage);
      
      // Simple bot response logic
      const responses = botResponses[selectedLanguage as keyof typeof botResponses] || botResponses.en;
      let botResponse = responses.greeting;
      
      const lowerInput = inputMessage.toLowerCase();
      if (lowerInput.includes('appointment') || lowerInput.includes('doctor')) {
        botResponse = responses.appointment;
      } else if (lowerInput.includes('record') || lowerInput.includes('history')) {
        botResponse = responses.records;
      } else if (lowerInput.includes('emergency') || lowerInput.includes('urgent')) {
        botResponse = responses.emergency;
      } else if (lowerInput.includes('vaccination') || lowerInput.includes('vaccine')) {
        botResponse = responses.vaccination;
      }
      
      setTimeout(() => {
        addMessage(botResponse, true);
      }, 1000);
      
      setInputMessage('');
    }
  };

  const initializeChat = () => {
    if (messages.length === 0) {
      const responses = botResponses[selectedLanguage as keyof typeof botResponses] || botResponses.en;
      addMessage(responses.greeting, true);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => {
          setIsOpen(true);
          initializeChat();
        }}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg z-50"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 bg-white shadow-xl z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-blue-600 text-white rounded-t-lg">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Health Assistant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Select value={selectedLanguage} onValueChange={(value: keyof typeof languages) => setSelectedLanguage(value)}>
                <SelectTrigger className="w-20 h-8 text-xs bg-blue-700 border-blue-500 text-white">
                  <Globe className="w-3 h-3" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(languages).map(([code, name]) => (
                    <SelectItem key={code} value={code}>{name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 text-white hover:bg-blue-700"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}