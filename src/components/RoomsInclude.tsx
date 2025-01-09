import React from 'react'
import { FaWifi } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa6";
import { MdBrowserNotSupported } from "react-icons/md";

const RoomsInclude: React.FC = () => {
    return (
        <div className='bg-[#F5F5F5]'>
            <div className='max-w-[1216px] mx-auto '>
            <h5 className='text-center text-xl py-4 font-semibold'>All Rooms Include</h5>

            <div className='flex flex-wrap gap-y-8 py-8'>
                <div className='w-1/2 md:w-1/4 text-center '>
                    <FaWifi className='text-2xl text-yellow-500 mx-auto' />
                    <p>Free Wi-Fi</p>
                </div>
                <div className='w-1/2 md:w-1/4 text-center'>
                    <IoShieldCheckmarkOutline className='text-2xl text-yellow-500 mx-auto' />
                    <p>24/7 Security</p>
                </div>
                <div className='w-1/2 md:w-1/4 text-center'>
                    <FaRegCreditCard className='text-2xl text-yellow-500 mx-auto' />
                    <p>Card Payment</p>
                </div>
                <div className='w-1/2 md:w-1/4 text-center'>
                    <MdBrowserNotSupported className='text-2xl text-yellow-500 mx-auto' />
                    <p>24/7 Support</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default RoomsInclude
