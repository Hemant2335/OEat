import React from 'react'


const CartCard = ({item}) => {
  return (
    <div className='shadow-3xl py-4 px-4 flex gap-10 items-center md:flex-row flex-col'>
      <img src={item?.img_url} alt="poster" className='rounded-md' width={150} />
      <div className='flex flex-col gap-2 justify-center  items-center md:items-start'>
        <h2 className='text-xl font-poppins font-medium'>{item?.Name}</h2>
        <p className='text-md text-gray-500 font-poppins'>{item?.desc}</p>
        <h2 className='text-xl font-poppins font-medium'>₹ {item?.Price} </h2>
        <h2 className='text-lg font-poppins text-green-400 font-medium'>{item?.Status} </h2>
        <div>
        </div>
      </div>
    </div>
  )
}

export default CartCard ;