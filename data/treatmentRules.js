export const treatmentRules = {
  doctors: [
    {
      id: "hair_review_board",
      name: "Hair Restoration Medical Review Board",
      specialty: "Hair Restoration & Trichology",
      successRate: "98.5%",
      experience: "15+ Years",
      protocols: {
        hair_transplant: {
          firstWash: "Day 2",
          restPeriod: "3 Days",
          reason: "The Sapphire protocol requires early micro-circulation check to ensure graft survival under optimal clinical pathways."
        }
      }
    },
    {
      id: "plastic_review_board",
      name: "Plastic Surgery Medical Review Board",
      specialty: "Aesthetic & Reconstructive Surgery",
      successRate: "99.1%",
      experience: "12+ Years",
      protocols: {
        plastic_surgery: {
          recoveryStay: "7 Days",
          drainRemoval: "Day 4",
          reason: "Vertical vector repositioning requires extended initial stabilization for long-term symmetry under standardized clinical guidelines."
        }
      }
    },
    {
      id: "oncology_review_board",
      name: "Oncology Coordination Medical Review Board",
      specialty: "Oncology & Radiosurgery",
      successRate: "97.8%",
      experience: "25+ Years",
      protocols: {
        oncology: {
          simulationTime: "24 Hours",
          fractionInterval: "Daily",
          reason: "CyberKnife S7 protocols are optimized for biological effective dose (BED) maximization within our partner hospital network."
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
