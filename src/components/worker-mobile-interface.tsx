import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { QRHealthCard } from './qr-health-card';
import { 
  User, 
  FileText, 
  Video, 
  Bell, 
  Settings, 
  Calendar,
  Pill,
  Shield,
  Activity,
  Phone,
  Languages,
  QrCode,
  Download,
  Eye
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface WorkerMobileInterfaceProps {
  workerData: {
    name: string;
    healthId: string;
    phone: string;
    dateOfBirth: string;
    bloodGroup: string;
    photo?: string;
  };
}

export function WorkerMobileInterface({ workerData }: WorkerMobileInterfaceProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [currentScreen, setCurrentScreen] = useState('home');

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
    { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' }
  ];

  if (currentScreen === 'onboarding') {
    return (
      <div className="max-w-md mx-auto bg-white min-h-screen">
        <div className="p-4 sm:p-6 text-center">
          <div className="mb-8 sm:mb-10">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-100 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
              <User className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Migrant HealthConnect</h1>
            <p className="text-gray-600 text-sm sm:text-base">Select your preferred language</p>
          </div>

          <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
            {languages.map((lang) => (
              <Button
                key={lang.code}
                variant={selectedLanguage === lang.code ? "default" : "outline"}
                className="w-full justify-between p-4 h-auto hover:shadow-md transition-all duration-200 border-gray-200"
                onClick={() => setSelectedLanguage(lang.code)}
              >
                <span className="font-medium">{lang.nativeName}</span>
                <span className="text-sm opacity-75">{lang.name}</span>
              </Button>
            ))}
          </div>

          <div className="mb-6 sm:mb-8">
            <h3 className="font-semibold mb-3 sm:mb-4 text-gray-900">Your Digital Health Card Preview</h3>
            <QRHealthCard
              name={workerData.name}
              healthId={workerData.healthId}
              emergencyContact={workerData.phone}
              dateOfBirth={workerData.dateOfBirth}
              bloodGroup={workerData.bloodGroup}
              photo={workerData.photo}
            />
          </div>

          <Button 
            onClick={() => setCurrentScreen('home')}
            className="w-full bg-blue-600 hover:bg-blue-700 h-12 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Continue to App
          </Button>
        </div>
      </div>
    );
  }

  if (currentScreen === 'records') {
    return (
      <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
        <div className="bg-blue-600 text-white p-4 sm:p-6">
          <Button 
            variant="ghost" 
            onClick={() => setCurrentScreen('home')}
            className="text-white mb-2 sm:mb-3 p-0 hover:bg-blue-700 h-8 px-2"
          >
            ← Back
          </Button>
          <h1 className="text-xl sm:text-2xl font-semibold">Health Records</h1>
        </div>

        <Tabs defaultValue="prescriptions" className="p-4 sm:p-6">
          <TabsList className="grid w-full grid-cols-4 h-11">
            <TabsTrigger value="prescriptions" className="text-xs sm:text-sm">Scripts</TabsTrigger>
            <TabsTrigger value="vaccinations" className="text-xs sm:text-sm">Vaccines</TabsTrigger>
            <TabsTrigger value="reports" className="text-xs sm:text-sm">Reports</TabsTrigger>
            <TabsTrigger value="history" className="text-xs sm:text-sm">History</TabsTrigger>
          </TabsList>

          <TabsContent value="prescriptions" className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
            <Card className="p-4 sm:p-5 shadow-sm border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Pill className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-gray-900">Dr. Kumar - City Hospital</span>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-3">Prescribed: March 15, 2024</p>
              <div className="text-sm space-y-2 text-gray-700">
                <p>• Paracetamol 500mg - Twice daily</p>
                <p>• Amoxicillin 250mg - Thrice daily</p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="vaccinations" className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
            <Card className="p-4 sm:p-5 shadow-sm border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-900">COVID-19 Vaccine</span>
                </div>
                <Badge className="bg-green-100 text-green-800">Complete</Badge>
              </div>
              <p className="text-sm text-gray-700 mb-1">Both doses completed</p>
              <p className="text-xs text-gray-500">Last dose: Feb 20, 2024</p>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
            <Card className="p-4 sm:p-5 shadow-sm border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <FileText className="w-5 h-5 text-orange-600" />
                  <span className="font-medium text-gray-900">Blood Test Report</span>
                </div>
                <Button size="sm" variant="outline" className="h-8 px-3">
                  <Eye className="w-3 h-3 mr-1" />
                  View
                </Button>
              </div>
              <p className="text-sm text-gray-700 mb-1">Date: March 10, 2024</p>
              <p className="text-xs text-gray-500">All parameters normal</p>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
            <Card className="p-4 sm:p-5 shadow-sm border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3">
                <Activity className="w-5 h-5 text-red-600" />
                <span className="font-medium text-gray-900">Fever Treatment</span>
              </div>
              <p className="text-sm text-gray-700 mb-1">Dr. Sharma - March 12, 2024</p>
              <p className="text-xs text-gray-500">Treatment completed successfully</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  if (currentScreen === 'telemedicine') {
    return (
      <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
        <div className="bg-blue-600 text-white p-4 sm:p-6">
          <Button 
            variant="ghost" 
            onClick={() => setCurrentScreen('home')}
            className="text-white mb-2 sm:mb-3 p-0 hover:bg-blue-700 h-8 px-2"
          >
            ← Back
          </Button>
          <h1 className="text-xl sm:text-2xl font-semibold">Video Consultation</h1>
        </div>

        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <Card className="aspect-video bg-gray-900 rounded-xl overflow-hidden relative shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1542868727-a1fc9a8a0ab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGhvc3BpdGFsfGVufDF8fHx8MTc1NzA5MDcwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Doctor video call"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
              Dr. Priya Sharma - Cardiologist
            </div>
            <div className="absolute top-4 right-4 w-20 h-16 sm:w-24 sm:h-20 bg-gray-800 rounded-lg border-2 border-gray-600 shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1542795126-6f5c1755a428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtaWdyYW50JTIwd29ya2VyJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc1NzA5MDcwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Patient"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </Card>

          <Card className="p-4 sm:p-5 h-64 sm:h-72 flex flex-col shadow-lg border-gray-200">
            <h3 className="font-medium mb-3 sm:mb-4 text-gray-900">Chat (हिंदी/English)</h3>
            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg text-sm">
                <strong className="text-blue-800">Doctor:</strong> <span className="text-gray-700">How are you feeling today? आज आपकी तबीयत कैसी है?</span>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg text-sm text-right">
                <strong className="text-gray-800">You:</strong> <span className="text-gray-700">Better than yesterday. कल से बेहतर।</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Type message / संदेश टाइप करें"
                className="flex-1 px-3 py-3 border border-gray-300 rounded-lg text-sm bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Button size="sm" className="px-3 py-3 bg-blue-600 hover:bg-blue-700">
                <Phone className="w-4 h-4" />
              </Button>
            </div>
          </Card>

          <div className="flex justify-center space-x-4">
            <Button className="bg-red-600 hover:bg-red-700 px-8 py-3 h-12 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              End Call
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold">HealthConnect</h1>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700 h-9 w-9 p-0">
              <Languages className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700 h-9 w-9 p-0">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Profile Card */}
        <QRHealthCard
          name={workerData.name}
          healthId={workerData.healthId}
          emergencyContact={workerData.phone}
          dateOfBirth={workerData.dateOfBirth}
          bloodGroup={workerData.bloodGroup}
          photo={workerData.photo}
        />
      </div>

      {/* Quick Actions */}
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        <h2 className="font-semibold text-gray-900 text-lg">Quick Actions</h2>
        
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <Button 
            variant="outline" 
            className="h-20 sm:h-24 flex-col space-y-2 hover:shadow-md transition-all duration-200 border-gray-200 relative"
            onClick={() => setCurrentScreen('records')}
          >
            <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
            <span className="text-sm font-medium">My Records</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-20 sm:h-24 flex-col space-y-2 hover:shadow-md transition-all duration-200 border-gray-200"
            onClick={() => setCurrentScreen('telemedicine')}
          >
            <Video className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
            <span className="text-sm font-medium">Consult Doctor</span>
          </Button>
          
          <Button variant="outline" className="h-20 sm:h-24 flex-col space-y-2 hover:shadow-md transition-all duration-200 border-gray-200 relative">
            <Bell className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600" />
            <span className="text-sm font-medium">Alerts</span>
            <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full p-0 flex items-center justify-center shadow-sm">
              2
            </Badge>
          </Button>
          
          <Button variant="outline" className="h-20 sm:h-24 flex-col space-y-2 hover:shadow-md transition-all duration-200 border-gray-200">
            <QrCode className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600" />
            <span className="text-sm font-medium">Scan QR</span>
          </Button>
        </div>

        {/* Recent Activity */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="font-medium text-gray-900 text-lg">Recent Activity</h3>
          
          <Card className="p-4 shadow-sm border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Vaccination due reminder</p>
                <p className="text-xs text-gray-500 mt-1">COVID-19 booster shot - March 20</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 shadow-sm border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Pill className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Medication reminder</p>
                <p className="text-xs text-gray-500 mt-1">Take evening dose at 8 PM</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}