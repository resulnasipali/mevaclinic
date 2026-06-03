'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface LeadContextProps {
  bmiData: any;
  setBmiData: (data: any) => void;
  selectedTreatment: string;
  setSelectedTreatment: (t: string) => void;
}

const LeadContext = createContext<LeadContextProps | undefined>(undefined);

export const LeadProvider = ({ children }: { children: ReactNode }) => {
  const [bmiData, setBmiData] = useState<any>(null);
  const [selectedTreatment, setSelectedTreatment] = useState<string>('');

  return (
    <LeadContext.Provider
      value={{ bmiData, setBmiData, selectedTreatment, setSelectedTreatment }}
    >
      {children}
    </LeadContext.Provider>
  );
};

export const useLeadContext = () => {
  const ctx = useContext(LeadContext);
  if (!ctx) throw new Error('useLeadContext must be used within LeadProvider');
  return ctx;
};
