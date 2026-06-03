'use client';

import React, { createContext, useState, useContext } from 'react';

const LeadContext = createContext(undefined);

export const LeadProvider = ({ children }) => {
  const [bmiData, setBmiData] = useState(null); 
  const [selectedTreatment, setSelectedTreatment] = useState("");

  return (
    <LeadContext.Provider value={{ bmiData, setBmiData, selectedTreatment, setSelectedTreatment }}>
      {children}
    </LeadContext.Provider>
  );
};

export const useLeadContext = () => {
  const ctx = useContext(LeadContext);
  if (ctx === undefined) {
    // Graceful fallback — return no-op setters so components don't crash 
    // if rendered outside the provider during SSR or testing
    return {
      bmiData: null,
      setBmiData: () => {},
      selectedTreatment: '',
      setSelectedTreatment: () => {},
    };
  }
  return ctx;
};
