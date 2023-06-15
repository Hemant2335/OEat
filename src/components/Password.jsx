import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const Password = () => {
  const [user, setuser] = useState({
    Email: "",
  });
  const [code, setcode] = useState("");
  const [pass, setpass] = useState(false);
  const [inputcode, setinputcode] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
  });
  const [finalcode, setfinalcode] = useState("");

  const navigate = useNavigate();

  const sendEmail = () => {
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
  };

  const handlesubmit = async () => {
    setcode(Math.floor(Math.random() * 10000));
    const response = await fetch(`http://localhost:5000/api/auth/find`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: user.Email,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.Check) {
      sendEmail();
      setpass(true);
      // navigate("/otp")
    } else {
      alert("Invalid Login Cred");
      console.log("Invalid Login Cred");
    }
  };

  const onchange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const Onchange = (e) => {
    setinputcode({ ...inputcode, [e.target.name]: e.target.value });
  };

  const formcode = async()=>{
    let x = await (inputcode.code1*1000) + (inputcode.code2*100) + (inputcode.code3*10)  + (inputcode.code4*1);
    return x;
  }


  const handleverify  = async()=>{
    const formed_code  = await formcode(); 
    console.log("THe formed code is : " + formed_code );
    console.log("THe sent code is : " + code);
    if (formed_code == code)
    {
      console.log("Running");
    }
  }

  return (
    <div className="min-w-screen justify-center items-center flex transition-transform">
      <div className=" shadow-3xl p-10 my-[10vh] w-fit">
        <div className="w-full h-full mb-10 text-5xl font-poppins font-medium">
          <h2 className="text-center">Forgot Password</h2>
        </div>
        <div className="flex flex-col gap-10 font-poppins w-full py-4">
          <div className="bg-[#222222]  pl-2 py-4 rounded-md flex gap-4 ">
            <h3>Email : </h3>
            <input
              type="text"
              className="border-none bg-[#222222]"
              onChange={onchange}
              name="Email"
            />
          </div>
        </div>
        {!pass ? (
          ""
        ) : (
          <div class="flex mb-4 gap-10 w-full justify-center items-center">
            <input
              type="text"
              class="w-10 py-4 px-4 border-none rounded-md bg-[#222222]"
              maxlength="1"
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
          </div>
        )}
        {!pass ? (
          <div className="flex justify-center">
            <button
              className="shadow-3xl font-medium font-poppins mt-5 text-xl px-4 py-2 bg-[#222222] rounded-md hover:bg-red-400 hover:text-black transition-transform"
              onClick={() => handlesubmit()}
            >
              Submit
            </button>
          </div>
        ) : (
          <div className="flex justify-center">
            <button
              className="shadow-3xl font-medium font-poppins mt-5 text-xl px-4 py-2 bg-[#222222] rounded-md hover:bg-red-400 hover:text-black transition-transform"
              onClick={() => handleverify()}
            >
              Verify
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Password;
