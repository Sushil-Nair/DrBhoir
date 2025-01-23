import React from 'react'
import { FaFacebook, FaInstagramSquare, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { NavLink } from 'react-router';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white w-full'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className='flex items-center justify-center mb-7 w-full'>
            <NavLink to='/' className='flex flex-col lg:flex-row items-center mb-7 cursor-pointer'>
              <img className='w-24' src='./footer_logo.webp' alt="" />
              <p className='text-xl font-bold text-nowrap'>Dr. Bhoir Farm & Resort</p>
            </NavLink>
        </div>
        <div className='mx-auto w-[95%]'>
        <div className="grid grid-cols-1 md:grid-cols-[minmax(100px,_300px)_repeat(3,_1fr)] gap-10 w-full">
          <div className='w-full'>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-start">
                <FaPhoneAlt className="min-h-5 min-w-5 mr-3" />
                <a href="tel:9769771278">+91-9769771278</a>
              </p>
              <p className="flex items-start">
                <FaPhoneAlt className="min-h-5 min-w-5 mr-3" />
                <a href="tel:8779414474">+91-8779414474</a>
              </p>
              <p className="flex items-start">
                <MdOutlineEmail className="min-h-5 min-w-5 mr-3" />
                <a href="mailto:adityaheritage2023@gmail.com">adityaheritage2023@gmail.com</a>
              </p>
              <p className="flex items-start">
                <FaMapMarkerAlt className="min-h-5 min-w-5 mr-3" />
                <a href="https://maps.app.goo.gl/hUGhefa5aVz6XDtc7" target='_blank'>Dr. Bhoir Farm & Resort, 56/3 B Dahagaon-Manjarli Road, Rayate, 421103</a>
              </p>
            </div>
          </div>
          
          <div className='w-full'>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 flex flex-col">
              <NavLink to='/about' className="hover:text-cta">About Us</NavLink>
              <NavLink to='/accommodation' className="hover:text-cta"> Accommodation</NavLink>
              <NavLink to='/activities' className="hover:text-cta">Activities</NavLink>
              <NavLink to='/gallery' className="hover:text-cta">Gallery</NavLink>
              <NavLink to='/contact' className="hover:text-cta">Contact</NavLink>
            </ul>
          </div>
          
          <div className='w-full'>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/DrBhoirfarm" target='_blank' className="hover:text-fb">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/drbhoirfarm/" target='_blank' className="hover:text-insta">
                <FaInstagramSquare className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className='w-full'>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <div className="flex space-x-4">
              <p><span className='text-cta font-bold'>Dr. Bhoir Farm & Resort</span> offers a serene escape amidst nature in Dahagaon, Maharashtra.</p>
            </div>
          </div>
        </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Dr. Bhoir Farm & Resort. All rights reserved. Developed by Digital Crafts</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer