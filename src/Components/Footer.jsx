import React from 'react';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-blue-900 to-purple-700 bg-opacity-90 backdrop-blur-md shadow-lg text-white">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 justify-items-center text-center w-full max-w-7xl">

          {/* Column 1: Logos */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[260px]">
              <img
                src="/BWA&UKWA.png" // Fix this image path if it's not in public/
                alt="UKWA and BWA Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Column 2: Menu */}
          <div className="flex flex-col items-center space-y-2 mt-8">
            <h4 className="font-bold mb-2">Main Menu</h4>
            <ul className="space-y-1">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/excise-approval" className="hover:underline">Excise Approval</Link></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li>
                {/* Keep <a> for external files/links that open in new tab */}
                <a href="/purland.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Terms and Conditions
                </a>
              </li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact (no changes needed here) */}
          <div className="flex flex-col items-center space-y-2 mt-8">
            <h4 className="font-bold mb-2">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2 justify-center text-center">
                <MapPin className="w-4 h-4 mt-1" />
                <span>
                  Purland House, 50 Purland Road,<br />
                  London, SE28 0AT
                </span>
              </li>
              <li className="flex items-center gap-2 justify-center">
                <Phone className="w-4 h-4" />
                <span>+44(0)2083107999</span>
              </li>
              <li className="flex items-center gap-2 justify-center">
                <Mail className="w-4 h-4" />
                <span>info@purlandhouse.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social (no changes needed here, as it's an external link) */}
          <div className="flex flex-col items-center space-y-2 mt-8">
            <h4 className="font-bold mb-2">Social Links</h4>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <Linkedin className="w-5 h-5 bg-black text-white rounded p-1" />
              <span>Linkedin</span>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 bg-[#0B1340] text-white text-sm">
        © 2025 Purland House. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
//     <footer className="bg-gradient-to-br from-black via-blue-900 to-purple-700 bg-opacity-90 backdrop-blur-md shadow-lg text-white">
//       <div className="container mx-auto px-4 py-16 flex flex-col items-center">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 justify-items-center text-center w-full max-w-7xl">

//           {/* Column 1: Logos */}
//           <div className="flex flex-col items-center space-y-4">
//             <div className="w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[260px]">
//               <img 
//                 src="/BWA&UKWA.png" 
//                 alt="UKWA and BWA Logo" 
//                 className="w-full h-auto object-contain" 
//               />
//             </div>
//           </div>

//           {/* Column 2: Menu */}
//           <div className="flex flex-col items-center space-y-2 mt-8">
//             <h4 className="font-bold mb-2">Main Menu</h4>
//             <ul className="space-y-1">
//               <li><a href="/" className="hover:underline">Home</a></li>
//               <li><a href="/about" className="hover:underline">About Us</a></li>
//               <li><a href="/excise-approval" className="hover:underline">Excise Approval</a></li>
//               <li><a href="/services" className="hover:underline">Services</a></li>
//               <li><a href="/purland.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline"
//               >
//               Terms and Conditions
//                </a>
// </li>
//               <li><a href="/contact" className="hover:underline">Contact Us</a></li>
//             </ul>
//           </div>

//           {/* Column 3: Contact */}
//           <div className="flex flex-col items-center space-y-2 mt-8">
//             <h4 className="font-bold mb-2">Contact Us</h4>
//             <ul className="space-y-2 text-sm">
//               <li className="flex items-start gap-2 justify-center text-center">
//                 <MapPin className="w-4 h-4 mt-1" />
//                 <span>
//                   Purland House, 50 Purland Road,<br />
//                   London, SE28 0AT
//                 </span>
//               </li>
//               <li className="flex items-center gap-2 justify-center">
//                 <Phone className="w-4 h-4" />
//                 <span>+44(0)2083107999</span>
//               </li>
//               <li className="flex items-center gap-2 justify-center">
//                 <Mail className="w-4 h-4" />
//                 <span>info@purlandhouse.com</span>
//               </li>
//             </ul>
//           </div>

//           {/* Column 4: Social */}
//           <div className="flex flex-col items-center space-y-2 mt-8">
//             <h4 className="font-bold mb-2">Social Links</h4>
//             <a 
//               href="https://linkedin.com" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="flex items-center gap-2 hover:underline"
//             >
//               <Linkedin className="w-5 h-5 bg-black text-white rounded p-1" />
//               <span>Linkedin</span>
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="text-center py-4 bg-[#0B1340] text-white text-sm">
//         © 2025 Purland House. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
