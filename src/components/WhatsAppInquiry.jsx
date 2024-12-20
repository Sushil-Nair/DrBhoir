import React from 'react'
import { NavLink } from 'react-router';
import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppInquiry = () => {
  return (
    <div className=' flex flex-col pt-16 w-full mx-auto px-4 sm:px-6 lg:px-8 bg-primary gap-4'>
       <h3 className="text-2xl font-semibold text-center text-black mb-5">Get in Touch with <span className='text-cta'>Us</span></h3>
        <p className="text-lg md:text-xl mb-3 text-center">Were here to help you with your questions, bookings, and more!</p>
        <div className="group relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16  rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div>
                <img src="https://plus.unsplash.com/premium_photo-1719839720683-72c8eb65b10a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>

            <div className='flex flex-col py-16 gap-4'>
                <h4 className="text-xl font-semibold text-center bg-gradient-to-r from-[#075E54] to-[#25D366] bg-clip-text text-transparent mb-2">Fast and Easy: Bookings & Inquiries on WhatsApp</h4>
                <p className='p-4'>Need quick assistance or want to book your stay effortlessly? Our WhatsApp chat is here to make communication seamless. Whether you have inquiries about accommodations, activities, or events, or you're ready to reserve your spot, simply send us a message. Get personalized responses directly from us and experience hassle-free planning for your visit to our resort.</p>

                <div className='flex flex-col w-full mt-4 group relative gap-10 items-center justify-center'>
                   <NavLink
                       to="/gallery"
                       className="inline-flex items-center mx-auto bg-[#25D366] text-white font-bold px-6 py-3 rounded-lg hover:bg-green-900 mt-4 gap-4 transition-transform duration-300 group-hover:scale-105">
                           <FaWhatsapp className="ml-2 h-5 w-5" />
                            Connect with Us
                   </NavLink>
               </div>
            </div>
        </div>
    </div>
  )
}

export default WhatsAppInquiry
