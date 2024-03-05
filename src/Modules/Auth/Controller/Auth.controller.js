import UserModel from './../../../../Modle/UserModle.js';
import bcrypt from'bcrypt';
import jwt from 'jsonwebtoken';

export const SignUp = async (req,res)=>{
    try{
    const{UserName,Email,Password}= req.body;
    const hashPassword = await bcrypt.hash (Password,parseInt(process.env.SALTORROUNDS));
    const CreateUser = new UserModel({UserName,Email,Password:hashPassword});
    const user = await CreateUser.save();

    return res.json({message:"success",user});
}
    catch (error) {
        console.error('Error during signup:', error);
        return res.status(500).json({ message: 'server error' });
      }
}

export const SignIn = async (req,res)=>{
    const{Email,Password}= req.body;
    const user = await UserModel.findOne({Email,Password});
    if(!user){
        return res.json({message:"Invalid Email"});
        
    }
    const check = await bcrypt.compare(Password,user.Password);
    if(!check){
        return res.json({message:"Invalid Password"});
    }

    const token = jwt.sign({ id:user._id },process.env.TOKEN,{expiresIn:'1h'});  // {after Encryption return id },' password of token'
    return res.json({message:"success",token}); 
    // the value return in postman we put in headers in update (example) [return token]
    
}