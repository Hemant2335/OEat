import React from 'react'
import { useState } from 'react';


const AdminCartCard = ({item}) => {

    const [out, setout] = useState(true);

    const changestatus = async()=>{
        const response = await fetch(`http://localhost:5000/api/order/updateuserorder`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
              ID : item?._id
            }),
          });
        setout(false);
    }

  return (
    <div className='shadow-3xl py-4 px-4 flex gap-10 items-center md:flex-row flex-col'>
      <img src={item?.img_url} alt="poster" className='rounded-md' width={150} />
      <div className='flex flex-col gap-2 justify-center  items-center md:items-start'>
        <h2 className='text-xl font-poppins font-medium'>{item?.Name}</h2>
        <p className='text-md text-gray-500 font-poppins'>{item?.desc}</p>
        <h2 className='text-xl font-poppins font-medium'>₹ {item?.Price} </h2>
        <h2 className='text-lg font-poppins text-green-400 font-medium'>{item?.Status} </h2>
        {(item?.Status === "Yet to be Delivered")&&(out)? (        <button
              className="shadow-3xl font-medium font-poppins px-4 py-2 bg-[#222222] rounded-md hover:bg-red-400 hover:text-black transition-transform"
              onClick={()=>changestatus()}
            >
              Out for Delivery 
            </button>) : ("")}

        <div>
        </div>
      </div>
    </div>
  )
}

export default AdminCartCard ;