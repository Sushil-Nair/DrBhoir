import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="pt-16">
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you. Please fill out the form below or reach out to us using the contact information provided.
            </p>
            
            <div className="flex flex-col gap-16">
                <div className="space-y-4">
                   <div className="flex items-center">
                     <Phone className="h-6 w-6 text-green-600 mr-4" />
                     <div>
                       <h3 className="font-semibold">Phone</h3>
                       <p className="text-gray-600">+1 (555) 123-4567</p>
                     </div>
                   </div>
                   
                   <div className="flex items-center">
                     <Mail className="h-6 w-6 text-green-600 mr-4" />
                     <div>
                       <h3 className="font-semibold">Email</h3>
                       <p className="text-gray-600">info@serenityresort.com</p>
                     </div>
                   </div>
                   
                   <div className="flex items-center">
                     <MapPin className="h-6 w-6 text-green-600 mr-4" />
                     <div>
                       <h3 className="font-semibold">Address</h3>
                       <p className="text-gray-600"><a href="https://maps.app.goo.gl/hUGhefa5aVz6XDtc7" target='_blank'>Dr. Bhoir Farm & Resort, 56/3 B Dahagaon-Manjarli Road, Rayate, 421103</a></p>
                     </div>
                   </div>
                </div>
                <div className='flex gap-4'>
                    <div className='group cursor-pointer'>
                      <a href="https://www.facebook.com/people/Palms-Resort-Dr-Bhoir-farm/100092194719192/?_rdr" target='_blank'><FaFacebookSquare className='text-3xl text-[#4267B2] shadow-lg transition-transform duration-300  group-hover:shadow-xl group-hover:scale-105' /></a>
                    </div>
                    <div className='group cursor-pointer'>
                      <a href="https://www.instagram.com/drbhoirfarm/" target='_blank'><FaInstagramSquare className='text-3xl text-[#C13584] shadow-lg transition-transform duration-300 group-hover:shadow-xl group-hover:scale-105' /></a>
                    </div>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
