// src/Components/GoogleMap.jsx
import React from "react";

const GoogleMap = () => {
  return (
    <div className="w-full lg:w-2/3">
      <iframe
        className="w-full h-[100%] min-h-[400px] rounded-lg shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.8013972098355!2d0.10829301589242607!3d51.49520157963064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a81dc4d3a4a1%3A0x7b1c4b3a9d5b2234!2sPurland%20House%2C%2050%20Purland%20Rd%2C%20London%20SE28%200AT%2C%20UK!5e0!3m2!1sen!2sin!4v1683909402014!5m2!1sen!2sin"
        frameBorder="0"
        allowFullScreen
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
      <div className="mt-4 text-center">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=50+Purland+Rd,+London+SE28+0AT,+UK"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-700 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded transition"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default GoogleMap;
