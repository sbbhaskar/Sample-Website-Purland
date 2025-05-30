import React from 'react';
import Slidetwo from '../assets/slidetwo.png'; // This import is correct and crucial

const About = () => {
  return (
    <div className="pt-24 pb-16 px-6 md:px-20 lg:px-32 bg-white text-gray-800">
      <img
        src={Slidetwo}
        alt="Warehouse and logistics"
        className="w-full h-[250px] object-cover rounded-xl shadow-md"
      /><br></br>

      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-700 mb-8">
        About Code Trunk LLP
      </h2>

      <div className="text-base md:text-lg leading-relaxed space-y-6 text-justify">
          <p>
            <span className="font-semibold">Code Trunk LLP</span>, Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus et deserunt cumque tempore optio magnam, tempora consequuntur natus facere ipsa ad assumenda blanditiis, repudiandae minima a qui commodi aut porro temporibus ab reiciendis. Deserunt praesentium facere cumque obcaecati dolores a officia rerum consequuntur enim.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis esse quos unde quibusdam ducimus, culpa cum repudiandae? Cum ipsum itaque reiciendis sit cupiditate nam repellat, libero odio, ratione voluptate at? Velit odio voluptatem esse exercitationem quas et ducimus optio ea fuga, pariatur, veritatis itaque quia!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum quod similique! Velit, mollitia, est voluptas ab explicabo commodi, omnis deleniti eum voluptates ipsa porro illo molestias dolores soluta.
          </p>

          {/* --- FIX START --- */}
          {/* Close the paragraph before the ul */}
          <p>
            Our suite of services includes:
          </p>
          <ul className="list-disc list-inside mt-2 ml-2 md:ml-6 text-gray-700">
            <li>React.js</li>
            <li>MongoDB</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
          {/* --- FIX END --- */}

          <p className="font-medium text-center text-indigo-600 mt-10">
            At CT, isn’t just a service — it’s a commitment to excellence.
          </p>
      </div>
    </div>
  );
};

export default About;


// import React from 'react';
// import Slidetwo from '../assets/slidetwo.png'; // This import is correct and crucial

// const About = () => {
//   return (
//     <div className="pt-24 pb-16 px-6 md:px-20 lg:px-32 bg-white text-gray-800">
//       {/* This is the only line that needed modification for production.
//         We use the 'Slidetwo' variable (which holds the correct path 
//         after the build process) instead of a direct string path.
//       */}
//       <img
//         src={Slidetwo} // Changed from "./src/assets/slideTwo.png" to the imported variable
//         alt="Warehouse and logistics"
//         className="w-full h-[250px] object-cover rounded-xl shadow-md"
//       /><br></br>

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

// import React from 'react';
// import Slidetwo from '../assets/slidetwo.png'; // Adjust the path as necessary


// const About = () => {
//   return (
//     <div className="pt-24 pb-16 px-6 md:px-20 lg:px-32 bg-white text-gray-800">
//       {/* Corrected line: Use the imported variable 'Slidetwo' */}
//       <img
//         src={Slidetwo} // <-- Change this from "./src/assets/slideTwo.png"
//         alt="Warehouse and logistics"
//         className="w-full h-[250px] object-cover rounded-xl shadow-md"
//       /><br></br>

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
