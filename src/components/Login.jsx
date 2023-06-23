import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Ordercontext from '../context/Context';
import { useContext } from 'react';
import { useEffect } from 'react';
const Login = () => {
  const [user, setuser] = useState({
    Email: "",
    Password : ""
  });

  const navigate = useNavigate();
  const {isAdmin, setIsAdmin}   = useContext(Ordercontext);
  const handlesubmit = async () => {
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: user.Email,
        Password: user.Password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.Check) {
      localStorage.setItem("token", json.authtoken);
      if (json?.status)
      {
        localStorage.setItem("isadmin" , true);
      }
      navigate("/");
    }
    else if (!json.Check)
    {
      alert("Invalid Login Credentials")
      console.log("Invalid Login Cred")
    }
  };

  const onchange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-w-screen justify-center items-center flex">
      <div className=" shadow-3xl p-10 my-[10vh]">
        <div className="w-full h-full mb-10 text-5xl font-poppins font-medium">
          <h2 className="text-center">Login</h2>
        </div>
        <div className="flex flex-col gap-10 font-poppins w-full py-4">
          <div className="bg-[#222222]  px-2 py-4 rounded-md flex gap-4 ">
            <h3>Email : </h3>
            <input type="text" className="border-none bg-[#222222]" onChange={onchange} name="Email"/>
          </div>
          <div className="bg-[#222222] px-2 py-4 rounded-md flex gap-2 ">
            <h3>Password :</h3>
            <input
              type="password"
              className="border-none bg-[#222222] w-fit focus:outline-0"
              name="Password"
              onChange={onchange}
            />
          </div>
        </div>
        <div className="flex items-center gap-2 my-4 text-right">
          <p className="text-sm font-poppins font-medium">
            Don't have a account?
          </p>
          <a
            onClick={() => navigate("/register")}
            className="text-sm font-poppins hover:text-red-400 font-medium cursor-pointer"
          >
            Register
          </a>
        </div>
        <div className="text-left">
        <a
            onClick={() => navigate("/Password")}
            className="text-sm font-poppins hover:text-red-400 font-medium cursor-pointer"
          >
            Forgot Password ? 
          </a>
          </div>
        <div className="flex justify-center">
          <button
            className="shadow-3xl font-medium font-poppins mt-5 text-xl px-4 py-2 bg-[#222222] rounded-md hover:bg-red-400 hover:text-black transition-transform"
            onClick={() => handlesubmit()}
          >
            Devour
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
