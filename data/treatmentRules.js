export const treatmentRules = {
  doctors: [
    {
      id: "dr-harun",
      name: "MD Harun A.",
      specialty: "Hair Restoration",
      successRate: "98.5%",
      experience: "15+ Years",
      protocols: {
        hair_transplant: {
          firstWash: "Day 2",
          restPeriod: "3 Days",
          reason: "MD Harun A.'s Sapphire protocol requires early micro-circulation check to ensure graft survival."
        }
      }
    },
    {
      id: "dr-ayse",
      name: "Dr. Ayşe K.",
      specialty: "Plastic Surgery",
      successRate: "99.1%",
      experience: "12+ Years",
      protocols: {
        plastic_surgery: {
          recoveryStay: "7 Days",
          drainRemoval: "Day 4",
          reason: "Vertical vector repositioning requires extended initial stabilization for long-term symmetry."
        }
      }
    },
    {
      id: "prof-mehmet",
      name: "Prof. Dr. Mehmet Y.",
      specialty: "Oncology",
      successRate: "97.8%",
      experience: "25+ Years",
      protocols: {
        oncology: {
          simulationTime: "24 Hours",
          fractionInterval: "Daily",
          reason: "S7 CyberKnife protocols are optimized for biological effective dose (BED) maximization."
        }
      }
    }
  ],
  hospitals: [
    {
      id: "hosp-altunizade",
      name: "Altunizade Partner Hospital",
      distanceIST: "45 mins",
      distanceSAW: "35 mins",
      tech: "CyberKnife S7, Da Vinci Xi",
      amenities: ["VIP Suite", "Translators", "Gourmet Menu"]
    },
    {
      id: "hosp-bahcelievler",
      name: "Bahçelievler Partner Hospital",
      distanceIST: "20 mins",
      distanceSAW: "55 mins",
      tech: "Gamma Knife Icon",
      amenities: ["Green Building", "Art Gallery", "Family Rooms"]
    }
  ]
};
