import UserModel from "../../../../Modle/UserModle.js";

export const GetUsers =  async (req,res)=>{
    const users = await UserModel.find({ConfirmEmail: false})
    return res.json({message:"success",users})
   }

   export const DeleteUser =  async (req,res)=>{
    
    const users = await UserModel.deleteOne({_id:decoded.id});
        return res.json({message:"success",users})
    }
    
   

   export const UpdateUser =  async (req,res)=>{
    // put token from login in update // so definr a user by token
    
    const {Email} = req.body;
    const user = await UserModel.findByIdAndUpdate({_id:id},{Email});
      
    return res.json({message:"success",user});
    
    /*if(user.modifiedCount  > 0){
        return res.json({message:"success",user});
      }
      return res.json({message:"error while updating"});*/
   }


