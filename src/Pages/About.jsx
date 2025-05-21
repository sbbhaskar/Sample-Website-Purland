import React from 'react';
import Slidetwo from '../assets/slideTwo.png'; // Adjust the path as necessary


const About = () => {
  return (
    <div className="pt-24 pb-16 px-6 md:px-20 lg:px-32 bg-white text-gray-800">
      {/* Corrected line: Use the imported variable 'Slidetwo' */}
      <img
        src={Slidetwo} // <-- Change this from "./src/assets/slideTwo.png"
        alt="Warehouse and logistics"
        className="w-full h-[250px] object-cover rounded-xl shadow-md"
      /><br></br>

      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-700 mb-8">
        About Purland House Ltd
      </h2>

      <div className="text-base md:text-lg leading-relaxed space-y-6 text-justify">
        <p>
          <span className="font-semibold">Purland House Ltd (PHL)</span>, established in 2008, is an HMRC excise-approved facility located in South East London. Positioned with excellent access to road, rail, and sea networks, PHL enjoys strategic proximity to the UK’s major southern ports — making it an ideal hub for streamlined logistics and international trade.
        </p>

        <p>
          With a core focus on “wet” goods — including beers, wines, spirits, and soft drinks — PHL expertly receives, stores, and distributes a diverse range of commodities. Beyond alcoholic beverages, the company also manages storage and delivery for a wide array of other goods with equal proficiency.
        </p>

        <p>
          Over the years, PHL has built a strong reputation for <span className="italic font-medium">unparalleled customer service</span> and tailor-made logistics solutions. Clients trust PHL for their adaptability, discretion, and precision.
        </p>

        <p>
          Our suite of services includes:
          <ul className="list-disc list-inside mt-2 ml-2 md:ml-6 text-gray-700">
            <li>UK and Global Distribution</li>
            <li>Excise Warehousing</li>
            <li>Escrow Facility Management</li>
            <li>Flexible, Ad-Hoc Logistics Solutions</li>
          </ul>
        </p>

        <p className="font-medium text-center text-indigo-600 mt-10">
          At PHL, logistics isn’t just a service — it’s a commitment to excellence.
        </p>
      </div>
    </div>
  );
};

export default About;

// const About = () => {
//   return (
//     <div className="pt-24 pb-16 px-6 md:px-20 lg:px-32 bg-white text-gray-800">
//       <img 
//   src="./src/assets/slideTwo.png"
//   alt="Warehouse and logistics"
//   className="w-full h-[250px] object-cover rounded-xl shadow-md"
// /><br></br>

//       <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-700 mb-8">
//         About Purland House Ltd
//       </h2>

//       <div className="text-base md:text-lg leading-relaxed space-y-6 text-justify">
//         <p>
//           <span className="font-semibold">Purland House Ltd (PHL)</span>, established in 2008, is an HMRC excise-approved facility located in South East London. Positioned with excellent access to road, rail, and sea networks, PHL enjoys strategic proximity to the UK’s major southern ports — making it an ideal hub for streamlined logistics and international trade.
//         </p>

//         <p>
//           With a core focus on “wet” goods — including beers, wines, spirits, and soft drinks — PHL expertly receives, stores, and distributes a diverse range of commodities. Beyond alcoholic beverages, the company also manages storage and delivery for a wide array of other goods with equal proficiency.
//         </p>

//         <p>
//           Over the years, PHL has built a strong reputation for <span className="italic font-medium">unparalleled customer service</span> and tailor-made logistics solutions. Clients trust PHL for their adaptability, discretion, and precision.
//         </p>

//         <p>
//           Our suite of services includes:
//           <ul className="list-disc list-inside mt-2 ml-2 md:ml-6 text-gray-700">
//             <li>UK and Global Distribution</li>
//             <li>Excise Warehousing</li>
//             <li>Escrow Facility Management</li>
//             <li>Flexible, Ad-Hoc Logistics Solutions</li>
//           </ul>
//         </p>

//         <p className="font-medium text-center text-indigo-600 mt-10">
//           At PHL, logistics isn’t just a service — it’s a commitment to excellence.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;
