// InsuranceModal.jsx

import React from 'react';

const InsuranceModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-xl relative">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">Insurance Information</h3>
        <p className="text-gray-800 text-justify text-sm sm:text-base">
          Generally, goods are not automatically insured by hauliers and warehouses.
          Although warehouses and hauliers have their own policies, these are subject to cover under their trading terms and conditions,
          these may not cover the full value of your goods. PHL recommends that customers insure their goods.
          PHL can advise on the correct insurance required and arrange insurance through our dedicated brokers.
          Alternatively, you may arrange cover through your own broker.
        </p>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default InsuranceModal;
