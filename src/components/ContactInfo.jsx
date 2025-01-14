import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { useState } from 'react';

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState({ loading: false, error: null, success: false });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ loading: true, error: null, success: false });

    try {
  await fetch('https://script.google.com/macros/s/AKfycbzv_WzCBxl0-o5D410BdcHA_pB5HRId3hw0fg6Nu10pnbN7An1j4aSJ6dFDzIcvVjAX/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...formData,
      timestamp: new Date().toLocaleString(),
    }),
  });
  
  // Since we can't read the response with no-cors, assume success if the fetch doesn't throw
  setSubmitStatus({ loading: false, error: null, success: true });
  setFormData({ name: '', email: '', phone: '', message: '' });
  } catch (error) {
  setSubmitStatus({ loading: false, error: 'Failed to submit form', success: false });
  }
};

  return (
    <div className="pt-16 bg-primary">
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-semibold mb-6 scale-up-center">Get in Touch</h2>
            <p className="text-gray-600 mb-8 scale-up-center">
              We'd love to hear from you. Please fill out the form below or reach out to us using the contact information provided.
            </p>
            
            <div className="flex flex-col gap-16 scale-up-center">
                <div className="space-y-4">
                   <div className="flex items-center">
                     <Phone className="h-6 w-6 text-green-600 mr-4" />
                     <div>
                       <h3 className="font-semibold">Phone</h3>
                       <a href="tel:9769771278" className='text-gray-600'>+91-9769771278</a>
                     </div>
                   </div>
                   
                   <div className="flex items-center">
                     <Mail className="h-6 w-6 text-green-600 mr-4" />
                     <div>
                       <h3 className="font-semibold">Email</h3>
                       <a href="mailto:adityaheritage2023@gmail.com" className='text-gray-600'>adityaheritage2023@gmail.com</a>
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
            {submitStatus.success && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
              Thank you for your inquiry! We'll get back to you soon.
            </div>
          )}

          {submitStatus.error && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
              {submitStatus.error}
            </div>
          )}
          
      <form onSubmit={handleSubmit}>
        <div className="mb-6 scale-up-center">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>
        
        <div className="mb-6 scale-up-center">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>

        <div className="mb-6 scale-up-center">
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            maxLength={10}
            minLength={10}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>
        
        <div className="mb-6 scale-up-center">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          ></textarea>
        </div>

        {submitStatus.message && (
          <div className={`mb-4 p-3 rounded ${
            submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {submitStatus.message}
          </div>
        )}
        
        <button
          type="submit"
          disabled={submitStatus.loading}
          className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
        >
          {submitStatus.loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
