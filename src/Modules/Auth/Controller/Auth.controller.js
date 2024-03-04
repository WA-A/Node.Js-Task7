import UserModel from './../../../../Modle/UserModle.js';


export const SignUp = async (req,res)=>{
    const{UserName,Email,Password}= req.body;
    const CreateUser = new UserModel({UserName,Email,Password});
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