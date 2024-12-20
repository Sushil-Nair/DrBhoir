import React from 'react'
import { TiTick } from "react-icons/ti";


const PropertyRules = () => {
  return (
    <div className='flex flex-col w-full mx-auto px-4 sm:px-6 lg:px-8 bg-primary pb-16 gap-4'>
        <h3 className="text-2xl md:text-3xl font-semibold text-center text-black mb-5">Property <span className='text-cta'>Rules</span> & <span className='text-cta'>Guidelines</span></h3>
        <p className="text-lg md:text-xl mb-3 text-center">To ensure a pleasant and safe experience for all our guests, please adhere to the following guidelines during your stay</p>
        <div className="group relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className='flex flex-col items-center justify-center object-cover bg-primary'>
                <img className='w-3/5' src="./logo_whitebg_trans.png" alt="" />
            </div>

            <div className='flex flex-col pt-4 pb-8 px-4 gap-3'>
                <h4 className="text-lg md:text-xl font-semibold text-center text-black mb-2">Somethings To Remember</h4>
                <div className='flex items-center gap-4'>
                    <TiTick />
                    <p className='text-xs md:text-sm lg:text-base'>Entry and exit timings are from 10:00 AM to 11:00 AM</p>
                </div>
                <div className='flex items-center gap-4'>
                    <TiTick />
                    <p className='text-xs md:text-sm lg:text-base'>Kindly submit the ID proof (Any Government Approved) at the time of Check-In.</p>
                </div>
                <div className='flex items-center gap-4'>
                    <TiTick />
                    <p className='text-xs md:text-sm lg:text-base'>Kindly Carry Proper Swimming Costume to Use the Swimming Pool.</p>
                </div>
                <div className='flex items-center gap-4'>
                    <TiTick />
                    <p className='text-xs md:text-sm lg:text-base'>Drinks are not allowed in pool (separate sitting is available near pool Deck)</p>
                </div>
                <div className='flex items-center gap-4'>
                    <TiTick />
                    <p className='text-xs md:text-sm lg:text-base'>Any guest for dinner and lunch purpose will have to pay table charge.</p>
                </div>
                <div className='flex items-center gap-4'>
                    <TiTick />
                    <p className='text-xs md:text-sm lg:text-base'>Pool close time 12 AM to 07 AM.</p>
                </div>
                <div className='flex items-center gap-4'>
                    <TiTick />
                    <p className='text-xs md:text-sm lg:text-base'>Pets not allowed.</p>
                </div>
                <div className='flex items-center gap-4'>
                    <TiTick />
                    <p className='text-xs md:text-sm lg:text-base'>Unmarried couples are not allowed.</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default PropertyRules