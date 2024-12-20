import React from 'react'
import { FaFacebook, FaInstagramSquare, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { NavLink } from 'react-router';
import { assets } from '../assets/assets.js';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white w-full'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full">
          <div className='flex items-center mb-7 w-full'>
          <NavLink to='/' className='flex flex-col items-center mb-7 cursor-pointer'>
            <img className='w-20' src={assets.BW_logo} alt="" />
            <p className='text-xl font-bold'>Dr. Bhoir Farm & Resort</p>
          </NavLink>
        </div>
          <div className='w-full'>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-start">
                <FaPhoneAlt className="h-5 w-5 mr-3" />
                +1 (555) 123-4567
              </p>
              <p className="flex items-start">
                <MdOutlineEmail className="h-5 w-5 mr-3" />
                info@serenityresort.com
              </p>
              <p className="flex items-start">
                <FaMapMarkerAlt className="h-8 w-8 mr-3" />
                <a href="https://maps.app.goo.gl/hUGhefa5aVz6XDtc7" target='_blank'>Dr. Bhoir Farm & Resort, 56/3 B Dahagaon-Manjarli Road, Rayate, 421103</a>
              </p>
            </div>
          </div>
          
          <div className='w-full'>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-cta">About Us</a></li>
              <li><a href="/contact" className="hover:text-cta">Accommodation</a></li>
              <li><a href="/contact" className="hover:text-cta">Activities</a></li>
              <li><a href="/gallery" className="hover:text-cta">Gallery</a></li>
              <li><a href="/contact" className="hover:text-cta">Contact</a></li>
            </ul>
          </div>
          
          <div className='w-full'>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Palms-Resort-Dr-Bhoir-farm/100092194719192/?_rdr" target='_blank' className="hover:text-fb">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/drbhoirfarm/" target='_blank' className="hover:text-insta">
                <FaInstagramSquare className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Dr. Bhoir Farm & Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer