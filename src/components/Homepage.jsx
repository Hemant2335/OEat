import React from 'react'
import Wrapper from './Wrapper'
import poster from "../assets/poster.jpg";
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

  const navigate  = useNavigate();

  return (
    <Wrapper>
    <div className='p-4 my-10'>
      <div className='w-full h-fit bg-cover md:flex justify-between '>
        <div className='items-center mt-10'>
        <h1 className='text-7xl font-poppins font-bold'>
          The Best
        </h1>
        <h1 className='text-7xl font-poppins font-bold'>
          Pizza Services
        </h1>
        <h1 className='text-7xl font-poppins font-bold text-red-400'>
          in Your City
        </h1>
        <p className='text-xl font-poppins font-medium mt-10'>OEat assures quality and freshness of every pizza we delivery without geeting late.</p>
        {!localStorage.getItem("token")? (        <div className='mt-10'>
            <button
              className="shadow-3xl text-xl  font-medium font-poppins px-4 py-4 bg-[#222222] rounded-md hover:bg-red-400 hover:text-black transition-transform"
              onClick={() => navigate("/login")}
            >
              Get Started
            </button>
          </div>): (        <div className='mt-10'>
            <button
              className="shadow-3xl text-xl  font-medium font-poppins px-4 py-4 bg-[#222222] rounded-md hover:bg-red-400 hover:text-black transition-transform"
              onClick={() => navigate("/dashboard")}
            >
              Go to Dashboard
            </button>
          </div>)}

        </div>
        <img src={poster} alt="poster" className='hidden md:flex h-[80vh] rounded-lg' />
      </div>  
    </div>
    </Wrapper>
  )
}

export default Homepage