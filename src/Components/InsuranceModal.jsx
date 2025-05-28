// InsuranceModal.jsx

import React from 'react';

const InsuranceModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-xl relative">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">Insurance Information</h3>
        <p className="text-gray-800 text-justify text-sm sm:text-base">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet quis debitis, rem vitae eligendi corporis, veniam exercitationem, dignissimos voluptatem deserunt cum odit qui in commodi. Eius eaque at repellat, adipisci vitae eligendi eveniet officia qui architecto mollitia sapiente reprehenderit vero voluptas. Similique incidunt excepturi nam obcaecati, inventore autem. Doloribus assumenda sit facilis suscipit harum, eos, quibusdam voluptatum, vel consequatur quos cumque expedita a tenetur? Reiciendis iusto suscipit magnam nihil!
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
