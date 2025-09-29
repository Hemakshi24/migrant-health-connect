import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Switch } from './ui/switch';
import { ConsentPopup } from './consent-popup';
import { QRHealthCard } from './qr-health-card';
import { 
  Search, 
  QrCode, 
  User, 
  FileText, 
  Upload, 
  Activity, 
  Users, 
  Calendar,
  Pill,
  TestTube,
  Shield,
  BarChart3,
  Save,
  Eye,
  Download
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export function DoctorDashboard() {
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [showConsent, setShowConsent] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentView, setCurrentView] = useState('dashboard');

  const diseaseData = [
    { name: 'Respiratory', value: 35, color: '#007BFF' },
    { name: 'Digestive', value: 25, color: '#28A745' },
    { name: 'Infectious', value: 20, color: '#FFC107' },
    { name: 'Cardiovascular', value: 15, color: '#DC3545' },
    { name: 'Others', value: 5, color: '#6C757D' }
  ];

  const monthlyPatients = [
    { month: 'Jan', patients: 45 },
    { month: 'Feb', patients: 52 },
    { month: 'Mar', patients: 48 },
    { month: 'Apr', patients: 61 },
    { month: 'May', patients: 55 },
    { month: 'Jun', patients: 67 }
  ];

  const recentPatients = [
    {
      id: '1',
      name: 'Rajesh Kumar',
      healthId: 'MHC001234',
      age: 28,
      condition: 'Fever, Cough',
      lastVisit: '2024-03-15',
      status: 'Active',
      phone: '+91-9876543210',
      dateOfBirth: '1996-05-15',
      bloodGroup: 'B+'
    },
    {
      id: '2',
      name: 'Priya Sharma',
      healthId: 'MHC001235',
      age: 24,
      condition: 'Vaccination',
      lastVisit: '2024-03-14',
      status: 'Completed',
      phone: '+91-9876543211',
      dateOfBirth: '2000-08-22',
      bloodGroup: 'O+'
    },
    {
      id: '3',
      name: 'Mohammed Ali',
      healthId: 'MHC001236',
      age: 32,
      condition: 'Chest Pain',
      lastVisit: '2024-03-13',
      status: 'Follow-up',
      phone: '+91-9876543212',
      dateOfBirth: '1992-12-03',
      bloodGroup: 'A+'
    }
  ];

  const handlePatientSelect = (patient: any) => {
    setSelectedPatient(patient);
    setShowConsent(true);
  };

  const handleConsentAllow = () => {
    setShowConsent(false);
    setCurrentView('patient-profile');
  };

  if (currentView === 'patient-profile' && selectedPatient) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => setCurrentView('dashboard')}>
              ← Back to Dashboard
            </Button>
            <h1 className="text-xl font-semibold">Patient Profile</h1>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Patient Info Sidebar */}
          <div className="w-80 bg-white border-r border-gray-200 p-6">
            <QRHealthCard
              name={selectedPatient.name}
              healthId={selectedPatient.healthId}
              emergencyContact={selectedPatient.phone}
              dateOfBirth={selectedPatient.dateOfBirth}
              bloodGroup={selectedPatient.bloodGroup}
            />
            
            <div className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Current Condition</label>
                <p className="text-sm text-gray-900">{selectedPatient.condition}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Last Visit</label>
                <p className="text-sm text-gray-900">{selectedPatient.lastVisit}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Status</label>
                <Badge className={selectedPatient.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}>
                  {selectedPatient.status}
                </Badge>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            <Tabs defaultValue="history" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="history">Medical History</TabsTrigger>
                <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
                <TabsTrigger value="reports">Lab Reports</TabsTrigger>
                <TabsTrigger value="vaccinations">Vaccinations</TabsTrigger>
              </TabsList>

              <TabsContent value="history" className="space-y-4 mt-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Recent Consultations</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-medium">March 15, 2024 - General Consultation</p>
                      <p className="text-sm text-gray-600">Chief complaint: Fever and cough for 3 days</p>
                      <p className="text-sm text-gray-600">Diagnosis: Upper respiratory tract infection</p>
                      <p className="text-sm text-gray-600">Treatment: Prescribed antibiotics and rest</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="font-medium">February 28, 2024 - Follow-up</p>
                      <p className="text-sm text-gray-600">Patient recovered completely from previous illness</p>
                      <p className="text-sm text-gray-600">Vitals: Normal</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="prescriptions" className="space-y-4 mt-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Current Prescriptions</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium">Amoxicillin 500mg</p>
                        <p className="text-sm text-gray-600">3 times daily, after meals</p>
                        <p className="text-xs text-gray-500">Prescribed: March 15, 2024</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium">Paracetamol 650mg</p>
                        <p className="text-sm text-gray-600">As needed for fever</p>
                        <p className="text-xs text-gray-500">Prescribed: March 15, 2024</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="reports" className="space-y-4 mt-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Laboratory Reports</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <TestTube className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-medium">Complete Blood Count</p>
                          <p className="text-sm text-gray-600">March 14, 2024</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <TestTube className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="font-medium">X-Ray Chest</p>
                          <p className="text-sm text-gray-600">March 13, 2024</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="vaccinations" className="space-y-4 mt-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Vaccination Records</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="font-medium">COVID-19 Vaccine (Dose 2)</p>
                          <p className="text-sm text-gray-600">February 20, 2024</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Complete</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-medium">Tetanus</p>
                          <p className="text-sm text-gray-600">January 15, 2024</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Complete</Badge>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'add-record') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => setCurrentView('dashboard')}>
              ← Back to Dashboard
            </Button>
            <h1 className="text-xl font-semibold">Add Medical Record</h1>
            <div></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-6">
          <Card className="p-6">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Patient Health ID</label>
                  <Input placeholder="Enter or scan health ID" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Record Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select record type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="prescription">Prescription</SelectItem>
                      <SelectItem value="lab-report">Lab Report</SelectItem>
                      <SelectItem value="vaccination">Vaccination</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Chief Complaint</label>
                <Textarea placeholder="Describe the patient's main concern..." />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Diagnosis</label>
                <Textarea placeholder="Primary and secondary diagnoses..." />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Treatment Plan</label>
                <Textarea placeholder="Prescribed medications, procedures, follow-up..." />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Upload Files</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">PDF, JPG, PNG up to 10MB</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="consent" />
                <label htmlFor="consent" className="text-sm">
                  Patient has provided consent for data storage and sharing
                </label>
              </div>

              <div className="flex justify-end space-x-4">
                <Button variant="outline">Save as Draft</Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Save className="w-4 h-4 mr-2" />
                  Save Record
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="flex">
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <h2 className="text-xl font-bold text-blue-600">Doctor Portal</h2>
          </div>
          <nav className="space-y-2 px-4">
            <Button 
              variant={currentView === 'dashboard' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setCurrentView('dashboard')}
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="w-4 h-4 mr-2" />
              Patients
            </Button>
            <Button 
              variant={currentView === 'add-record' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setCurrentView('add-record')}
            >
              <FileText className="w-4 h-4 mr-2" />
              Add Records
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Activity className="w-4 h-4 mr-2" />
              Reports
            </Button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold">Doctor Dashboard</h1>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input 
                    placeholder="Search patients..." 
                    className="pl-10 w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline">
                  <QrCode className="w-4 h-4 mr-2" />
                  Scan QR
                </Button>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Patients</p>
                    <p className="text-2xl font-bold">328</p>
                  </div>
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">This Month</p>
                    <p className="text-2xl font-bold">67</p>
                  </div>
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Cases</p>
                    <p className="text-2xl font-bold">23</p>
                  </div>
                  <Activity className="w-8 h-8 text-orange-600" />
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Follow-ups</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <FileText className="w-8 h-8 text-purple-600" />
                </div>
              </Card>
            </div>

            {/* Charts and Recent Patients */}
            <div className="grid grid-cols-3 gap-6">
              {/* Disease Distribution Chart */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Disease Distribution</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={diseaseData}
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      dataKey="value"
                    >
                      {diseaseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {diseaseData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span>{item.name}</span>
                      </div>
                      <span>{item.value}%</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Monthly Patients Chart */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Monthly Patients</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={monthlyPatients}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="patients" fill="#007BFF" />
                  </BarChart>
                </ResponsiveContainer>
              </Card>

              {/* Recent Patients */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Recent Patients</h3>
                <div className="space-y-3">
                  {recentPatients.map((patient) => (
                    <div 
                      key={patient.id} 
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
                      onClick={() => handlePatientSelect(patient)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{patient.name}</p>
                          <p className="text-xs text-gray-600">{patient.condition}</p>
                        </div>
                      </div>
                      <Badge 
                        className={
                          patient.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : patient.status === 'Follow-up'
                            ? 'bg-orange-100 text-orange-800'
                            : 'bg-blue-100 text-blue-800'
                        }
                      >
                        {patient.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Consent Popup */}
      <ConsentPopup
        isOpen={showConsent}
        onClose={() => setShowConsent(false)}
        onAllow={handleConsentAllow}
        onDeny={() => setShowConsent(false)}
        doctorName="Priya Sharma"
        hospitalName="City General Hospital"
        accessType="Complete Medical Records"
        patientName={selectedPatient?.name || ''}
      />
    </div>
  );
}