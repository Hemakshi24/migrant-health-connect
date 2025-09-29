import { useState } from 'react';
import { Card } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { WorkerMobileInterface } from './components/worker-mobile-interface';
import { DoctorDashboard } from './components/doctor-dashboard';
import { GovernmentDashboard } from './components/government-dashboard';
import { MultilingualChatbot } from './components/multilingual-chatbot';
import { AuthSystem } from './components/auth-system';
import { 
  Smartphone, 
  Monitor, 
  BarChart3, 
  Heart, 
  Users, 
  Activity,
  Shield,
  Globe,
  LogIn,
  UserPlus
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [currentInterface, setCurrentInterface] = useState('overview');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Sample worker data - will be replaced by actual user data after authentication
  const sampleWorker = {
    name: currentUser?.name || 'Prince kumar',
    healthId: currentUser?.healthId || '2410030223',
    phone: currentUser?.phone || '+91-9876543210',
    dateOfBirth: currentUser?.dateOfBirth || '10/08/2004',
    bloodGroup: currentUser?.bloodGroup || 'o+',
    photo: currentUser?.photo || 'https://images.unsplash.com/photo-1542795126-6f5c1755a428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtaWdyYW50JTIwd29ya2VyJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc1NzA5MDcwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  };

  const handleLogin = (userType: string, userData: any) => {
    setCurrentUser(userData);
    setIsAuthenticated(true);
    setCurrentInterface(userType);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    setCurrentInterface('overview');
  };

  // Show authentication system if not authenticated and trying to access protected interfaces
  if (!isAuthenticated && (currentInterface === 'worker' || currentInterface === 'doctor' || currentInterface === 'hospital')) {
    return <AuthSystem onLogin={handleLogin} onBack={() => setCurrentInterface('overview')} />;
  }

  // Show auth system if explicitly navigating to auth
  if (currentInterface === 'auth') {
    return <AuthSystem onLogin={handleLogin} onBack={() => setCurrentInterface('overview')} />;
  }

  if (currentInterface === 'worker') {
    return (
      <div className="relative">
        <WorkerMobileInterface workerData={sampleWorker} />
        <MultilingualChatbot />
        <div className="fixed top-4 right-4 z-50 flex flex-col sm:flex-row gap-2">
          <Button 
            onClick={handleLogout}
            variant="outline"
            size="sm"
            className="bg-white shadow-xl border-gray-200 hover:bg-gray-50 h-9 px-3 text-sm font-medium"
          >
            Logout
          </Button>
          <Button 
            onClick={() => setCurrentInterface('overview')}
            variant="outline"
            size="sm"
            className="bg-white shadow-xl border-gray-200 hover:bg-gray-50 h-9 px-3 text-sm font-medium"
          >
            <span className="hidden sm:inline">← Back to Overview</span>
            <span className="sm:hidden">← Back</span>
          </Button>
        </div>
      </div>
    );
  }

  if (currentInterface === 'doctor') {
    return (
      <div className="relative">
        <DoctorDashboard />
        <MultilingualChatbot />
        <div className="fixed top-4 right-4 z-40 flex flex-col sm:flex-row gap-2">
          <Button 
            onClick={handleLogout}
            variant="outline"
            size="sm"
            className="bg-white shadow-xl border-gray-200 hover:bg-gray-50 h-9 px-3 text-sm font-medium"
          >
            Logout
          </Button>
          <Button 
            onClick={() => setCurrentInterface('overview')}
            variant="outline"
            size="sm"
            className="bg-white shadow-xl border-gray-200 hover:bg-gray-50 h-9 px-3 text-sm font-medium"
          >
            <span className="hidden sm:inline">← Back to Overview</span>
            <span className="sm:hidden">← Back</span>
          </Button>
        </div>
      </div>
    );
  }

  if (currentInterface === 'government') {
    return (
      <div className="relative">
        <GovernmentDashboard />
        <div className="fixed top-4 right-4 z-50 flex flex-col sm:flex-row gap-2">
          <Button 
            onClick={handleLogout}
            variant="outline"
            size="sm"
            className="bg-white text-gray-900 shadow-xl border-gray-200 hover:bg-gray-50 h-9 px-3 text-sm font-medium"
          >
            Logout
          </Button>
          <Button 
            onClick={() => setCurrentInterface('overview')}
            variant="outline"
            size="sm"
            className="bg-white text-gray-900 shadow-xl border-gray-200 hover:bg-gray-50 h-9 px-3 text-sm font-medium"
          >
            <span className="hidden sm:inline">← Back to Overview</span>
            <span className="sm:hidden">← Back</span>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Migrant HealthConnect</h1>
                <p className="text-sm sm:text-base text-gray-600 hidden sm:block">Digital Health Record System</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 w-full sm:w-auto">
              <Badge className="bg-green-100 text-green-800 text-xs sm:text-sm">System Online</Badge>
              <Badge className="bg-blue-100 text-blue-800 text-xs sm:text-sm hidden sm:inline-flex">424K+ Workers Registered</Badge>
              {isAuthenticated && currentUser && (
                <div className="flex items-center gap-2">
                  <Badge className="bg-purple-100 text-purple-800 text-xs sm:text-sm">
                    Welcome, {currentUser.name}
                  </Badge>
                  <Button 
                    onClick={handleLogout}
                    variant="outline"
                    size="sm"
                    className="h-8 px-3 text-sm"
                  >
                    Logout
                  </Button>
                </div>
              )}
              {!isAuthenticated && (
                <Button 
                  onClick={() => setCurrentInterface('auth')}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 h-8 px-3 text-sm"
                >
                  <LogIn className="w-4 h-4" />
                  <span className="hidden sm:inline">Login / Register</span>
                  <span className="sm:hidden">Login</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Comprehensive Healthcare for Migrant Workers
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A unified digital platform providing healthcare access, medical records management, 
            and health monitoring for migrant workers across India with multilingual support.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
          <Card className="p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border-0 shadow-md">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2 text-gray-900">Digital Health ID</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Secure QR-based health cards with complete medical history</p>
          </Card>
          
          <Card className="p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border-0 shadow-md">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Activity className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2 text-gray-900">Telemedicine</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Remote consultations with multilingual support</p>
          </Card>
          
          <Card className="p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border-0 shadow-md">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600" />
            </div>
            <h3 className="font-semibold mb-2 text-gray-900">AI Analytics</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Predictive health insights and outbreak detection</p>
          </Card>
          
          <Card className="p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border-0 shadow-md">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2 text-gray-900">Multilingual</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Support for Hindi, Bengali, Tamil, Malayalam, Odia</p>
          </Card>
        </div>

        {/* Interface Showcase */}
        <div className="space-y-6 sm:space-y-8">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-900">System Interfaces</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Worker Mobile App */}
            <Card className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 shadow-md">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors shadow-sm">
                  <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Worker Mobile App</h4>
                  <p className="text-sm text-gray-600">Flutter/React Native UI</p>
                </div>
              </div>
              
              <div className="aspect-[9/16] bg-gray-100 rounded-xl overflow-hidden mb-4 sm:mb-6 relative shadow-inner">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1542795126-6f5c1755a428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtaWdyYW50JTIwd29ya2VyJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc1NzA5MDcwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Worker using mobile app"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-95 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center text-white">
                    <Smartphone className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-medium">Mobile Interface</p>
                  </div>
                </div>
              </div>
              
              <ul className="text-sm text-gray-600 space-y-2 mb-4 sm:mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Digital Health Card with QR Code</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Multilingual Support (5 Languages)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Health Records & Prescriptions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Video Consultation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Vaccination Tracking</span>
                </li>
              </ul>
              
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 group-hover:shadow-lg transition-all duration-300 h-11 font-medium"
                onClick={() => setCurrentInterface('worker')}
              >
                {isAuthenticated && currentUser?.userType === 'worker' ? 'Go to Dashboard' : 'Login as Worker'}
              </Button>
            </Card>

            {/* Doctor Dashboard */}
            <Card className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 shadow-md">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors shadow-sm">
                  <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Doctor Web Dashboard</h4>
                  <p className="text-sm text-gray-600">Desktop Interface</p>
                </div>
              </div>
              
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-4 sm:mb-6 relative shadow-inner">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1542868727-a1fc9a8a0ab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGhvc3BpdGFsfGVufDF8fHx8MTc1NzA5MDcwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Doctor using dashboard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-green-600 bg-opacity-95 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center text-white">
                    <Monitor className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-medium">Doctor Dashboard</p>
                  </div>
                </div>
              </div>
              
              <ul className="text-sm text-gray-600 space-y-2 mb-4 sm:mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Patient Lookup with QR Scan</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Medical Records Management</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Prescription & Report Upload</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Consent Management</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Analytics & Insights</span>
                </li>
              </ul>
              
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 group-hover:shadow-lg transition-all duration-300 h-11 font-medium"
                onClick={() => setCurrentInterface('doctor')}
              >
                {isAuthenticated && currentUser?.userType === 'doctor' ? 'Go to Dashboard' : 'Login as Doctor'}
              </Button>
            </Card>

            {/* Government Dashboard */}
            <Card className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 shadow-md">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors shadow-sm">
                  <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Government Analytics</h4>
                  <p className="text-sm text-gray-600">Dark Mode Analytics</p>
                </div>
              </div>
              
              <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden mb-4 sm:mb-6 relative shadow-inner">
                <div className="absolute inset-0 bg-purple-600 bg-opacity-95 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center text-white">
                    <BarChart3 className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-medium">Analytics Portal</p>
                  </div>
                </div>
              </div>
              
              <ul className="text-sm text-gray-600 space-y-2 mb-4 sm:mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>India Heatmap with Disease Clusters</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>AI Predictive Health Alerts</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>State/District Analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Vaccination Coverage Reports</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Real-time Health Monitoring</span>
                </li>
              </ul>
              
              <Button 
                className="w-full bg-purple-600 hover:bg-purple-700 group-hover:shadow-lg transition-all duration-300 h-11 font-medium"
                onClick={() => setCurrentInterface('government')}
              >
                {isAuthenticated && currentUser?.userType === 'hospital' ? 'Go to Portal' : 'Government Access'}
              </Button>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-8 sm:mt-12 lg:mt-16 bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border-0">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8 lg:mb-10">System Impact</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">424K+</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Registered Workers</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">85%</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Health Coverage</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">1.2M+</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Medical Records</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">28</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">States Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Multilingual Chatbot */}
      <MultilingualChatbot />
    </div>
  );
}