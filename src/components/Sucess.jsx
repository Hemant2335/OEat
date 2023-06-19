import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sucess = () => {

  const navigate = useNavigate();


  return (
    <div className='flex min-h-screen justify-center items-center'>
        <div className='flex flex-col gap-10'>
        <iframe src="https://embed.lottiefiles.com/animation/88860" className='rounded-md'></iframe>
        <h2 className='text-center text-xl font-poppins font-medium'>Order Sucessfully Placed</h2>
        <div className='flex justify-center'>
        <button className="shadow-3xl flex items-center gap-2 font-medium font-poppins px-4 py-2 bg-[#222222] rounded-md hover:bg-red-400 hover:text-black transition-transform" onClick={()=>navigate("/order")}>
            Go to orders
        </button>
        </div>
        </div>
    </div>
  )
}

export default Sucess