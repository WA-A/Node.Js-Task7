import UserModel from "../../../../Modle/UserModle.js";

export const GetUsers =  async (req,res)=>{
    const users = await UserModel.find({ConfirmEmail: false})
    return res.json({message:"success",users})
   }

   export const DeleteUser =  async (req,res)=>{
    const {id} = req.params
    const users = await UserModel.deleteOne({_id:id});
    if(users.deletedCount>0){
        return res.json({message:"success",users})
    }
    else{
        return res.json({message:"Invalid Data"});
    }
    
   }

   export const UpdateUser =  async (req,res)=>{
    const {id} = req.params;
    const {Email} = req.body;
    const user = await UserModel.findByIdAndUpdate({_id:id},{Email}
        );
      if(user.modifiedCount  > 0){
        return res.json({message:"success",user});
      }
      return res.json({message:"error while updating"});
   }


