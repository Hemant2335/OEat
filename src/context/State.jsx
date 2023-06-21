import Ordercontext from "./Context";
import { useState } from "react";


const State = (props)=>{

    const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isadmin") === "Yes");


    return(
        <Ordercontext.Provider value={{isAdmin, setIsAdmin}}>
            {props.children}
        </Ordercontext.Provider>
    )

}

export default State ;