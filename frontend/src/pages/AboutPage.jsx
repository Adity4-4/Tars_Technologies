import React from 'react'
import HeroSection from '../components/commoncomponents/HeroSection'
import Counts from '../components/commoncomponents/Counts'
import GetinTouch from '../components/commoncomponents/GetinTouch';
import People from '../components/aboutcomponents/People'
import Whoweare from '../components/commoncomponents/Whoweare';
import image from '../assets/images/herosectionimage.png'
import sumedhImg from "../assets/images/sumedh-sir.png";
import shrutikaImg from "../assets/images/shrutika-mam.png";
import Kshitij from "../assets/images/kshitij.png";
import nitish from "../assets/images/nitesh.png"
import nikhil from "../assets/images/nikhil.png"
import naitik from "../assets/images/naitik-sir.jpg"
import sharavn from "../assets/images/shravan.png"
import vijay from "../assets/images/vijay.png"
import vedant from "../assets/images/vedant.png"
import amogh from "../assets/images/amogh.png"
import atharva from "../assets/images/atharva.png"
function AboutPage() {
  return (
    // ➤ FIX 1: Prevent horizontal overflow
    <div className="w-full overflow-x-hidden">
      
      <HeroSection 
        heading='ABOUT US'
        description='TARS Technologies is a team of passionate innovators delivering simple, intelligent IT solutions in web services, training, and development to help businesses streamline processes and stay competitive.'
        section='#nextsection'
      />
      
      <div id='nextsection' className='pt-16 lg:pt-32 text-center bg-gradient-to-b from-black to-[#1E1E1E] text-white px-4'>
        <p data-aos="fade-down" className='text-[12px] lg:text-[18px] text-[#9C9C9C] font-[500] uppercase tracking-widest'>OUR Vision & Mission</p>
        
        {/* ➤ FIX 2: Responsive Font Size for Headline */}
        <p data-aos="fade-down" className='text-[20px] sm:text-[24px] lg:text-[28px] mt-2 md:mt-3 uppercase font-[neutral_face] leading-tight'>
          Epic Beginnings: Unveiling Our Essence,<br className='hidden md:block' /> Crafting Futures with Excellence.
        </p>

        {/* Vision & Mission Container */}
        <div data-aos="fade-right" className='flex flex-col md:flex-row justify-center items-center md:items-start gap-10 lg:gap-35 py-12 lg:py-25 px-0 lg:px-25'>
          
          {/* ➤ FIX 3: Removed fixed width & margins causing overflow */}
          <div className='w-full max-w-[445px] text-left space-y-4 lg:space-y-14 mx-auto lg:mx-0 lg:ml-30'>
            <p className='text-[18px] lg:text-[28px] font-bold text-white'>Vision: Vision for Tomorrow.</p>
            <p className='text-[14px] lg:text-[20px] text-gray-300 leading-relaxed'>
              "To create intelligent, simple, and future-ready IT solutions that empower businesses and enrich lives."
            </p>
          </div>

          <div className='w-full max-w-[445px] text-left space-y-4 lg:space-y-14 mx-auto lg:mx-0'>
            <p className='text-[18px] lg:text-[28px] font-bold text-white'>Mission: Mission at Work</p>
            <p className='text-[14px] lg:text-[20px] text-gray-300 leading-relaxed'>
              "To understand client needs, deliver innovative web and IT services, and provide value-driven solutions that enable growth and success."
            </p>
          </div>
        </div>
      </div>

      <Whoweare />
      <Counts />

      {/* Founders & Team Section */}
      <div className='pt-20 md:pt-14 lg:pt-30 text-center bg-gradient-to-t from-black to-[#1E1E1E] text-white pb-20'>
        
        <p className='text-[12px] md:text-[16px] lg:text-[18px] text-[#9C9C9C] font-[500] uppercase tracking-widest'>Founders</p>
        <p className='text-[20px] sm:text-[24px] lg:text-[28px] mt-2 md:mt-3 uppercase font-[neutral_face] px-4 leading-tight'>
          Your Aspiration, Our Expertise: Driven by<br className="hidden md:block" /> Dreamers, Built by Doers.
        </p>

        <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-30 lg:gap-50 py-12 lg:py-17  '>
          <People picture={sumedhImg} name='Sumedh Boudh' position='Founder'  />
          <People picture={shrutikaImg} name='Shrutika Tirpude' position='Co-Founder' />
        </div>

        <p className='pt-8 lg:pt-14 text-[12px] md:text-[16px] lg:text-[18px] text-[#9C9C9C] font-[500] uppercase tracking-widest'>Our Team</p>
        <p className='text-[20px] sm:text-[24px] lg:text-[28px] mt-2 md:mt-3 uppercase font-[neutral_face] px-6 leading-tight'>
          Your Aspiration, Our Expertise: Brains<br className='hidden md:block' /> Behind the Breakthroughs.
        </p>

        {/* Team Grid - Responsive Gaps */}
        <div className='flex flex-wrap justify-center gap-x-6 gap-y-10 lg:gap-x-11 lg:gap-y-15 pt-12 lg:pt-18 px-4 lg:px-40'>
          <People picture={atharva} name='Atharva Rajkondawar' position='Project Manager' />
          <People picture={Kshitij} name='Kshitij Meshram' position='Team Leader' />
          <People picture={amogh} name='Amogh Ramteke' position='Operation Head' />
          <People picture={nitish} name='Nitish Tiwari' position='Senior Developer' />
          <People picture={nikhil} name='Nikhil Bawane' position='UI/UX Designer' />
          <People picture={naitik} name='Your Name' position='Position' />
          <People picture={vijay} name='Your Name' position='Position' />
          <People picture={vedant} name='Your Name' position='Position' />
          <People picture={amogh} name='Your Name' position='Position' />
        </div>
      </div>

      <GetinTouch />
    </div>
  )
}

export default AboutPage