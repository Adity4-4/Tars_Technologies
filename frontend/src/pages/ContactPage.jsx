import React, { useState } from 'react'
import axios from 'axios' 
import Swal from 'sweetalert2' // 1. Import SweetAlert
import herosectionimage from '../assets/images/herosectionimage.png'
import tarslogo from '../assets/icons/tarslogo.png'
import Contact from '../assets/images/contact-1.svg'
import ContactBtn from '../assets/images/contact-btn.png'

function ContactPage() {
  // 1. State to hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  // 2. Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle Form Submission
  const handleSubmit = async () => {
    // Basic validation
    if(!formData.firstName || !formData.email || !formData.message) {
        // Validation Warning Pop-up
        Swal.fire({
            title: "Missing Information",
            text: "Please fill in all required fields.",
            icon: "warning",
            confirmButtonColor: "#000",
        });
        return;
    }

    try {
      setLoading(true);
      
      // Combine First and Last name for the backend 'name' field
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      };

      // 4. Use your Vercel URL (Updated from localhost)
      const response = await axios.post('https://tars-technologies-seven.vercel.app/api/getintouch', payload);

      if (response.data.success) {
        // 5. Success Pop-up
        Swal.fire({
            title: "Message Sent!",
            text: "We have received your message and will reach out shortly.",
            icon: "success",
            iconColor: "#000",
            confirmButtonColor: "#000",
            background: "#fff",
            color: "#000"
        });

        // 6. Reset form
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Error Pop-up
      Swal.fire({
        title: "Error!",
        text: "Failed to send message. Please try again.",
        icon: "error",
        confirmButtonColor: "#000",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='relative '>
        <img src={herosectionimage} className=' object-cover w-full h-[1110px] md:h-[910px]' alt="Hero" />
        <div className='absolute inset-0 top-8 lg:-top-13 flex flex-col justify-center items-center text-center tracking-wider text-white pt-20 lg:pt-42 '>
          <p className='text-[38px] lg:text-[81px] font-[Inter] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFFFFF30] font-[800] '>Get in touch</p>
          <p className='mb-11 text-[12px] lg:text-[22px] font-[500] '>Reach out, and let's create a universe of possibilities together!</p>
          
          <div className='flex flex-col md:flex-row items-center gap-10 p-5 mx-3 lg:mx-44 rounded-[20px] bg-[#0A0D17] font-[Inter]'>
            <div className='px-2 lg:px-8 py-3 md:py-0 md:w-1/2 '>
              <p className='text-[18px] lg:text-[30px] font-[600] text-left '>Let’s connect constellations</p>
              <p className='text-[10px] lg:text-[16px] mb-5 md:mb-10 text-left '>Let's align our constellations! Reach out and let the<br className='hidden md:block '/> magic of collaboration with Tars Technologies.</p>
              
              {/* Form Inputs */}
              <div className='flex flex-col gap-3 text-[#FFFFFF99] text-[12px] md:text-[15px] '>
                <div className='flex gap-3 '>
                  <input 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleChange} 
                    placeholder='Last Name' 
                    className='w-full h-[42px] pl-3 border border-[#FFFFFF33] rounded-[5px] bg-[#FFFFFF0D] ' 
                  />
                  <input 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleChange} 
                    placeholder='First Name' 
                    className='w-full h-[42px] pl-3 border border-[#FFFFFF33] rounded-[5px] bg-[#FFFFFF0D] ' 
                  />
                </div>
                <input 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder='Email' 
                  className='h-[42px] pl-3 border border-[#FFFFFF33] rounded-[5px] bg-[#FFFFFF0D]' 
                />
                <input 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder='Phone Number' 
                  className='h-[42px] pl-3 border border-[#FFFFFF33] rounded-[5px] bg-[#FFFFFF0D] ' 
                />
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder='Message' 
                  className='h-[100px] pt-2 pl-3 border border-[#FFFFFF33] rounded-[5px] bg-[#FFFFFF0D] resize-none' 
                />
              </div>

              {/* Submit Button */}
              <div 
                onClick={!loading ? handleSubmit : null} 
                className={`w-full h-[42px] mt-3 flex justify-center items-center gap-2 text-[12px] md:text-[15px] bg-gradient-to-r from-[#000000] to-[#545454] rounded-[5px] cursor-pointer hover:opacity-90 transition-opacity ${loading ? 'opacity-50' : ''}`}
              >
                <button disabled={loading}>{loading ? "Sending..." : "Send it to the TARS"}</button>
                {!loading && <img src={ContactBtn} alt="arrow" />}
              </div>

            </div>
            <div className='relative '>
              <img src={tarslogo} className='absolute top-5 left-5 w-[100px] md:w-[200px] ' alt="Logo" />
              <img src={Contact} className=' w-[530px] ' alt="Contact visual" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6143.883931520455!2d79.05657134242165!3d21.139409934459813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c16fe7f30a71%3A0x96d1eb35911d1226!2sTARS%20Technologies!5e0!3m2!1sen!2sin!4v1758111187127!5m2!1sen!2sin"
          className='w-full h-[200px] lg:h-[500px] ' 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Map"
        ></iframe>
      </div>
    </>
  )
}

export default ContactPage