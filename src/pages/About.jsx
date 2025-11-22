import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center  text-2xl pt-2 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[310px]' src={assets.about_image} alt="About Image" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Every consultation is focused on understanding your symptoms, concerns, and health goals. We prioritize clear communication and transparent medical guidance for all patients.</p>

          <p>You can trust our specialists to provide safe, convenient, and personalized medical care. We believe in building long-term relationships based on trust, empathy, and expertise. Your health matters to us — and our doctors are here to support you at every step of your journey.</p>

          <b className='text-gray-800'>Our Vision</b>

          <p>Our vision is to make quality healthcare accessible, convenient, and trustworthy for every individual. We aim to bridge the gap between patients and skilled doctors through technology-driven solutions.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to network of trusted healthcare professionals in your area.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you  stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About