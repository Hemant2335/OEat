import React from 'react'
import Wrapper from './Wrapper'
import CartCard from './CartCard'
import { useState } from 'react'
import { useEffect } from 'react'
import empty from "../assets/empty.jpg";
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Ordercontext from '../context/Context'

const Order = () => {

  const navigate = useNavigate();

  const {setorder} = useContext(Ordercontext);

  const [data, setdata] = useState("");
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setisLoading(true);
    const show = async()=>{
    const response = await fetch(`http://localhost:5000/api/order/fetchallorders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem("token")
      },
    });
    const json = await response.json();
    setdata(json);
    setorder(json);
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
        <div className="flex justify-center">
          <button
            className="shadow-3xl flex items-center gap-2 font-medium font-poppins px-4 py-2 bg-[#222222] rounded-md hover:bg-red-400 hover:text-black transition-transform"
            onClick={() => navigate("/shop")}
          >
            Go to Shopping
          </button>
        </div>
      </div>
    </div>) : (<div>
      <div className='flex justify-between'>
      <h1 className='text-4xl font-poppins font-semibold'>Your Orders</h1>
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
              return(<CartCard  key={item._id} item={item}/>)
            })} 
          </div>
        )}
    </div>)}
      </div>
    </Wrapper>
  )
}

export default Order


