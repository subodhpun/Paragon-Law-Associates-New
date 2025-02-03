import React from 'react';

// Card Component
export const Card = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}> 
      {children}
    </div>
  );
};

// CardContent Component
export const CardContent = ({ children, className }) => {
  return (
    <div className={`p-6 ${className}`}>{children}</div>
  );
};
