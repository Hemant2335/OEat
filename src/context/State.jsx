import Ordercontext from "./Context";
import { useState } from "react";


const State = (props)=>{

    const [isadmin, setisadmin] = useState(false);


    return(
        <Ordercontext.Provider value={{isadmin, setisadmin}}>
            {props.children}
        </Ordercontext.Provider>
    )

}

export default State ;