import React from "react";
import logo from "../assets/burger.png";
import profile from "../assets/man.png";
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
    navigate("/login");
  }

  return (
    <Wrapper>
      <div className="flex justify-between my-5 items-center font-poppins">
        <div className="flex gap-2 items-center">
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
              onClick={() => navigate("/contact")}
            >
              <a>Contact</a>
            </li>
            <li
              className="font-medium font-poppins hover:text-red-400 cursor-pointer"
              onClick={() => navigate("/about")}
            >
              <a>About</a>
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
            >
              {" "}
              <img src={profile} alt="profile" className="h-10" />
            </div>
            {hidden ? (
              ""
            ) : (
              <>
                <div className="absolute my-5 p-4 shadow-3xl bg-[#222222] rounded-md">
                  <ul className="flex flex-col gap-2">
                    <li
                      className="font-medium font-poppins hover:text-red-400 cursor-pointer"
                      onClick={() => navigate("/")}
                    >
                      <a>Profile</a>
                    </li>
                    <li
                      className="font-medium font-poppins hover:text-red-400 cursor-pointer"
                      onClick={() => navigate("/dashboard")}
                    >
                      <a>Dashboard</a>
                    </li>
                    <li
                      className="font-medium font-poppins hover:text-red-400 cursor-pointer"
                      onClick={() => navigate("/order")}
                    >
                      <a>Orders</a>
                    </li>
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
