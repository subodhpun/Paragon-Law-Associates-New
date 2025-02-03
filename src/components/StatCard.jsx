import React from 'react';

const StatCard = ({ title, value, trend, icon, urgent = false }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${urgent ? 'border border-red-500' : ''}`}> 
      <div className="flex items-center">
        <div className="mr-4 text-2xl text-gray-500">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-xl font-bold text-gray-800">{value}</p>
          <p className={`text-sm ${trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{trend}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
