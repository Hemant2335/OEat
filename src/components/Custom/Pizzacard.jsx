import React from 'react'
import poster from "../../assets/poster.jpg";

const Pizzacard = ({item , handlepizzaclick}) => {
  return (
    <div className='w-fit shadow-3xl p-5 bg-[#222222] cursor-pointer hover:bg-red-400 rounded-lg' onClick={handlepizzaclick}>
    <img src={item?.imgurl} alt="poster" className='rounded-lg'  width={200} />
    <h2 className='text-md font-poppins  text-center'>{item.Name}</h2>
    <h2 className='text-md font-poppins  text-center'>₹{item.Price}</h2>
    <h2 className='text-sm font-poppins text-gray-400  text-center'>Quantity : {item.Quantity}</h2>
    </div>
  )
}

export default Pizzacard