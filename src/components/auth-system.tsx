import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Checkbox } from './ui/checkbox';
import { 
  Heart, 
  User, 
  Stethoscope, 
  Building2, 
  Eye, 
  EyeOff,
  ArrowLeft,
  CheckCircle,
  Globe,
  Phone,
  MapPin,
  Calendar,
  UserCheck,
  Shield,
  FileText
} from 'lucide-react';

interface AuthSystemProps {
  onLogin: (userType: string, userData: any) => void;
  onBack: () => void;
}

export function AuthSystem({ onLogin, onBack }: AuthSystemProps) {
  const [authMode, setAuthMode] = useState<'select' | 'login' | 'register'>('select');
  const [userType, setUserType] = useState<'worker' | 'doctor' | 'hospital' | ''>('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [workerData, setWorkerData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    gender: '',
    bloodGroup: '',
    aadharNumber: '',
    currentState: '',
    currentDistrict: '',
    homeState: '',
    homeDistrict: '',
    workSector: '',
    emergencyContact: '',
    preferredLanguage: 'en'
  });

  const [doctorData, setDoctorData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    medicalLicense: '',
    specialization: '',
    experience: '',
    qualification: '',
    hospitalAffiliation: '',
    registrationNumber: '',
    workingHours: '',
    consultationFee: '',
    languages: []
  });

  const [hospitalData, setHospitalData] = useState({
    hospitalName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    registrationNumber: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    hospitalType: '',
    bedCapacity: '',
    departments: [],
    emergencyServices: false,
    accreditation: '',
    adminName: '',
    adminDesignation: ''
  });

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
    { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' }
  ];

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const workSectors = ['Construction', 'Manufacturing', 'Agriculture', 'Domestic Work', 'Transportation', 'Retail', 'Other'];
  const specializations = ['General Medicine', 'Cardiology', 'Neurology', 'Orthopedics', 'Gynecology', 'Pediatrics', 'Dermatology', 'Psychiatry', 'Emergency Medicine'];
  const hospitalTypes = ['Government', 'Private', 'Trust/NGO', 'Corporate'];
  const departments = ['Emergency', 'General Medicine', 'Surgery', 'Cardiology', 'Neurology', 'Orthopedics', 'Gynecology', 'Pediatrics', 'Radiology', 'Laboratory'];

  const handleLogin = () => {
    // Mock login - in real app, this would validate credentials
    const userData = {
      email: loginData.email,
      userType: userType,
      name: userType === 'worker' ? 'Rajesh Kumar' : userType === 'doctor' ? 'Dr. Priya Sharma' : 'City General Hospital'
    };
    onLogin(userType, userData);
  };

  const handleRegister = () => {
    let userData;
    
    if (userType === 'worker') {
      userData = {
        ...workerData,
        userType: 'worker',
        healthId: `MHC${Math.random().toString().slice(2, 8)}`
      };
    } else if (userType === 'doctor') {
      userData = {
        ...doctorData,
        userType: 'doctor',
        doctorId: `DOC${Math.random().toString().slice(2, 8)}`
      };
    } else {
      userData = {
        ...hospitalData,
        userType: 'hospital',
        hospitalId: `HSP${Math.random().toString().slice(2, 8)}`
      };
    }
    
    onLogin(userType, userData);
  };

  if (authMode === 'select') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="absolute top-6 left-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Migrant HealthConnect</h1>
            <p className="text-lg text-gray-600">Choose your role to continue</p>
          </div>

          {/* User Type Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Migrant Worker */}
            <Card className="p-6 cursor-pointer group hover:shadow-xl transition-all border-2 hover:border-blue-500">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Migrant Worker</h3>
                <p className="text-gray-600 mb-4">Access your health records, book consultations, and manage your healthcare</p>
                <div className="space-y-2 text-sm text-gray-500 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Digital Health ID</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Multilingual Support</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Telemedicine Access</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => {
                    setUserType('worker');
                    setAuthMode('login');
                  }}
                >
                  Continue as Worker
                </Button>
              </div>
            </Card>

            {/* Doctor */}
            <Card className="p-6 cursor-pointer group hover:shadow-xl transition-all border-2 hover:border-green-500">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Stethoscope className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Doctor</h3>
                <p className="text-gray-600 mb-4">Manage patient records, conduct consultations, and provide healthcare services</p>
                <div className="space-y-2 text-sm text-gray-500 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Patient Management</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Digital Prescriptions</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Analytics Dashboard</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => {
                    setUserType('doctor');
                    setAuthMode('login');
                  }}
                >
                  Continue as Doctor
                </Button>
              </div>
            </Card>

            {/* Hospital */}
            <Card className="p-6 cursor-pointer group hover:shadow-xl transition-all border-2 hover:border-purple-500">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <Building2 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Hospital</h3>
                <p className="text-gray-600 mb-4">Institutional access for healthcare facilities and administrative management</p>
                <div className="space-y-2 text-sm text-gray-500 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Institutional Dashboard</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Staff Management</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>System Integration</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={() => {
                    setUserType('hospital');
                    setAuthMode('login');
                  }}
                >
                  Continue as Hospital
                </Button>
              </div>
            </Card>
          </div>

          {/* Features */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-500" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-green-500" />
                <span>Multilingual Support</span>
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-purple-500" />
                <span>Verified Platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (authMode === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-6">
            <Button 
              variant="ghost" 
              onClick={() => setAuthMode('select')}
              className="absolute top-6 left-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            
            <div className="flex items-center justify-center mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                userType === 'worker' ? 'bg-blue-100' : 
                userType === 'doctor' ? 'bg-green-100' : 'bg-purple-100'
              }`}>
                {userType === 'worker' && <User className="w-6 h-6 text-blue-600" />}
                {userType === 'doctor' && <Stethoscope className="w-6 h-6 text-green-600" />}
                {userType === 'hospital' && <Building2 className="w-6 h-6 text-purple-600" />}
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-2">
              {userType === 'worker' ? 'Worker Login' : 
               userType === 'doctor' ? 'Doctor Login' : 'Hospital Login'}
            </h2>
            <p className="text-gray-600">Enter your credentials to continue</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                placeholder={`Enter your ${userType} email`}
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  placeholder="Enter your password"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm">Remember me</Label>
              </div>
              <Button variant="link" size="sm">
                Forgot password?
              </Button>
            </div>

            <Button 
              type="submit" 
              className={`w-full ${
                userType === 'worker' ? 'bg-blue-600 hover:bg-blue-700' : 
                userType === 'doctor' ? 'bg-green-600 hover:bg-green-700' : 
                'bg-purple-600 hover:bg-purple-700'
              }`}
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Button 
                variant="link" 
                size="sm" 
                onClick={() => setAuthMode('register')}
                className="p-0"
              >
                Register here
              </Button>
            </p>
          </div>
        </Card>
      </div>
    );
  }

  if (authMode === 'register') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <Button 
              variant="ghost" 
              onClick={() => setAuthMode('login')}
              className="absolute top-6 left-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Login
            </Button>
            
            <div className="flex items-center justify-center mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                userType === 'worker' ? 'bg-blue-100' : 
                userType === 'doctor' ? 'bg-green-100' : 'bg-purple-100'
              }`}>
                {userType === 'worker' && <User className="w-6 h-6 text-blue-600" />}
                {userType === 'doctor' && <Stethoscope className="w-6 h-6 text-green-600" />}
                {userType === 'hospital' && <Building2 className="w-6 h-6 text-purple-600" />}
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-2">
              {userType === 'worker' ? 'Register as Migrant Worker' : 
               userType === 'doctor' ? 'Register as Doctor' : 'Register Hospital'}
            </h2>
            <p className="text-gray-600">Create your account to get started</p>
          </div>

          <Card className="p-8">
            {userType === 'worker' && (
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={workerData.fullName}
                        onChange={(e) => setWorkerData({ ...workerData, fullName: e.target.value })}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={workerData.email}
                        onChange={(e) => setWorkerData({ ...workerData, email: e.target.value })}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={workerData.phone}
                        onChange={(e) => setWorkerData({ ...workerData, phone: e.target.value })}
                        placeholder="+91 9876543210"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={workerData.dateOfBirth}
                        onChange={(e) => setWorkerData({ ...workerData, dateOfBirth: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="gender">Gender *</Label>
                      <Select value={workerData.gender} onValueChange={(value) => setWorkerData({ ...workerData, gender: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="bloodGroup">Blood Group</Label>
                      <Select value={workerData.bloodGroup} onValueChange={(value) => setWorkerData({ ...workerData, bloodGroup: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select blood group" />
                        </SelectTrigger>
                        <SelectContent>
                          {bloodGroups.map(group => (
                            <SelectItem key={group} value={group}>{group}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="aadharNumber">Aadhar Number *</Label>
                      <Input
                        id="aadharNumber"
                        value={workerData.aadharNumber}
                        onChange={(e) => setWorkerData({ ...workerData, aadharNumber: e.target.value })}
                        placeholder="Enter your 12-digit Aadhar number"
                        maxLength={12}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Location Information */}
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Location Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="currentState">Current State *</Label>
                      <Input
                        id="currentState"
                        value={workerData.currentState}
                        onChange={(e) => setWorkerData({ ...workerData, currentState: e.target.value })}
                        placeholder="Where are you currently working?"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="currentDistrict">Current District *</Label>
                      <Input
                        id="currentDistrict"
                        value={workerData.currentDistrict}
                        onChange={(e) => setWorkerData({ ...workerData, currentDistrict: e.target.value })}
                        placeholder="Current district"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="homeState">Home State</Label>
                      <Input
                        id="homeState"
                        value={workerData.homeState}
                        onChange={(e) => setWorkerData({ ...workerData, homeState: e.target.value })}
                        placeholder="Your native state"
                      />
                    </div>
                    <div>
                      <Label htmlFor="homeDistrict">Home District</Label>
                      <Input
                        id="homeDistrict"
                        value={workerData.homeDistrict}
                        onChange={(e) => setWorkerData({ ...workerData, homeDistrict: e.target.value })}
                        placeholder="Your native district"
                      />
                    </div>
                  </div>
                </div>

                {/* Work Information */}
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Work Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="workSector">Work Sector *</Label>
                      <Select value={workerData.workSector} onValueChange={(value) => setWorkerData({ ...workerData, workSector: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your work sector" />
                        </SelectTrigger>
                        <SelectContent>
                          {workSectors.map(sector => (
                            <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="emergencyContact">Emergency Contact *</Label>
                      <Input
                        id="emergencyContact"
                        value={workerData.emergencyContact}
                        onChange={(e) => setWorkerData({ ...workerData, emergencyContact: e.target.value })}
                        placeholder="Emergency contact number"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredLanguage">Preferred Language</Label>
                      <Select value={workerData.preferredLanguage} onValueChange={(value) => setWorkerData({ ...workerData, preferredLanguage: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          {languages.map(lang => (
                            <SelectItem key={lang.code} value={lang.code}>
                              {lang.nativeName} ({lang.name})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Password */}
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Security
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="password">Password *</Label>
                      <Input
                        id="password"
                        type="password"
                        value={workerData.password}
                        onChange={(e) => setWorkerData({ ...workerData, password: e.target.value })}
                        placeholder="Create a strong password"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword">Confirm Password *</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={workerData.confirmPassword}
                        onChange={(e) => setWorkerData({ ...workerData, confirmPassword: e.target.value })}
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the Terms of Service and Privacy Policy
                  </Label>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Create Worker Account
                </Button>
              </form>
            )}

            {userType === 'doctor' && (
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={doctorData.fullName}
                        onChange={(e) => setDoctorData({ ...doctorData, fullName: e.target.value })}
                        placeholder="Dr. Full Name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={doctorData.email}
                        onChange={(e) => setDoctorData({ ...doctorData, email: e.target.value })}
                        placeholder="doctor@hospital.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={doctorData.phone}
                        onChange={(e) => setDoctorData({ ...doctorData, phone: e.target.value })}
                        placeholder="+91 9876543210"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="medicalLicense">Medical License Number *</Label>
                      <Input
                        id="medicalLicense"
                        value={doctorData.medicalLicense}
                        onChange={(e) => setDoctorData({ ...doctorData, medicalLicense: e.target.value })}
                        placeholder="Enter license number"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Professional Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="specialization">Specialization *</Label>
                      <Select value={doctorData.specialization} onValueChange={(value) => setDoctorData({ ...doctorData, specialization: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select specialization" />
                        </SelectTrigger>
                        <SelectContent>
                          {specializations.map(spec => (
                            <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="experience">Years of Experience *</Label>
                      <Input
                        id="experience"
                        type="number"
                        value={doctorData.experience}
                        onChange={(e) => setDoctorData({ ...doctorData, experience: e.target.value })}
                        placeholder="5"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="qualification">Highest Qualification *</Label>
                      <Input
                        id="qualification"
                        value={doctorData.qualification}
                        onChange={(e) => setDoctorData({ ...doctorData, qualification: e.target.value })}
                        placeholder="MBBS, MD, etc."
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="registrationNumber">Medical Registration Number *</Label>
                      <Input
                        id="registrationNumber"
                        value={doctorData.registrationNumber}
                        onChange={(e) => setDoctorData({ ...doctorData, registrationNumber: e.target.value })}
                        placeholder="Medical council registration"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="hospitalAffiliation">Hospital/Clinic Affiliation</Label>
                      <Input
                        id="hospitalAffiliation"
                        value={doctorData.hospitalAffiliation}
                        onChange={(e) => setDoctorData({ ...doctorData, hospitalAffiliation: e.target.value })}
                        placeholder="Current workplace"
                      />
                    </div>
                    <div>
                      <Label htmlFor="consultationFee">Consultation Fee (₹)</Label>
                      <Input
                        id="consultationFee"
                        type="number"
                        value={doctorData.consultationFee}
                        onChange={(e) => setDoctorData({ ...doctorData, consultationFee: e.target.value })}
                        placeholder="500"
                      />
                    </div>
                  </div>
                </div>

                {/* Security */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Security</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="password">Password *</Label>
                      <Input
                        id="password"
                        type="password"
                        value={doctorData.password}
                        onChange={(e) => setDoctorData({ ...doctorData, password: e.target.value })}
                        placeholder="Create a strong password"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword">Confirm Password *</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={doctorData.confirmPassword}
                        onChange={(e) => setDoctorData({ ...doctorData, confirmPassword: e.target.value })}
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the Terms of Service and Privacy Policy, and confirm that all provided information is accurate
                  </Label>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  Create Doctor Account
                </Button>
              </form>
            )}

            {userType === 'hospital' && (
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
                {/* Hospital Information */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Hospital Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="hospitalName">Hospital Name *</Label>
                      <Input
                        id="hospitalName"
                        value={hospitalData.hospitalName}
                        onChange={(e) => setHospitalData({ ...hospitalData, hospitalName: e.target.value })}
                        placeholder="Enter hospital name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Hospital Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={hospitalData.email}
                        onChange={(e) => setHospitalData({ ...hospitalData, email: e.target.value })}
                        placeholder="admin@hospital.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Hospital Phone *</Label>
                      <Input
                        id="phone"
                        value={hospitalData.phone}
                        onChange={(e) => setHospitalData({ ...hospitalData, phone: e.target.value })}
                        placeholder="+91 9876543210"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="registrationNumber">Hospital Registration Number *</Label>
                      <Input
                        id="registrationNumber"
                        value={hospitalData.registrationNumber}
                        onChange={(e) => setHospitalData({ ...hospitalData, registrationNumber: e.target.value })}
                        placeholder="Hospital registration number"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="hospitalType">Hospital Type *</Label>
                      <Select value={hospitalData.hospitalType} onValueChange={(value) => setHospitalData({ ...hospitalData, hospitalType: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select hospital type" />
                        </SelectTrigger>
                        <SelectContent>
                          {hospitalTypes.map(type => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Address Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Complete Address *</Label>
                      <Input
                        id="address"
                        value={hospitalData.address}
                        onChange={(e) => setHospitalData({ ...hospitalData, address: e.target.value })}
                        placeholder="Street address"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={hospitalData.city}
                        onChange={(e) => setHospitalData({ ...hospitalData, city: e.target.value })}
                        placeholder="City"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        value={hospitalData.state}
                        onChange={(e) => setHospitalData({ ...hospitalData, state: e.target.value })}
                        placeholder="State"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        value={hospitalData.pincode}
                        onChange={(e) => setHospitalData({ ...hospitalData, pincode: e.target.value })}
                        placeholder="123456"
                        maxLength={6}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="bedCapacity">Bed Capacity</Label>
                      <Input
                        id="bedCapacity"
                        type="number"
                        value={hospitalData.bedCapacity}
                        onChange={(e) => setHospitalData({ ...hospitalData, bedCapacity: e.target.value })}
                        placeholder="Total number of beds"
                      />
                    </div>
                  </div>
                </div>

                {/* Admin Information */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Administrator Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="adminName">Admin Name *</Label>
                      <Input
                        id="adminName"
                        value={hospitalData.adminName}
                        onChange={(e) => setHospitalData({ ...hospitalData, adminName: e.target.value })}
                        placeholder="System administrator name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="adminDesignation">Admin Designation *</Label>
                      <Input
                        id="adminDesignation"
                        value={hospitalData.adminDesignation}
                        onChange={(e) => setHospitalData({ ...hospitalData, adminDesignation: e.target.value })}
                        placeholder="Chief Medical Officer, IT Head, etc."
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Security */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Security</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="password">Password *</Label>
                      <Input
                        id="password"
                        type="password"
                        value={hospitalData.password}
                        onChange={(e) => setHospitalData({ ...hospitalData, password: e.target.value })}
                        placeholder="Create a strong password"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword">Confirm Password *</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={hospitalData.confirmPassword}
                        onChange={(e) => setHospitalData({ ...hospitalData, confirmPassword: e.target.value })}
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="emergencyServices" 
                      checked={hospitalData.emergencyServices}
                      onCheckedChange={(checked) => setHospitalData({ ...hospitalData, emergencyServices: checked as boolean })}
                    />
                    <Label htmlFor="emergencyServices" className="text-sm">
                      We provide 24/7 emergency services
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the Terms of Service and Privacy Policy, and confirm that all provided information is accurate
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                  Create Hospital Account
                </Button>
              </form>
            )}

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Button 
                  variant="link" 
                  size="sm" 
                  onClick={() => setAuthMode('login')}
                  className="p-0"
                >
                  Sign in here
                </Button>
              </p>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return null;
}