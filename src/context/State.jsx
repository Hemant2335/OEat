import Ordercontext from "./Context";
import { useState } from "react";


const State = (props)=>{

    const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isadmin") === "Yes");
    const [order, setorder] = useState([]);


    return(
        <Ordercontext.Provider value={{isAdmin, setIsAdmin , order, setorder}}>
            {props.children}
        </Ordercontext.Provider>
    )

}

export default State ;