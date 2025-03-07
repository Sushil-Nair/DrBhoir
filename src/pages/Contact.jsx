import React from 'react'
import WhatsAppInquiry from '../components/contact/WhatsAppInquiry'
import ContactDetails from '../components/contact/ContactDetails'
import ContactInfo from '../components/contact/ContactInfo'

const Contact = () => {
  return (
    <div className='pt-16'>
      {/* Hero Section */}
      <div 
        className="relative h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("./ContactUs.webp")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
        </div>
      </div>

      {/* Main Body */}
      <WhatsAppInquiry />
      <ContactDetails />
      <ContactInfo />
    </div>
  )
}

export default Contact