import React from 'react'
import cool from "../assets/cool.png";

const Footer = () => {
  return (
    <div>
      <div className='h-[80px] w-full shadow-3xl flex justify-center items-center'>
        <h1 className=' font-poppins font-semibold flex gap-5 items-center'>Made by  <img src={cool} alt="" className='h-[4vh]' />Nishant Kumar</h1>
      </div>
    </div>
  )
}

export default Footer