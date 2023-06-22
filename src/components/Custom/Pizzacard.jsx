import React from "react";
import poster from "../../assets/poster.jpg";
import emailjs from "emailjs-com";
import { useEffect , useState } from "react";

emailjs.init("VyjRnBemLCagAcdN3");

const Pizzacard = ({ item, handlepizzaclick }) => {
  const [emailSent, setEmailSent] = useState(false);

  const emailAlert = () => {
    emailjs
      .send("service_jssx3ep", "template_rikejva", {
        to_email: "knrt73373@gmail.com",
        to_name: "Admin",
        subject: `Out of Stock`,
        message: `The product ${item?.Name} is out of stock. Please update the stock.`,
      })
      .then(function (response) {
        console.log("Email sent successfully:", response);
      })
      .catch(function (error) {
        console.error("Error sending email:", error);
      });
  };


  const handleemail = ()=>{
    if ((item?.Quantity == 20 && (!emailSent))||(item?.Quantity == 10 && (!emailSent))||(item?.Quantity == 0 && (!emailSent))) {
      emailAlert();
      console.log("email sent");
      setEmailSent(true);
    }
  }



  return (
    <>
      {!item?.Quantity == 0 ? (
        <div
          className="w-fit shadow-3xl p-5 bg-[#222222] cursor-pointer hover:bg-red-400 rounded-lg"
          onClick={()=>{handlepizzaclick(); handleemail();}}
        >
          <img
            src={item?.imgurl}
            alt="poster"
            className="rounded-lg"
            width={200}
          />
          <h2 className="text-md font-poppins  text-center">{item.Name}</h2>
          <h2 className="text-md font-poppins  text-center">₹{item.Price}</h2>
          {item?.Quantity == 0 ? (
            <h2 className="text-sm font-poppins text-gray-400  text-center">
              Out of Stock
            </h2>
          ) : (
            <h2 className="text-sm font-poppins text-gray-400  text-center">
              Quantity : {item.Quantity}
            </h2>
          )}
        </div>
      ) : (
        <div
          className="w-fit shadow-3xl p-5 bg-[#222222] rounded-lg"
        >
          <img
            src={item?.imgurl}
            alt="poster"
            className="rounded-lg"
            width={200}
          />
          <h2 className="text-md font-poppins  text-center">{item.Name}</h2>
          <h2 className="text-md font-poppins  text-center">₹{item.Price}</h2>
          {item?.Quantity == 0 ? (
            <h2 className="text-sm font-poppins text-gray-400  text-center">
              Out of Stock
            </h2>
          ) : (
            <h2 className="text-sm font-poppins text-gray-400  text-center">
              Quantity : {item.Quantity}
            </h2>
          )}
        </div>
      )}
    </>
  );
};

export default Pizzacard;
