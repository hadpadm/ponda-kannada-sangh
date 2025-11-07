import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png'; // 👈 your logo path

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center space-x-3 text-2xl font-bold">
          <img
            src={logo}
            alt="Ponda Kannada Sangha Logo"
            className="w-10 h-10 rounded-full"
          />
          <span>Ponda Kannada Sangha</span>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation */}
        <nav
          className={`absolute md:static bg-blue-600 md:bg-transparent left-0 w-full md:w-auto top-16 md:top-auto transition-all duration-300 ease-in-out
          ${menuOpen ? 'block' : 'hidden md:block'}`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
            <li>
              <Link to="/home" className="block py-2 md:py-0 hover:text-blue-200" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 md:py-0 hover:text-blue-200" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/photos" className="block py-2 md:py-0 hover:text-blue-200" onClick={() => setMenuOpen(false)}>Photos</Link>
            </li>
            <li>
              <Link to="/kannada_siri" className="block py-2 md:py-0 hover:text-blue-200" onClick={() => setMenuOpen(false)}>Kannada Siri</Link>
            </li>
            <li>
              <Link to="/updates" className="block py-2 md:py-0 hover:text-blue-200" onClick={() => setMenuOpen(false)}>Updates</Link>
            </li>
            <li>
              <Link to="/team" className="block py-2 md:py-0 hover:text-blue-200" onClick={() => setMenuOpen(false)}>Our Team</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
