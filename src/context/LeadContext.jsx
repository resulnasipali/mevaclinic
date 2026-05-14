import React, { createContext, useState, useContext } from 'react';

const LeadContext = createContext();

export const LeadProvider = ({ children }) => {
  const [bmiData, setBmiData] = useState(null); 
  const [selectedTreatment, setSelectedTreatment] = useState("");

  return (
    <LeadContext.Provider value={{ bmiData, setBmiData, selectedTreatment, setSelectedTreatment }}>
      {children}
    </LeadContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLeadContext = () => useContext(LeadContext);
