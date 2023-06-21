import React from 'react'
import Wrapper from './Wrapper'
import AdminCartCard from './AdminCartCard'
import { useState } from 'react'
import { useEffect } from 'react'
import empty from "../assets/empty.jpg";
import { useNavigate } from 'react-router-dom'

const AdminOrder = () => {

  const navigate = useNavigate();

  const [data, setdata] = useState("");
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setisLoading(true);
    const show = async()=>{
    const response = await fetch(`http://localhost:5000/api/order/fetchadminorders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem("token")
      },
    });
    const json = await response.json();
    console.log(json);
    setdata(json);
    setisLoading(false);
    console.log(data);
  }
  show();
  }, []);


  const handleReload = () => {
    window.location.reload();
  };
  return (
    <Wrapper>
      <div>
        {(data.length==0) ? (    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-2 my-5">
        <img src={empty} alt="Success" className="rounded-md" width={400}/>
        <h2 className="text-center text-xl font-poppins font-medium">
          Nothing to show
        </h2>
      </div>
    </div>) : (<div className='mt-10'>
      <div className='flex justify-between'>
      <h1 className='text-4xl font-poppins font-semibold'>All Orders</h1>
      <button
              className="shadow-3xl font-medium font-poppins px-4 py-2 bg-[#222222] rounded-md hover:bg-red-400 hover:text-black transition-transform"
              onClick={()=>handleReload()}
            >
              Refresh
            </button>
      </div>
      {isLoading ? (
          <div className="flex justify-center items-center mb-10">
            {" "}
            <iframe
              src="https://embed.lottiefiles.com/animation/146441"
              className="rounded-md"
            ></iframe>{" "}
          </div>
        ) : (
          <div className='my-10'>
            {data?.map((item)=>{
              return(<AdminCartCard  key={item._id} item={item}/>)
            })} 
          </div>
        )}
    </div>)}
      </div>
    </Wrapper>
  )
}

export default AdminOrder ;


