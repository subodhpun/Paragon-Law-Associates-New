import React from 'react';

const TextArea = ({ label, value, onChange, error, helperText, rows = 4, className = '' }) => {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea
        value={value}
        onChange={onChange}
        rows={rows}
        className={`mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24] ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
      {helperText && <p className="mt-1 text-gray-500 text-sm">{helperText}</p>}
    </div>
  );
};

export default TextArea;
