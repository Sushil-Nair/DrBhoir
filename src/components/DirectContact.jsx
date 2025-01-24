import React from 'react';
import UiButton from './UiButton';
import { NavLink } from 'react-router';

const DirectContact = () => {
  return (
    <div className="mt-16">
        <div className='flex flex-col sm:flex-row gap-8 items-center justify-between bg-white w-full h-full rounded-lg mx-auto shadow-md p-6'>
            <div className='flex w-full sm:w-1/2 h-full flex-col'>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-center text-nowrap">Book your stay with us</h1>  
                <p className='text-gray-800 p-6'>Looking for the best farmhouse in Kalyan-Badlapur region? Dr. Bhoir Farm & Resort is your ideal escape for relaxation, adventure, and celebrations.</p>
            </div>
            <div className='flex w-full sm:w-1/2 flex-col items-start sm:items-end gap-2'>
                    <div className='flex gap-2 items-center text-nowrap'>
                        <p className='text-base sm:text-lg font-semibold'>Checkout our rooms</p> 
                        <NavLink to="/accommodation"><UiButton /></NavLink>
                    </div>
    
                    <div className='flex gap-2 items-center text-nowrap'>
                        <p className='text-base sm:text-lg font-semibold'>Explore Our Activities</p> 
                        <NavLink to="/activities"><UiButton /></NavLink>
                    </div>
    
                    <div className='flex gap-2 items-center text-nowrap'>
                        <p className='text-base sm:text-lg font-semibold'>Call Us Today</p> 
                        <a href="tel:9769771278"><UiButton /></a>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default DirectContact