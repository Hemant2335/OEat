import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import AdminCard from "./AdminCard";
import { useNavigate } from 'react-router-dom';

const Custom = () => {
    const [pizza, setpizza] = useState([]);
    const [Sause, setSause] = useState([]);
    const [Cheese, setCheese] = useState([]);
    const [Veg, setVeg] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const show = async()=>{
      setisLoading(true);
      const response = await fetch(`http://localhost:5000/api/item/fetchallitems`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token" : localStorage.getItem("token")
        },
      });
      const json = await response.json();
      setpizza(json?.[0]);
      setSause(json?.[1]);
      setCheese(json?.[2]);
      setVeg(json?.[3]);
      setisLoading(false);
    }

    const changequantity = async (id , Name) => {
      const response = await fetch(`http://localhost:5000/api/item/updateuseritem`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          ID : id,
          itemname : Name
        }),
      });
      console.log(response);
    };

    useEffect(() => {
      show();    
    }, [])

    const handleReload = () => {
      window.location.reload();
    };
    
  return (
    <Wrapper>
      <div className="mt-10">
      <div className='flex justify-between'>
      <h1 className='text-4xl font-poppins font-semibold'>Inventory</h1>
      <button
              className="shadow-3xl font-medium font-poppins px-4 py-2 bg-[#222222] rounded-md hover:bg-red-400 hover:text-black transition-transform"
              onClick={()=>handleReload()}
            >
              Refresh
            </button>
      </div>
        </div>
        <h1 className="text-xl font-poppins font-semibold mt-10">
          Pizza
        </h1>
        <div className="flex gap-5 mt-10">
          {pizza?.MainName?.map((item) => {
            return (
              <AdminCard
                item={item}
                searchid = {pizza?._id}
                key={item?._id}
                handlepizzaclick={() => handlepizzaclick(item.Name , item?.imgurl , item?.Price)}
              />
            );
          })}
        </div>
        <h1 className="text-xl font-poppins font-semibold mt-10">
          Sause
        </h1>
        <div className="flex gap-5 mt-10">
          {Sause?.MainName?.map((item) => {
            return (
              <AdminCard
                item={item}
                searchid = {Sause?._id}
                key={item?._id}
                handlepizzaclick={() => handlesauseclick(item.Name , item?.imgurl, item?.Price)}
              />
            );
          })}
        </div>
        <h1 className="text-xl font-poppins font-semibold mt-10">
        Cheese
        </h1>
        <div className="flex gap-5 mt-10">
          {Cheese?.MainName?.map((item) => {
            return (
              <AdminCard
                item={item}
                searchid = {Cheese?._id}
                key={item?._id}
                handlepizzaclick={() => handlecheeseclick(item.Name , item?.imgurl, item?.Price)}
              />
            );
          })}
        </div>
        <h1 className="text-xl font-poppins font-semibold mt-10">
        Veggies
        </h1>
        <div className="flex gap-5 mt-10">
          {Veg?.MainName?.map((item) => {
            return (
              <AdminCard
                item={item}
                searchid = {Veg?._id}
                key={item?._id}
                handlepizzaclick={() => handlevegclick(item.Name , item?.imgurl, item?.Price)}
              />
            );
          })}
        </div>
    </Wrapper>
  );
};

export default Custom;
