var jwt = require('jsonwebtoken');
const User = require('../models/User');
const JWT = "NIshantismakingoeat" ;


const fetchuser = (req , res , next)=>{

    // Get the user ID from the Header
    const token = req.header('auth-token');
    if (!token)
    {
        res.status(401).send({error:"Please Authenticate using a valid token"})
    }
    try{
        const data = jwt.verify(token , JWT);
        req.user = data.user ;
        next();
    }catch(err)
    {
        console.log("Some error Occurred");   
    }

}

module.exports = fetchuser;