import { useState } from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './ui/alert-dialog';
import { Shield, User, FileText } from 'lucide-react';

interface ConsentPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onAllow: () => void;
  onDeny: () => void;
  doctorName: string;
  hospitalName: string;
  accessType: string;
  patientName: string;
}

export function ConsentPopup({ 
  isOpen, 
  onClose, 
  onAllow, 
  onDeny, 
  doctorName, 
  hospitalName, 
  accessType,
  patientName 
}: ConsentPopupProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
            <div>
              <AlertDialogTitle>Medical Data Access Request</AlertDialogTitle>
              <AlertDialogDescription className="text-sm text-gray-600">
                Data access consent required
              </AlertDialogDescription>
            </div>
          </div>
        </AlertDialogHeader>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-3 mb-3">
              <User className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Dr. {doctorName}</p>
                <p className="text-sm text-gray-600">{hospitalName}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-gray-700">Requesting access to: {accessType}</span>
            </div>
          </div>
          
          <div className="text-sm text-gray-600 space-y-2">
            <p><strong>Patient:</strong> {patientName}</p>
            <p><strong>Purpose:</strong> Medical consultation and treatment</p>
            <p><strong>Duration:</strong> Current consultation session only</p>
          </div>
          
          <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
            <p className="text-xs text-yellow-800">
              <strong>Privacy Notice:</strong> Your medical data will only be used for treatment purposes. You can revoke access at any time.
            </p>
          </div>
        </div>
        
        <AlertDialogFooter className="flex space-x-3">
          <AlertDialogCancel 
            onClick={onDeny}
            className="bg-red-100 text-red-700 hover:bg-red-200 border-red-300"
          >
            Deny Access
          </AlertDialogCancel>
          <AlertDialogAction 
            onClick={onAllow}
            className="bg-green-600 text-white hover:bg-green-700"
          >
            Allow Access
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}