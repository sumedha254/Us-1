const jwt= require("jsonwebtoken");
const userdb =require("../models/userSchema");

const keysecret = "sumedhajoshimeerajoshi"

const authenticate = async(req,res,next)=>{

    try{

        const token = req.headers.authorisation;

       
        
        const verifytoken =jwt.verify(token,keysecret);
        
        const rootUser =await userdb.findOne({_id:verifytoken._id})

        if(!rootUser){throw new Error("User not found")}

        req.token=token
        req.rootUser= rootUser
        req.userId=rootUser._id

        next();
      

    }catch(error){
        res.status(401).json({status:401,message:"Unauthorised, No token provided"})

    }
}



module.exports = authenticate