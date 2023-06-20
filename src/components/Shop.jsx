import React from "react";
import Wrapper from "./Wrapper";
import Banner from "../assets/banner.jpg";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [data, setdata] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const navigate  = useNavigate();
  useEffect(() => {
    setisLoading(true);
    const show = async()=>{
    const response = await fetch(`http://localhost:5000/api/store/fetchpizza`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem("token")
      },
    });
    const json = await response.json();
    setdata(json);
    setisLoading(false);
  }
  show();
  }, []);
  return (
    <Wrapper>
      <div>
        <div
          style={{ backgroundImage: `url(${Banner})` }}
          className="h-[70vh] w-full bg-cover rounded-md"
        />
        <div className="my-[5vh] flex justify-between">
          <h1 className="text-3xl font-poppins font-semibold">Top Items</h1>
          <button className="shadow-3xl font-medium font-poppins px-4 py-2 bg-[#222222] rounded-md hover:bg-red-400 hover:text-black transition-transform" onClick={()=>navigate("/custom")}>
            Make Custom
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
          <div>
            {data?.map((item)=>{
              return(<Card  key={item._id} item={item}/>)
            })} 
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Shop;
