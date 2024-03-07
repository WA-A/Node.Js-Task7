import  jwt  from "jsonwebtoken";
const auth = (req,res,next)=>{
    const {authorization} = req.headers;
    if(!authorization.startWith('Wasan__')){ // bearer token the before is named basic token
        return res.json({message:"token is required"}); 
    }
    const token = authorization.split(process.env.BERERTOKEN)[1];
    if(!token){
        return res.json({message:"token is required"});
    }
    const decoded =jwt.verify(token,process.env.TOKEN);
    req.userId = decoded.id;
    next();
};
export default auth;