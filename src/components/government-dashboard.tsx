import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  MapPin, 
  TrendingUp, 
  AlertTriangle, 
  Users, 
  Shield, 
  Activity,
  Download,
  FileSpreadsheet,
  FileText,
  BarChart3,
  PieChart,
  Globe
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';

export function GovernmentDashboard() {
  const [selectedState, setSelectedState] = useState('all');
  const [selectedDistrict, setSelectedDistrict] = useState('all');

  const diseaseData = [
    { month: 'Jan', respiratory: 145, infectious: 89, digestive: 76, cardiovascular: 45 },
    { month: 'Feb', respiratory: 132, infectious: 95, digestive: 82, cardiovascular: 52 },
    { month: 'Mar', respiratory: 158, infectious: 103, digestive: 68, cardiovascular: 48 },
    { month: 'Apr', respiratory: 167, infectious: 87, digestive: 91, cardiovascular: 56 },
    { month: 'May', respiratory: 142, infectious: 112, digestive: 85, cardiovascular: 42 },
    { month: 'Jun', respiratory: 139, infectious: 98, digestive: 79, cardiovascular: 49 }
  ];

  const vaccinationData = [
    { state: 'Delhi', coverage: 92, migrantPop: 45000 },
    { state: 'Maharashtra', coverage: 88, migrantPop: 125000 },
    { state: 'Karnataka', coverage: 85, migrantPop: 89000 },
    { state: 'Tamil Nadu', coverage: 90, migrantPop: 67000 },
    { state: 'Gujarat', coverage: 87, migrantPop: 98000 }
  ];

  const riskData = [
    { name: 'High Risk', value: 15, color: '#DC3545' },
    { name: 'Medium Risk', value: 35, color: '#FFC107' },
    { name: 'Low Risk', value: 50, color: '#28A745' }
  ];

  const outbreakAlerts = [
    {
      id: 1,
      location: 'Mumbai, Maharashtra',
      disease: 'Dengue Fever',
      severity: 'High',
      cases: 23,
      date: '2024-03-15',
      migrantWorkers: 15
    },
    {
      id: 2,
      location: 'Delhi NCR',
      disease: 'Respiratory Infection',
      severity: 'Medium',
      cases: 45,
      date: '2024-03-14',
      migrantWorkers: 28
    },
    {
      id: 3,
      location: 'Bangalore, Karnataka',
      disease: 'Food Poisoning',
      severity: 'Medium',
      cases: 12,
      date: '2024-03-13',
      migrantWorkers: 8
    }
  ];

  const migrantClusters = [
    { state: 'Maharashtra', districts: 12, workers: 125000, healthCoverage: 78 },
    { state: 'Gujarat', districts: 8, workers: 98000, healthCoverage: 82 },
    { state: 'Karnataka', districts: 10, workers: 89000, healthCoverage: 85 },
    { state: 'Tamil Nadu', districts: 9, workers: 67000, healthCoverage: 88 },
    { state: 'Delhi', districts: 5, workers: 45000, healthCoverage: 92 }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Globe className="w-8 h-8 text-blue-400" />
            <h1 className="text-2xl font-bold">Migrant Health Analytics Portal</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger className="w-40 bg-gray-700 border-gray-600 text-white">
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All States</SelectItem>
                <SelectItem value="maharashtra">Maharashtra</SelectItem>
                <SelectItem value="gujarat">Gujarat</SelectItem>
                <SelectItem value="karnataka">Karnataka</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
              <SelectTrigger className="w-40 bg-gray-700 border-gray-600 text-white">
                <SelectValue placeholder="Select District" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Districts</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="pune">Pune</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Main Panel */}
        <div className="flex-1 p-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Total Migrant Workers</p>
                  <p className="text-3xl font-bold text-white">424,000</p>
                  <p className="text-sm text-green-400">+12% from last month</p>
                </div>
                <Users className="w-10 h-10 text-blue-400" />
              </div>
            </Card>
            
            <Card className="p-6 bg-gray-800 border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Health Coverage</p>
                  <p className="text-3xl font-bold text-white">85%</p>
                  <p className="text-sm text-green-400">+5% from last month</p>
                </div>
                <Shield className="w-10 h-10 text-green-400" />
              </div>
            </Card>
            
            <Card className="p-6 bg-gray-800 border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Active Cases</p>
                  <p className="text-3xl font-bold text-white">1,247</p>
                  <p className="text-sm text-red-400">+23 from yesterday</p>
                </div>
                <Activity className="w-10 h-10 text-orange-400" />
              </div>
            </Card>
            
            <Card className="p-6 bg-gray-800 border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Vaccination Rate</p>
                  <p className="text-3xl font-bold text-white">88%</p>
                  <p className="text-sm text-green-400">+2% from last week</p>
                </div>
                <TrendingUp className="w-10 h-10 text-purple-400" />
              </div>
            </Card>
          </div>

          {/* India Heatmap and Disease Trends */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Heatmap */}
            <Card className="col-span-2 p-6 bg-gray-800 border-gray-700">
              <h3 className="text-lg font-semibold mb-4 text-white">Migrant Worker Distribution & Health Clusters</h3>
              <div className="h-80 bg-gray-700 rounded-lg relative overflow-hidden">
                {/* Simplified India Map Representation */}
                <div className="absolute inset-4 bg-gradient-to-br from-blue-900 to-green-900 rounded-lg">
                  <div className="relative h-full">
                    {/* Mumbai */}
                    <div className="absolute left-1/4 top-2/3 w-4 h-4 bg-red-500 rounded-full animate-pulse cursor-pointer" title="Mumbai - High Density">
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity">
                        Mumbai: 45K workers
                      </div>
                    </div>
                    {/* Delhi */}
                    <div className="absolute left-1/3 top-1/4 w-3 h-3 bg-yellow-500 rounded-full animate-pulse cursor-pointer" title="Delhi - Medium Density">
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity">
                        Delhi: 45K workers
                      </div>
                    </div>
                    {/* Bangalore */}
                    <div className="absolute left-1/2 top-3/4 w-3 h-3 bg-orange-500 rounded-full animate-pulse cursor-pointer" title="Bangalore - Medium Density">
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity">
                        Bangalore: 89K workers
                      </div>
                    </div>
                    {/* Gujarat */}
                    <div className="absolute left-1/5 top-1/2 w-4 h-4 bg-red-400 rounded-full animate-pulse cursor-pointer" title="Gujarat - High Density">
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity">
                        Gujarat: 98K workers
                      </div>
                    </div>
                    {/* Chennai */}
                    <div className="absolute right-1/4 bottom-1/4 w-3 h-3 bg-green-500 rounded-full animate-pulse cursor-pointer" title="Chennai - Low Risk">
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity">
                        Chennai: 67K workers
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-xs text-gray-300">High Risk Areas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-xs text-gray-300">Medium Risk Areas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-300">Low Risk Areas</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Disease Trends */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-lg font-semibold mb-4 text-white">Disease Trends (6 Months)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={diseaseData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                    labelStyle={{ color: '#F9FAFB' }}
                  />
                  <Line type="monotone" dataKey="respiratory" stroke="#3B82F6" strokeWidth={2} />
                  <Line type="monotone" dataKey="infectious" stroke="#EF4444" strokeWidth={2} />
                  <Line type="monotone" dataKey="digestive" stroke="#10B981" strokeWidth={2} />
                  <Line type="monotone" dataKey="cardiovascular" stroke="#F59E0B" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Vaccination Coverage */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-lg font-semibold mb-4 text-white">Vaccination Coverage by State</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={vaccinationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="state" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                    labelStyle={{ color: '#F9FAFB' }}
                  />
                  <Bar dataKey="coverage" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Risk Assessment */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-lg font-semibold mb-4 text-white">Risk Assessment Distribution</h3>
              <ResponsiveContainer width="100%" height={200}>
                <RechartsPieChart>
                  <Pie
                    data={riskData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                  >
                    {riskData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {riskData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-gray-300">{item.name}</span>
                    </div>
                    <span className="text-white">{item.value}%</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-gray-800 border-l border-gray-700 p-6">
          {/* AI Predictive Alerts */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
              AI Predictive Alerts
            </h3>
            <div className="space-y-3">
              {outbreakAlerts.map((alert) => (
                <Card key={alert.id} className={`p-4 border-l-4 ${
                  alert.severity === 'High' 
                    ? 'border-red-500 bg-red-900/20' 
                    : 'border-yellow-500 bg-yellow-900/20'
                } bg-gray-700`}>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={
                      alert.severity === 'High' 
                        ? 'bg-red-500 text-white' 
                        : 'bg-yellow-500 text-black'
                    }>
                      {alert.severity}
                    </Badge>
                    <span className="text-xs text-gray-400">{alert.date}</span>
                  </div>
                  <h4 className="font-medium text-white mb-1">{alert.disease}</h4>
                  <p className="text-sm text-gray-300 mb-2">{alert.location}</p>
                  <div className="text-xs text-gray-400 space-y-1">
                    <p>Total Cases: {alert.cases}</p>
                    <p>Migrant Workers: {alert.migrantWorkers}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Reports */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Reports</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start text-left border-gray-600 text-gray-300 hover:bg-gray-700">
                <FileSpreadsheet className="w-4 h-4 mr-2" />
                Export CSV Data
              </Button>
              <Button variant="outline" className="w-full justify-start text-left border-gray-600 text-gray-300 hover:bg-gray-700">
                <FileText className="w-4 h-4 mr-2" />
                Generate PDF Report
              </Button>
              <Button variant="outline" className="w-full justify-start text-left border-gray-600 text-gray-300 hover:bg-gray-700">
                <BarChart3 className="w-4 h-4 mr-2" />
                Vaccination Coverage
              </Button>
              <Button variant="outline" className="w-full justify-start text-left border-gray-600 text-gray-300 hover:bg-gray-700">
                <PieChart className="w-4 h-4 mr-2" />
                Disease Statistics
              </Button>
            </div>

            <div className="mt-6 p-4 bg-gray-700 rounded-lg">
              <h4 className="font-medium text-white mb-2">System Status</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Data Sync</span>
                  <Badge className="bg-green-500 text-white">Live</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">AI Analysis</span>
                  <Badge className="bg-green-500 text-white">Active</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Last Update</span>
                  <span className="text-gray-300">2 min ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}