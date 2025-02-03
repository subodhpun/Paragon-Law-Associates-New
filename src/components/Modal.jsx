import React from 'react';

const Modal = ({ title, onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-lg p-6 z-10">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>✖</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
