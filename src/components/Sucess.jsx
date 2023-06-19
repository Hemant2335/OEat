import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import Ordercontext from "../context/Context";

const Sucess = () => {
  const { Orderdata, setOrderdata } = useContext(Ordercontext);

  const navigate = useNavigate();
  useEffect(() => {
    console.log(Orderdata);

    const show = async () => {
      const response = await fetch(`http://localhost:5000/api/order/addorder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          Name: Orderdata?.Name,
          Price: Orderdata?.Price,
          desc: Orderdata?.desc,
          type: Orderdata?.type,
          img_url: Orderdata?.img_url,
          Quantity: Orderdata?.Quantity,
        }),
      });
      console.log(response);
    };
    show();
  }, [Orderdata]);
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col gap-10">
        <iframe
          src="https://embed.lottiefiles.com/animation/88860"
          className="rounded-md"
        ></iframe>
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
