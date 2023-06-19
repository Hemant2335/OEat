import React from 'react'
import Wrapper from './Wrapper'
import Card from './Card'

const Order = () => {
  return (
    <Wrapper>
    <div>
      <h1 className='text-4xl font-poppins font-semibold'>Your Orders</h1>
      {/* {isLoading ? (
          <div className="flex justify-center items-center mb-10">
            {" "}
            <iframe
              src="https://embed.lottiefiles.com/animation/146441"
              className="rounded-md"
            ></iframe>{" "}
          </div>
        ) : (
          <div>
            {data?.map((item)=>{
              return(<Card  key={item._id} item={item}/>)
            })} 
          </div>
        )} */}
        <div className='mt-10'>
          <Card/>
        </div>
    </div>
    </Wrapper>
  )
}

export default Order