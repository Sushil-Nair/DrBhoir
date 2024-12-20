import React from 'react'

const ContactDetails = () => {
  return (
    <div className=' flex flex-col w-full mx-auto px-4 sm:px-6 lg:px-8 bg-primary gap-4'>
       <h3 className="text-2xl font-semibold text-center text-black mb-5">Find Us <span className='text-cta'>Here</span></h3>
        <div className="h-[450px] mb-8 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div>
                <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d120532.3736543478!2d73.0796504!3d19.2546598!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be793002da3acbd%3A0x9528575cd1ebd813!2sDr%20Bhoir%20farm%20%26%20Resort!5e0!3m2!1sen!2sin!4v1734595688498!5m2!1sen!2sin"
                   className='w-full h-[500px]'  
                   allowFullScreen="" 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </div>
  )
}

export default ContactDetails
