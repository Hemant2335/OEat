import React from 'react'
import link from "../assets/linkedin.png";
import git from "../assets/github.png";
import twit from "../assets/twitter.png";

const Contact = () => {
  return (
    <div className='h-fit w-full flex flex-col my-[10vh] justify-center items-center p-4' id='contact'>
        <h1 className='text-4xl font-poppins font-semibold'>You can Contact us Here</h1>
        <div className='flex gap-10 mt-10 shadow-3xl p-4 rounded-lg'>
            <div className='social'>
            <a href="https://www.linkedin.com/in/nishant-kumar-b198b822b/" target='_blank'>
            <img src={link} alt="" width={40} className='hover:scale-125 transition-transform cursor-pointer'/>
            </a>
            </div>
            <div className='social'>
            <a href="https://github.com/Hemant2335" target='_blank'>
            <img src={git} alt="" width={40} className='hover:scale-125 transition-transform cursor-pointer' />
            </a>
            </div>
            <div className='social'>
            <a href="https://twitter.com/Nishant85292675" target='_blank'>
            <img src={twit} alt="" width={40} className='hover:scale-125 transition-transform cursor-pointer'/>
            </a>
            </div>
        </div>
    </div>
  )
}

export default Contact;