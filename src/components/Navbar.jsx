import React from "react";
import logo from "../assets/burger.png";
import profile from "../assets/man.png";
import adminprofile from "../assets/profile.png";
import Wrapper from "./Wrapper";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [hidden, sethidden] = useState(true);
  const navigate = useNavigate();
  const toogledropdown = () => {
    sethidden(!hidden);
  };

  const handlelogout = ()=>{
    localStorage.removeItem('token'); 
    localStorage.removeItem("isadmin");
    navigate("/login");
  }

  return (
    <Wrapper>
      <div className="flex justify-between my-5 items-center font-poppins">
        <div className="flex gap-2 items-center cursor-pointer" onClick={()=>navigate("/")}>
          <img src={logo} alt="logo" className="h-10" />
          <h1 className="text-3xl text-white font-Dmsans font-bold">OEat</h1>
        </div>
        <nav>
          <ul className="hidden md:flex gap-10 justify-center items-center">
            <li
              className="font-medium font-poppins hover:text-red-400 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <a>Home</a>
            </li>
            <li
              className="font-medium font-poppins hover:text-red-400 cursor-pointer"
              onClick={()=>document.getElementById("about").scrollIntoView({behavior:"smooth"})}
            >
              <a>About</a>
            </li>
            <li
              className="font-medium font-poppins hover:text-red-400 cursor-pointer"
              onClick={()=>document.getElementById("contact").scrollIntoView({behavior:"smooth"})}
            >
              <a>Contact</a>
            </li>
          </ul>
        </nav>
        {!localStorage.getItem("token") ? (
          <div>
            <button
              className="shadow-3xl font-medium font-poppins px-4 py-2 bg-[#222222] rounded-md hover:bg-red-400 hover:text-black transition-transform"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        ) : (
          <div className="">
            <div
              className="shadow-3xl cursor-pointer w-fit font-medium font-poppins px-4 py-2 bg-[#222222] rounded-md hover:bg-red-400 hover:text-black transition-transform"
              onClick={() => toogledropdown()}
            >{localStorage.getItem("isadmin") ? (<img src={adminprofile} alt="profile" className="h-10" />) :(<img src={profile} alt="profile" className="h-10" />)}
              
            </div>
            {hidden ? (
              ""
            ) : (
              <>
                <div className="absolute my-5 p-4 shadow-3xl bg-[#222222] z-10 rounded-md">
                  <ul className="flex flex-col gap-2">
                    <li
                      className="font-medium font-poppins hover:text-red-400 cursor-pointer"
                      onClick={() => navigate("/profile")}
                    >
                      <a>Profile</a>
                    </li>
                    {localStorage.getItem("isadmin")? (                    <li
                      className="font-medium font-poppins hover:text-red-400 cursor-pointer"
                      onClick={() => navigate("/dashboard")}
                    >
                      <a>Dashboard</a>
                    </li>) : (                    <li
                      className="font-medium font-poppins hover:text-red-400 cursor-pointer"
                      onClick={() => navigate("/shop")}
                    >
                      <a>Shop</a>
                    </li>)}
                    {localStorage.getItem("isadmin")? (                    <li
                      className="font-medium font-poppins hover:text-red-400 cursor-pointer"
                      onClick={() => navigate("/adminorder")}
                    >
                      <a>Order</a>
                    </li>) : (                    <li
                      className="font-medium font-poppins hover:text-red-400 cursor-pointer"
                      onClick={() => navigate("/order")}
                    >
                      <a>Order</a>
                    </li>)}
                    <li
                      className="font-medium font-poppins hover:text-red-400 cursor-pointer"
                      
                    >
                      <a onClick={() => handlelogout()}>Logout</a>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Navbar;
