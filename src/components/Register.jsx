import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { useEffect } from "react";
import emailjs from "emailjs-com";

const Register = () => {
  const [user, setuser] = useState({
    Name: "",
    Email: "",
    Password: "",
  });
  const [isemailverify, setisemailverify] = useState(false);
  const [code, setcode] = useState("");
  const [pass, setpass] = useState(false);
  const [inputcode, setinputcode] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
  });

  const navigate = useNavigate();

  const Onchange = (e) => {
    setinputcode({ ...inputcode, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    setcode(Math.floor(Math.random() * 10000));
  },[])

  const formcode = async()=>{
    let x = await (inputcode.code1*1000) + (inputcode.code2*100) + (inputcode.code3*10)  + (inputcode.code4*1);
    return x;
  }

  const handleverify  = async()=>{
    const formed_code  = await formcode(); 
    console.log(formed_code);
    console.log(code);
    if (formed_code == code)
    {
      console.log("Success");
      setpass(false);
      setisemailverify(true);
    }
  }

  const handlesubmit = async () => {
    if (isemailverify) {
      const response = await fetch(
        `http://localhost:5000/api/auth/createuser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Email: user.Email,
            Password: user.Password,
            Name: user.Name,
          }),
        }
      );
      const json = await response.json();
      console.log(json);
      if (json.Check) {
        localStorage.setItem("token", json.authtoken);
        navigate("/");
      }
      else
      {
        alert(json.error)
      }
    } else {
      alert("Please verify Your Email");
    }
  };

  const emailverify = () =>
  {
    emailjs.init("VyjRnBemLCagAcdN3");
    emailjs
      .send("service_jssx3ep", "template_rikejva", {
        to_email: user.Email,
        to_name: "User",
        subject: "My Subject",
        message: `Hello, the verification  code is : ${code} `,
      })
      .then(function (response) {
        console.log("Email sent successfully:", response);
        setpass(response.text);
        return true;
      })
      .catch(function (error) {
        console.error("Error sending email:", error);
      });
  }

  const onchange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-w-screen justify-center items-center flex">
      <div className=" shadow-3xl p-10 my-[10vh]">
        <div className="w-full h-full mb-10 text-5xl font-poppins font-medium">
          <h2 className="text-center">Register</h2>
        </div>
        <div className="flex flex-col gap-10 font-poppins w-full py-4">
          <div className="bg-[#222222]  px-2 py-4 rounded-md flex gap-4 ">
            <h3>Name : </h3>
            <input
              type="text"
              name="Name"
              className="border-none bg-[#222222]"
              onChange={onchange}
            />
          </div>
          <div className="bg-[#222222]  px-2 py-4 rounded-md flex justify-around items-center">
            <h3>Email : </h3>
            <input
              type="text"
              name="Email"
              className="border-none bg-[#222222]"
              onChange={onchange}
            />
            {(!isemailverify) ? (<MdEmail className="cursor-pointer text-xl hover:scale-105 transition-transform" onClick={()=>emailverify()}/>):(<MdMarkEmailRead className="cursor-pointer text-xl hover:scale-105 transition-transform"/>)}
            
          </div>
          {!pass ? (
          ""
        ) : (
          <div class="flex mb-4 gap-10 w-full justify-center items-center">
            <input
              type="text"
              class="w-10 py-4 px-4 border-none rounded-md bg-[#222222]"
              maxLength="1"
              name="code1"
              onChange={Onchange}
            />
            <input
              type="text"
              class="w-10 py-4 px-4 border-none rounded-md bg-[#222222]"
              maxlength="1"
              name="code2"
              onChange={Onchange}
            />
            <input
              type="text"
              class="w-10 py-4 px-4 border-none rounded-md bg-[#222222]"
              maxlength="1"
              name="code3"
              onChange={Onchange}
            />
            <input
              type="text"
              class="w-10 py-4 px-4 border-none rounded-md bg-[#222222]"
              maxlength="1"
              name="code4"
              onChange={Onchange}
            />
            <div className="flex justify-center">
            <button
              className="shadow-3xl font-medium font-poppins px-4 py-2 bg-[#222222] rounded-md hover:bg-red-400 hover:text-black transition-transform"
              onClick={() => handleverify()}
            >
              Verify
            </button>
          </div>
          </div>
        )}
          <div className="bg-[#222222] px-2 py-4 rounded-md flex gap-2 ">
            <h3>Password :</h3>
            <input
              type="text"
              name="Password"
              className="border-none bg-[#222222] w-fit focus:outline-0"
              onChange={onchange}
            />
          </div>
        </div>
        <div className="flex items-center gap-2 my-4">
          <p className="text-sm font-poppins font-medium">
            Already have a account?
          </p>
          <a
            onClick={() => navigate("/login")}
            className="text-sm font-poppins hover:text-red-400 font-medium cursor-pointer"
          >
            Login
          </a>
        </div>
        <div className="flex justify-center">
          <button
            className="shadow-3xl font-medium font-poppins mt-5 text-xl px-4 py-2 bg-[#222222] rounded-md hover:bg-red-400 hover:text-black transition-transform"
            onClick={() => handlesubmit()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
