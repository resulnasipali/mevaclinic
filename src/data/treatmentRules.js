export const treatmentRules = {
  doctors: [
    {
      id: "dr-harun",
      name: "Dr. Harun Alakaya",
      specialty: "Hair Restoration",
      successRate: "98.5%",
      experience: "15+ Years",
      protocols: {
        hair_transplant: {
          firstWash: "Day 2",
          restPeriod: "3 Days",
          reason: "Dr. Harun's Sapphire protocol requires early micro-circulation check to ensure graft survival."
        }
      }
    },
    {
      id: "dr-ayse",
      name: "Dr. Ayşe Kaya",
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
      name: "Prof. Dr. Mehmet Yılmaz",
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
      id: "hosp-acibadem",
      name: "Acibadem Altunizade",
      distanceIST: "45 mins",
      distanceSAW: "35 mins",
      tech: "CyberKnife S7, Da Vinci Xi",
      amenities: ["VIP Suite", "Translators", "Gourmet Menu"]
    },
    {
      id: "hosp-memorial",
      name: "Memorial Bahçelievler",
      distanceIST: "20 mins",
      distanceSAW: "55 mins",
      tech: "Gamma Knife Icon",
      amenities: ["Green Building", "Art Gallery", "Family Rooms"]
    }
  ]
};
