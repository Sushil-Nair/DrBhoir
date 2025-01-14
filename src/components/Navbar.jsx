import React from 'react'
import { assets } from '../assets/assets.js';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar () {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className='bg-primary shadow-lg fixed w-full z-50'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
            <div className="flex items-center">
              <NavLink to='/' className='flex items-center gap-2'>
               <img className='flex w-16 min-w-8 h-auto rounded-full cursor-pointer' src={assets.logo} alt="logo" />
               <span className='flex text-center font-medium lg:text-xl cursor-pointer hover:text-cta'>Dr. Bhoir Farm & Resort</span>
              </NavLink>
            </div>
      
                {/* Desktop Links */}
            <div className='hidden md:flex items-center gap-4 px-2'>
                  <NavLink to='/' className={({ isActive }) => 
              `block px-2 py-2 rounded-md text-sm lg:text-base font-medium
              ${isActive ? 'text-green-600' : 'text-gray-700 hover:text-cta'}`
            }>
              Home
            </NavLink>
            <NavLink to='/about' className={({ isActive }) => 
              `block px-2 py-2 rounded-md text-sm lg:text-base font-medium
              ${isActive ? 'text-green-600' : 'text-gray-700 hover:text-cta'}`
            }>
              About
            </NavLink>
            <NavLink to='/accommodation' className={({ isActive }) => 
              `block px-2 py-2 rounded-md text-sm lg:text-base font-medium
              ${isActive ? 'text-green-600' : 'text-gray-700 hover:text-cta'}`
            }>
              Accommodation
            </NavLink>
            <NavLink to='/activities' className={({ isActive }) => 
              `block px-2 py-2 rounded-md text-sm lg:text-base font-medium
              ${isActive ? 'text-green-600' : 'text-gray-700 hover:text-cta'}`
            }>
              Activities
            </NavLink>
            <NavLink to='/gallery' className={({ isActive }) => 
              `block px-2 py-2 rounded-md text-sm lg:text-base font-medium
              ${isActive ? 'text-green-600' : 'text-gray-700 hover:text-cta'}`
            }>
              Gallery
            </NavLink>
            <NavLink to='/contact' className={({ isActive }) => 
              `block px-2 py-2 rounded-md text-sm lg:text-base font-medium
              ${isActive ? 'text-green-600' : 'text-gray-700 hover:text-cta'}`
            }>
              Contact
            </NavLink>
              </div>
                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                  <button
                    onClick={toggleMenu}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
                  >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>
      </div>
  
          {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <NavLink onClick={toggleMenu} to='/' className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'text-green-600' : 'text-gray-700 hover:text-cta'}`
            }>
              Home
            </NavLink>
            <NavLink onClick={toggleMenu} to='/about' className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'text-green-600' : 'text-gray-700 hover:text-cta'}`
            }>
              About
            </NavLink>
            <NavLink onClick={toggleMenu} to='/accommodation' className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'text-green-600' : 'text-gray-700 hover:text-cta'}`
            }>
              Accommodation
            </NavLink>
            <NavLink onClick={toggleMenu} to='/activities' className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'text-green-600' : 'text-gray-700 hover:text-cta'}`
            }>
              Activities
            </NavLink>
            <NavLink onClick={toggleMenu} to='/gallery' className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'text-green-600' : 'text-gray-700 hover:text-cta'}`
            }>
              Gallery
            </NavLink>
            <NavLink onClick={toggleMenu} to='/contact' className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'text-green-600' : 'text-gray-700 hover:text-cta'}`
            }>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}