import React from 'react'
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import Aos from 'aos';

import herosectionimage from '../assets/images/herosectionimage.png'
import herosectionicon1 from '../assets/icons/herosectionicon1.png'
import herosectionicon2 from '../assets/icons/herosectionicon2.png'
import herosectionicon3 from '../assets/icons/herosectionicon3.png'
import herosectionicon4 from '../assets/icons/herosectionicon4.png'
import rightarrow from '../assets/icons/r-arrow.png'
import leftarrow from '../assets/icons/l-arrow.png'

import Testimonials from '../components/homecomponents/Testimonials';
import Clients from '../components/commoncomponents/Clients';
import GetinTouch from '../components/commoncomponents/GetinTouch';
import Counts from '../components/commoncomponents/Counts';
import Services from '../components/commoncomponents/Services';
import Products from '../components/commoncomponents/Products';
import Whoweare from '../components/commoncomponents/Whoweare';

function HomePage() {
 function Linkdinprofile(){
      window.open("https://www.linkedin.com/company/tars-technologies/posts/?feedView=all","_blank")
    }
  return (
    <div className="w-full overflow-x-hidden">
   
      {/* hero section */}
      <div className='relative w-full min-h-screen lg:h-[600px] overflow-hidden'>
        <img src={herosectionimage} className='absolute object-cover w-full h-full' alt="Hero Background" />
        
        {/* ➤ FIX: Lowered z-index from 50 to 10 so Navbar covers it */}
        <div className='absolute flex right-5 lg:right-30 top-125 lg:top-110  space-y-0 lg:space-y-1.2 gap-3 z-10'>
          <img data-aos="flip-left" data-aos-duration="2000" src={herosectionicon1} onClick={Linkdinprofile} className='w-8 md:w-9 lg:w-12 cursor-pointer' />
          <img data-aos="flip-left" data-aos-duration="2000" src={herosectionicon2} className='w-8 md:w-9 lg:w-12 cursor-pointer' />
          <img data-aos="flip-left" data-aos-duration="2000" src={herosectionicon3} className='w-8 md:w-9 lg:w-12 cursor-pointer' />
          <img data-aos="flip-left" data-aos-duration="2000" src={herosectionicon4} className='w-8 md:w-9 lg:w-12 cursor-pointer' />
        </div>

        <div className='absolute inset-0 flex flex-col justify-center items-center text-center tracking-wider text-white pt-20 lg:pt-45 px-4 w-full'>
          
          <p data-aos="fade-right" className='text-[26px] md:text-[42px] lg:text-[48px] md:mt-40 mt-15 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFFFFF30] font-[neutral_face] aos-init aos-animate'>
            ELEVATE YOUR VISION,<br /> IGNITE TOMORROW’S INNOVATION.
          </p>
          
          <p data-aos="fade-left" className='text-[12px] sm:text-[14px] md:text-[16px] lg:text-[24px] mt-6 lg:mt-5 text-gray-300 px-2'>
            Crafting Digital Excellence for a Future<br className="hidden md:block" /> Beyond Imagination.
          </p>

          <div className='flex flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-20 mt-15 lg:mt-30  text-[10px] md:text-[14px] lg:text-[24px] px-2 w-full'>
          <a href="https://tarstech.in/home/product-development"> <p data-aos="zoom-out-up" className="bg-white/10 px-3 py-1 rounded-full lg:bg-transparent lg:p-0">Full Cycle Product Development</p></a> 
           <a href="https://tarsdigital.in/"> <p data-aos="zoom-out-up" className="bg-white/10 px-3 py-1 rounded-full lg:bg-transparent lg:p-0">Digital Product Design</p></a>
            <a href="https://tarsdigital.in/"> <p data-aos="zoom-out-up" className="bg-white/10 px-3 py-1 rounded-full lg:bg-transparent lg:p-0">Branding</p></a>
           <a href="https://tarstech.in/home/indusrty-automation">  <p data-aos="zoom-out-up" className="bg-white/10 px-3 py-1 rounded-full lg:bg-transparent lg:p-0">Industry Automation Service</p></a>
          </div>

          <div className='flex flex-col items-center gap-2 lg:gap-2 mt-auto mb-10 lg:mb-36 lg:pt-8 text-[13px] md:text-[15px] lg:text-[16px] font-[neutral_face]'>
            <p>SCROLL</p>
            <div className="relative flex flex-col items-center h-12">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: [0, 1, 0], y: [0, 10, 20] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="absolute top-0"
                >
                  <motion.button
                    onClick={() => {   
                      const element = document.querySelector('#nextsection');
                      if (element) {
                        const targetY = element.getBoundingClientRect().top + window.pageYOffset;
                        const startY = window.scrollY;
                        const distance = targetY - startY;
                        const duration = 1200; 
                        let startTime = null;

                        const easeOutBounce = (x) => {
                          const n1 = 7.5625;
                          const d1 = 2.75;
                          if (x < 1 / d1) {
                            return n1 * x * x;
                          } else if (x < 2 / d1) {
                            return n1 * (x -= 1.5 / d1) * x + 0.75;
                          } else if (x < 2.5 / d1) {
                            return n1 * (x -= 2.25 / d1) * x + 0.9375;
                          } else {
                            return n1 * (x -= 2.625 / d1) * x + 0.984375;
                          }
                        };

                        const animation = (currentTime) => {
                          if (!startTime) startTime = currentTime;
                          const timeElapsed = currentTime - startTime;
                          const progress = Math.min(timeElapsed / duration, 1);
                          const ease = easeOutBounce(progress);
                          window.scrollTo(0, startY + distance * ease);
                          if (timeElapsed < duration) requestAnimationFrame(animation);
                        };

                        requestAnimationFrame(animation);
                      }
                    }}
                  >
                    <IoIosArrowDown size={23} />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id='nextsection'>
        <Whoweare />
      </div>
      <Counts />
      <Services />
      <Products />

      {/* Testimonials */}
      <div className="py-12 lg:py-28 text-center bg-gradient-to-b from-[#1E1E1E] to-[#121212] text-white">
        <p className="text-[12px] md:text-[16px] lg:text-[18px] text-[#9C9C9C] font-[500] tracking-widest uppercase">Testimonials</p>
        <p className="text-[18px] md:text-[22px] lg:text-[28px] lg:leading-12 mt-2 md:mt-3 px-4 uppercase font-[neutral_face]">
          Voices of Trust: Client Stories, Testimonials<br className='hidden md:block' /> that Illuminate Our Shared Success.
        </p>
        
        <div className='flex flex-col md:flex-row gap-6 md:gap-5 lg:gap-16 px-4 md:px-5 lg:px-30 py-8 md:py-20'>
          <Testimonials image={herosectionimage} />
          <Testimonials image={herosectionimage} />
        </div>

        <div className='flex justify-center gap-5'>
          <img src={leftarrow} className='w-8 md:w-10 lg:w-auto cursor-pointer hover:scale-110 transition' />
          <img src={rightarrow} className='w-8 md:w-10 lg:w-auto cursor-pointer hover:scale-110 transition' />
        </div>
      </div>

      <Clients />
      <GetinTouch />
    </div>
  )
}

export default HomePage