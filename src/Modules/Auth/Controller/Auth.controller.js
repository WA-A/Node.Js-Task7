import UserModel from './../../../../Modle/UserModle.js';
import bcrypt from'bcrypt';

export const SignUp = async (req,res)=>{
    const{UserName,Email,Password}= req.body;
    const hashPassword = await bcrypt.hash(Password,8);
    const CreateUser = new UserModel({UserName,Email,Password:hashPassword});
    const user = await CreateUser.save();

    return res.json({message:"success",user});
}

export const SignIn = async (req,res)=>{
    const{Email,Password}= req.body;
    const user = await UserModel.findOne({Email,Password});
    if(user){
        return res.json({message:"success",user});
    }
    else{
        return res.json({message:"Invalid Data"});
    }
    
}