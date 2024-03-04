import connectDB from './../../../../DB/Connection.js';
import AuthRouter from "./Auth.router.js";
import UserRouter from "../../User/Controller/User.router.js";
const Appinit =(app,express)=>{

    connectDB();
    app.use(express.json());
    app.use("/auth",AuthRouter);
    app.use("/user",UserRouter);
    app.use("/*",(req,res)=>{
        return res.json({message:"Page not Found"});
    })
}

export default Appinit;