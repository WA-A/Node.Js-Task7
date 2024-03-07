import  Jwt  from "jsonwebtoken";
const auth = (req,res,next)=>{
    const {token} = req.headers;
    if(!token){
        return res.json({message:"token is required"});
    }
    const decoded =  jwt.verify(token,process.env.TOKEN);
    req.userId = decoded.id;
    next();
};
export default auth;