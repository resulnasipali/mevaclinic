import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = ({ isEn = false, items = [] }) => {
  return (
    <nav className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 overflow-x-auto whitespace-nowrap pb-2">
      <Link to={isEn ? "/en" : "/ro"} className="hover:text-prime transition-colors flex items-center gap-1.5 shrink-0">
        <Home size={14} className="text-accent" />
        {isEn ? "Home" : "Acasă"}
      </Link>
      
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight size={12} className="text-gray-300 shrink-0" />
          {item.path ? (
            <Link to={item.path} className="hover:text-prime transition-colors shrink-0">
              {item.label}
            </Link>
          ) : (
            <span className="text-prime shrink-0">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
