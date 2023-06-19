import React from "react";
import { useNavigate } from "react-router-dom";
import done from "../assets/done.jpg"

const Sucess = () => {

  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-2 my-5">
        <img src={done} alt="Success" className="rounded-md" width={400}/>
        <h2 className="text-center text-xl font-poppins font-medium">
          Order Sucessfully Placed
        </h2>
        <div className="flex justify-center">
          <button
            className="shadow-3xl flex items-center gap-2 font-medium font-poppins px-4 py-2 bg-[#222222] rounded-md hover:bg-red-400 hover:text-black transition-transform"
            onClick={() => navigate("/order")}
          >
            Go to orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sucess;
