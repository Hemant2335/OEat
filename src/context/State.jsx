import Ordercontext from "./Context";
import { useState } from "react";


const State = (props)=>{

    const [Orderdata, setOrderdata] = useState(    {
        Name : null,
        Price : null,
        desc: null ,
        type: null,
        img_url: null ,
        Quantity: 25
    })


    return(
        <Ordercontext.Provider value={{Orderdata , setOrderdata}}>
            {props.children}
        </Ordercontext.Provider>
    )

}

export default State ;