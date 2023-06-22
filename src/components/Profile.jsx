import React from 'react'
import Wrapper from './Wrapper'
import profile from "../assets/man.png";
import admin from "../assets/profile.png";
import { useState , useEffect } from 'react';

const Profile = () => {

    const [data, setdata] = useState("");

    useEffect(() => {
        const show = async()=>{
        const response = await fetch(`http://localhost:5000/api/auth/fetchuser`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token" : localStorage.getItem("token")
          },
        });
        
        const json = await response.json();
        
        setdata(json);
        console.log(data);
      }
      show();
      }, []);

  return (
    <Wrapper>
    <div className='flex justify-center my-[10vh]'>
        <div className='h-fit w-fit shadow-3xl flex flex-col md:flex-row gap-[10vh] justify-center items-center px-10 py-10'>
            
            <div className='shadow-3xl w-fit p-4 rounded-lg'>
            {data?.isadmin ? (<img src={admin} alt="" className='h-[30vh]' />) : (<img src={profile} alt="" className='h-[30vh]' />)}
                
            </div>
            <div className='flex flex-col gap-5 mb-10'>
                <div className='flex gap-5'>
                    <h2 className='text-xl font-poppins font-semibold'>Profile </h2>
                    {data?.isadmin ? (<h2 className='text-xl font-poppins font-medium'>Admin</h2>) : (<h2 className='text-xl font-poppins font-medium'>User</h2>)}
                    
                </div>
                <div className='flex gap-5'>
                    <h2 className='text-xl font-poppins font-semibold'>Name </h2>
                    <h2 className='text-xl font-poppins font-medium'>{data?.Name}</h2>
                </div>
                <div className='flex gap-5'>
                    <h2 className='text-xl font-poppins font-semibold'>Email</h2>
                    <h2 className='text-xl font-poppins font-medium'>{data?.Email}</h2>
                </div>
            </div>
        </div>
    </div>
    </Wrapper>
  )
}

export default Profile