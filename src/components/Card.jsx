import React from 'react'
import { useState } from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Ordercontext from '../context/Context';



const Card = ({item}) => {
  const [OrderId, setOrderId] = useState('')
  const navigate = useNavigate();

  const addtocart = async () => {
    const response = await fetch(`http://localhost:5000/api/order/addorder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        Name: item?.Name,
        Price: item?.Price,
        desc: item?.desc,
        type: item?.type,
        img_url: item?.img_url,
        Quantity: item?.Quantity,
        Status : "Yet to be Delivered" 
      }),
    });
    console.log(response);
  };

  const handlebuy = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/buy/create-payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem("token")
      },
      body: JSON.stringify({
        amount: 1000,
      }),
    });

      const json = await response.json();

      const { id } = json;
      setOrderId(id);
      // Redirect the user to the Razorpay payment page
      const options = {
        key: 'rzp_test_dqAiGJZnvCIklf',
        amount: (Number(item.Price))*100, // Payment amount in paise or cents
        currency: 'INR',
        name: 'OEat',
        description: 'Payment for your order',
        order_id: OrderId,
        handler: response => {
          // Handle the payment success or failure
          addtocart();
          navigate("/success")
        },
        prefill: {
          email: 'knrt73373@gmail.com',
        }
      };

      const razorpayInstance = new Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='shadow-3xl py-4 px-4 flex gap-10 items-center md:flex-row flex-col'>
      <img src={item?.img_url} alt="poster" className='rounded-md' width={150} />
      <div className='flex flex-col gap-2 justify-center  items-center md:items-start'>
        <h2 className='text-xl font-poppins font-medium'>{item?.Name}</h2>
        <p className='text-md text-gray-500 font-poppins'>{item?.desc}</p>
        <h2 className='text-xl font-poppins font-medium'>₹ {item?.Price} </h2>
        <div>
        <button className="shadow-3xl flex items-center gap-2 font-medium font-poppins px-4 py-2 bg-[#222222] rounded-md hover:bg-red-400 hover:text-black transition-transform" onClick={()=>handlebuy()}>
            <TiShoppingCart/> Buy
        </button>
        </div>
      </div>
    </div>
  )
}

export default Card