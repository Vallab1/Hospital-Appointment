import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap14 my-10 mt-40 text-sm'>
                {/* Left section */}
                <div>
                    <img className='mb-5 w-10' src={assets.logo} alt="Footer-Logo" />
                    <p className='w-full md:w-2/3 text-grey-600  leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt veniam beatae iure deleniti id molestias corporis nulla consequatur quaerat.</p>
                </div>

                {/* Center section */}
                <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                {/* Right section */}
                <div>
                    <p className='uppercase text-xl font-medium mb-5'>Get in Touch</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+91 9120346100</li>
                        <li>baijnathprajapati1205bk@gmail.com</li>
                    </ul>

                </div>
            </div>

            {/* ------ CopyRight section ------ */}
            <div>
                <hr className=' border border-gray-600'/>
                <p className='py-5 text-sm text-center'>Copyright 2025@ Doctorss - All right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer