import React from 'react'; // Added this import
import declaration from '../assets/declaration.png' // Imported the image

const Approvals = () => {
  return (
    <div>
      <div className="pt-24 pb-16 px-6 md:px-20 lg:px-32 bg-white text-gray-800">
        {/* Corrected line: Use the imported variable 'declaration' */}
        <img
          src={declaration} // Changed from "./src/assets/declaration.png" to the imported variable
          alt="Custom and Declaration"
          className="w-full h-[250px] object-cover rounded-xl shadow-md"
        /><br></br>

        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-700 mb-8">
          Excise Approval and Customs
        </h2>

        <div className="text-base md:text-lg leading-relaxed space-y-6 text-justify">
          <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, est sunt! Minus voluptates nesciunt veniam, quos libero laudantium odio repellat consequatur at quasi rem iure doloremque voluptatibus? Optio ad fugiat aliquid temporibus recusandae cumque omnis, quibusdam vero qui ipsum praesentium odio sequi voluptatem ipsa. Quos, reiciendis? Laboriosam, sunt doloribus?          </p>

          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse perspiciatis eos praesentium. Tempora eaque possimus dolorum reiciendis laudantium? Rem accusamus alias laboriosam ducimus ipsam ab animi, nihil deserunt at a ullam saepe culpa nobis, perferendis eum temporibus laborum debitis. Harum autem repellat debitis. In maiores fugiat omnis facere.
          </p>

          <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos maiores accusantium animi culpa, deleniti iste. Delectus quas cum deleniti vitae adipisci reprehenderit nam cupiditate labore natus vel eum aperiam error quos repellat iusto, dolor at tempora modi veniam. Beatae modi ab voluptatum?          </p>

          {/* --- FIX START: Corrected HTML nesting for <ul> --- */}
          {/* Close the paragraph before the ul */}
          <p>
Description here          </p>
          <ul className="list-disc list-inside mt-2 ml-2 md:ml-6 text-gray-700">
            <li><b>MERN Full Stack Developer</b></li>
            <li><b>MERN Full Stack Developer</b></li>
            <li><b>MERN Full Stack Developer</b></li>
            <li><b>MERN Full Stack Developer</b></li>
            <li><b>MERN Full Stack Developer</b></li>
            <li><b>MERN Full Stack Developer</b></li>
          </ul>
          {/* --- FIX END --- */}

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dicta nisi vitae in esse recusandae voluptatum, quasi omnis perspiciatis porro laborum dolores odit pariatur? Dolores excepturi, vel omnis id ipsum facilis itaque sed doloribus?.</p>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum nulla necessitatibus maxime dolorem, quae repellat illo cum! Reprehenderit commodi magnam deleniti, aliquam quidem delectus, eveniet explicabo expedita aliquid voluptas iusto.</p>

          <p><b>Description here, please contact us:</b></p>

          <p>
            📞 Tel: Numbers here
            <br></br>
            <a href="mailto:info@purlandhouse.com" className="text-blue-600 hover:underline">
              📧 Email: bhaskar.sb@outlook.com </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Approvals;


// const Approvals = () => {
//   return (
//     <div>

// <div className="pt-24 pb-16 px-6 md:px-20 lg:px-32 bg-white text-gray-800">
//       <img 
//   src="./src/assets/declaration.png"
//   alt="Custom and Declaration"
//   className="w-full h-[250px] object-cover rounded-xl shadow-md"
// /><br></br>

//       <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-700 mb-8">
//         Excise Approval and Customs
//       </h2>

//       <div className="text-base md:text-lg leading-relaxed space-y-6 text-justify">
//         <p>
// Excise warehousing enables registered traders to store dutiable goods—such as alcohol and other excise-liable commodities—within an HMRC-approved bonded facility without immediate payment of excise duty or VAT. This mechanism allows businesses to optimise cash flow, defer tax liabilities, and facilitate more efficient domestic and international trade operations.
//         </p>

//         <p> <span className="font-semibold">Purland House Ltd (PHL)</span> is a recognised specialist in wet bonded warehousing—covering Beers, Wines, and Spirits—and provides comprehensive logistics solutions to clients across the UK and globally..
//         </p>

//         <p>
// Our operations are managed by a dedicated team of professionals with in-depth knowledge of UK excise legislation, customs protocols, and bonded warehousing compliance. We ensure strict adherence to all HMRC regulations relating to the movement, storage, and handling of excise goods.
//         </p>

//         <p>
//           PHL offers an extensive range of value-added warehouse services, including but not limited to:
//           <ul className="list-disc list-inside mt-2 ml-2 md:ml-6 text-gray-700">
//             <li><b>	Reworking and relabelling of goods</b></li>
//             <li><b>	UK Duty Stamp application and obliteration (for spirit exports)</b></li>
//             <li><b> Destruction of excise goods (under HMRC supervision)</b></li>
//             <li><b>	Duty drawback claim processing</b></li>
//             <li><b>	Use of a valid UK Movement Guarantee</b></li>
//             <li><b>	Full Deferment Scheme support (duty payment deferral as required)</b></li>
//           </ul>
//         </p>

//         <p>Additionally, PHL employs a customs-trained team and is fully integrated with HMRC’s approved customs declaration systems. We facilitate end-to-end import/export documentation and support clients in fulfilling their global trading obligations with accuracy and efficiency.</p>

//         <p>At PHL, we recognise that every client’s operational requirements are unique. Our solutions can be tailored to align precisely with your specific trading model and the needs of your downstream partners.</p>

//         <p><b>To discuss your Excise Bonded Warehousing or customs clearance needs, please contact us:</b></p>

//         <p>
//           📞 Tel: +44 (0)20 8310 7999
//           <br></br>
//         <a href="mailto:info@purlandhouse.com" className="text-blue-600 hover:underline">
//         📧 Email: info@purlandhouse.com </a>
//         </p>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Approvals; // ✅ This line is mandatory
