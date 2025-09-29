import { QrCode, Phone, Calendar, User } from 'lucide-react';
import { Card } from './ui/card';

interface QRHealthCardProps {
  name: string;
  healthId: string;
  emergencyContact: string;
  dateOfBirth: string;
  bloodGroup?: string;
  photo?: string;
  printable?: boolean;
}

export function QRHealthCard({ 
  name, 
  healthId, 
  emergencyContact, 
  dateOfBirth, 
  bloodGroup = "O+",
  photo,
  printable = false 
}: QRHealthCardProps) {
  return (
    <Card className={`${printable ? 'w-96 h-60' : 'w-full max-w-sm'} p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-shadow duration-300`}>
      <div className="flex flex-col space-y-3 sm:space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {photo ? (
              <img src={photo} alt={name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-blue-300 shadow-md" />
            ) : (
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center shadow-md">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
            )}
            <div>
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{name}</h3>
              <p className="text-xs sm:text-sm text-gray-600">ID: {healthId}</p>
            </div>
          </div>
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-lg flex items-center justify-center border-2 border-gray-200 shadow-md">
            <QrCode className="w-10 h-10 sm:w-12 sm:h-12 text-gray-800" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span className="text-gray-700 text-xs sm:text-sm">DOB: {dateOfBirth}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-red-500 shadow-sm"></div>
            <span className="text-gray-700 text-xs sm:text-sm font-medium">{bloodGroup}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 pt-2 border-t border-gray-200">
          <Phone className="w-4 h-4 text-green-600" />
          <span className="text-xs sm:text-sm text-gray-700">Emergency: {emergencyContact}</span>
        </div>
        
        <div className="text-center pt-2">
          <p className="text-xs font-medium text-gray-600">Migrant HealthConnect</p>
          <p className="text-xs text-gray-500">Scan QR for medical records</p>
        </div>
      </div>
    </Card>
  );
}