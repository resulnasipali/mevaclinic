import { useState, useEffect } from 'react';
import treatmentsData from '../data/treatments.json';

export const usePopularTreatments = () => {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    // Read from local storage
    const popularityStats = JSON.parse(localStorage.getItem('treatment_clicks') || '{}');
    
    // Sort array based on stats (highest clicks first)
    const sorted = [...treatmentsData].sort((a, b) => {
      const scoreA = popularityStats[a.id] || 0;
      const scoreB = popularityStats[b.id] || 0;
      return scoreB - scoreA;
    });

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTreatments(sorted);
  }, []);

  const trackClick = (id) => {
    const popularityStats = JSON.parse(localStorage.getItem('treatment_clicks') || '{}');
    popularityStats[id] = (popularityStats[id] || 0) + 1;
    localStorage.setItem('treatment_clicks', JSON.stringify(popularityStats));
    
    // Re-sort silently
    const sorted = [...treatments].sort((a, b) => {
      const scoreA = popularityStats[a.id] || 0;
      const scoreB = popularityStats[b.id] || 0;
      return scoreB - scoreA;
    });
    setTreatments(sorted);
  };

  return { treatments, trackClick };
};
