import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About us', path: '/about' },
  { name: 'Excise Approval & Customs', path: '/excise-approval' },
  { name: 'Services', path: '/services' },
  { name: 'Application Form', path: '/application' },
  { name: 'Security', path: '/security' },
  { name: 'Contact us', path: '/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-br from-black via-blue-900 to-purple-700 bg-opacity-90 backdrop-blur-md shadow-lg">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-4 md:px-8 py-2">
        {/* Logo */}
        <NavLink to="/" className="flex-shrink-0">
  <div className="bg-white p-1 rounded-md shadow-md">
    <img src="/logo1.png" alt="Purland Logo" className="h-10 w-auto" />
  </div>
</NavLink>


        {/* Hamburger Menu - Mobile & Tablet */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav Items - Desktop */}
        <nav className="hidden lg:flex gap-4 ml-6">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold px-3 py-2 whitespace-nowrap rounded-md transition duration-200 shadow-sm ${
                  isActive
                    ? 'text-blue-700 bg-white bg-opacity-10'
                    : 'text-white hover:text-blue-700 hover:bg-white hover:scale-110 transition-transform duration-300 hover:bg-opacity-10'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Nav Items - Mobile */}
      {menuOpen && (
        <div className="lg:hidden bg-purple-800 bg-opacity-95 px-4 pb-4 pt-2 space-y-2">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-base font-medium px-4 py-2 rounded-md transition duration-200 ${
                  isActive
                    ? 'text-yellow-400 bg-white bg-opacity-10'
                    : 'text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
