import React from "react";
import { useState } from "react";

const AdminCard = ({ item , searchid }) => {
  const [isinput, setisinput] = useState(false);
  const [text, settext] = useState("");

  const handleonclick = () => {
    setisinput(!isinput);
    console.log(text);
  };

  const changequantity = async (Name) => {
    const response = await fetch(`http://localhost:5000/api/item/updateitem`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        Quantity : text,
        ID : searchid,
        itemname : item?.Name
      }),
    });
    console.log(response);
    setisinput(!isinput);
  };


  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div
        className="w-fit shadow-3xl p-5 bg-[#222222] cursor-pointer hover:bg-red-400 rounded-lg"
        onClick={() => handleonclick()}
      >
        <img
          src={item?.imgurl}
          alt="poster"
          className="rounded-lg"
          width={200}
        />
        <h2 className="text-md font-poppins  text-center">{item.Name}</h2>
        <h2 className="text-md font-poppins  text-center">₹{item.Price}</h2>
        <h2 className="text-sm font-poppins text-gray-400  text-center">
          Quantity : {item.Quantity}
        </h2>
      </div>
      {isinput ? (
        <>
          {" "}
          <input
            type="Number"
            name="Name"
            className="border-none text-lg rounded-sm bg-[#222222] w-fit"
            onChange={(e)=>settext(e.target.value)}
          />
          <button
            className="shadow-3xl font-medium font-poppins px-4 py-2 bg-[#222222] rounded-md hover:bg-red-400 hover:text-black transition-transform"
            onClick={(()=>changequantity())}
          >
            Update
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default AdminCard;
