import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Pizzacard from "./Custom/Pizzacard";
import { TiShoppingCart } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import poster from "../assets/poster.jpg"

const Custom = () => {
    const [base, setbase] = useState({name : null , url : null ,price : null});
    const [sause, setsause] = useState({name : null , url : null,price : null});
    const [cheese, setcheese] = useState({name : null , url : null,price : null});
    const [veg, setveg] = useState({name : null , url : null , price : null});
    const [pizza, setpizza] = useState([]);
    const [Sause, setSause] = useState([]);
    const [Cheese, setCheese] = useState([]);
    const [Veg, setVeg] = useState([]);
    const [json, setjson] = useState("");
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
      setpizza(json?.[0]?.Pizza);
      setSause(json?.[1]?.Sause);
      setCheese(json?.[2]?.Cheese);
      setVeg(json?.[3]?.Veg);
      console.log(json?.[0]?.Pizza?.[0]?.Quantity);
      setisLoading(false);
    }

    useEffect(() => {
      show();    
    }, [])


  const custompizza = {
    Base: base, 
    Sause: sause,
    Cheese: cheese,
    Veg: veg
  }

  

  const handlepizzaclick = (name , imgurl ,price) => {
    setbase({base : name , url : imgurl,price:price});
  }
  const handlesauseclick = (name , imgurl,price) => {
    setsause({base : name , url : imgurl,price:price});
  }
  const handlecheeseclick = (name , imgurl ,price) => {
    setcheese({base : name , url : imgurl ,price:price});
  }
  const handlevegclick = (name , imgurl,price) => {
    setveg({base : name , url : imgurl,price:price});
  }

  const addtocart = async () => {
    const response = await fetch(`http://localhost:5000/api/order/addorder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        Name: "Custom",
        Price: (Number(custompizza?.Base?.price) +Number(custompizza?.Sause?.price) + Number(custompizza?.Cheese?.price) + Number(custompizza?.Veg?.price) ),
        desc: "This is  a custom made by you yourself",
        type: "veg",
        img_url: poster,
        Quantity: 25,
        Status : "Yet to be Delivered"
      }),
    });
    console.log(response);
  };

  
  const [OrderId, setOrderId] = useState('')
  const navigate = useNavigate();


  const handlebuy = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/buy/create-payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem("token")
      },
      body: JSON.stringify({
        amount: 1000,
      }),
    });

      const json = await response.json();

      const { id } = json;
      setOrderId(id);
      // Redirect the user to the Razorpay payment page
      const options = {
        key: 'rzp_test_dqAiGJZnvCIklf',
        amount: (Number(custompizza?.Base?.price) +Number(custompizza?.Sause?.price) + Number(custompizza?.Cheese?.price) + Number(custompizza?.Veg?.price) )*100, // Payment amount in paise or cents
        currency: 'INR',
        name: 'OEat',
        description: 'Payment for your order',
        order_id: OrderId,
        handler: response => {
          // Handle the payment success or failure
          addtocart();
          navigate("/success")
        },
        prefill: {
          email: 'knrt73373@gmail.com',
        }
      };

      const razorpayInstance = new Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div className="mt-10">
        <h1 className="text-xl font-poppins font-semibold">Custom Pizza</h1>
         {/* base */}
        <div className="flex gap-5 mt-10">
        {(custompizza?.Base?.url) ? (<>          <div
            className="w-fit shadow-3xl p-5 flex flex-col gap-2 bg-[#222222] rounded-lg"
          >
            <img src={custompizza?.Base?.url} alt="poster" className="rounded-lg" width={200} />
            <h2 className="text-md font-poppins  text-center">{custompizza?.Base?.base}</h2>
            <h2 className="text-md font-poppins  text-center">₹{custompizza?.Base?.price}</h2>
          </div>
          <div className="flex justify-center items-center">
          <h1 className="text-2xl">+</h1>
          </div></>):("")}
            {/* Sause */}

            {(custompizza?.Sause?.url) ? (<>          <div
            className="w-fit shadow-3xl p-5 flex flex-col gap-2 bg-[#222222] rounded-lg"
          >
            <img src={custompizza?.Sause?.url} alt="poster" className="rounded-lg" width={200} />
            <h2 className="text-md font-poppins  text-center">{custompizza?.Sause?.base}</h2>
            <h2 className="text-md font-poppins  text-center">₹{custompizza?.Sause?.price}</h2>
          </div>
          <div className="flex justify-center items-center">
          <h1 className="text-2xl">+</h1>
          </div></>):("")}

            {/* Cheese */}

            {(custompizza?.Cheese?.url) ? (<>          <div
            className="w-fit shadow-3xl p-5 flex flex-col gap-2 bg-[#222222] rounded-lg"
          >
            <img src={custompizza?.Cheese?.url} alt="poster" className="rounded-lg" width={200} />
            <h2 className="text-md font-poppins  text-center">{custompizza?.Cheese?.base}</h2>
            <h2 className="text-md font-poppins  text-center">₹{custompizza?.Cheese?.price}</h2>
          </div>
          <div className="flex justify-center items-center">
          <h1 className="text-2xl">+</h1>
          </div></>):("")}

            {/* Veggese */}

            {(custompizza?.Veg?.url) ? (<>          <div
            className="w-fit shadow-3xl p-5 flex flex-col gap-2 bg-[#222222] rounded-lg"
          >
            <img src={custompizza?.Veg?.url} alt="poster" className="rounded-lg" width={200} />
            <h2 className="text-md font-poppins  text-center">{custompizza?.Veg?.base}</h2>
            <h2 className="text-md font-poppins  text-center">₹{custompizza?.Veg?.price}</h2>
          </div></>):("")}

        
        {custompizza.Base?.url && custompizza.Sause?.url && custompizza.Cheese?.url && custompizza.Veg.url && (          <div className="flex justify-center items-center">
          <button className="shadow-3xl flex items-center gap-2 font-medium font-poppins px-4 py-2 bg-[#222222] rounded-md hover:bg-red-400 hover:text-black transition-transform" onClick={()=>handlebuy()}>
            <TiShoppingCart/> Buy
        </button>
        </div> )}

          
        </div>
        <h1 className="text-xl font-poppins font-semibold mt-10">
          Select the Base Pizza
        </h1>
        <div className="flex gap-5 mt-10">
          {pizza?.map((item) => {
            return (
              <Pizzacard
                item={item}
                handlepizzaclick={() => handlepizzaclick(item.Name , item?.imgurl , item?.Price)}
              />
            );
          })}
        </div>
        <h1 className="text-xl font-poppins font-semibold mt-10">
          Select Sause
        </h1>
        <div className="flex gap-5 mt-10">
          {Sause?.map((item) => {
            return (
              <Pizzacard
                item={item}
                handlepizzaclick={() => handlesauseclick(item.Name , item?.imgurl, item?.Price)}
              />
            );
          })}
        </div>
        <h1 className="text-xl font-poppins font-semibold mt-10">
          Select the Cheese
        </h1>
        <div className="flex gap-5 mt-10">
          {Cheese?.map((item) => {
            return (
              <Pizzacard
                item={item}
                handlepizzaclick={() => handlecheeseclick(item.Name , item?.imgurl, item?.Price)}
              />
            );
          })}
        </div>
        <h1 className="text-xl font-poppins font-semibold mt-10">
          Select the Veggies
        </h1>
        <div className="flex gap-5 mt-10">
          {Veg?.map((item) => {
            return (
              <Pizzacard
                item={item}
                handlepizzaclick={() => handlevegclick(item.Name , item?.imgurl, item?.Price)}
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Custom;
