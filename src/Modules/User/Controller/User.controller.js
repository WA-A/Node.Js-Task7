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
    // put token from login in update // so definr a user by token
    const {token} = req.headers;
    const decoded = jwt.verify(token.process.env.TOKEN);   // verify : is sure if token from it or no (not user modify)
    const id = decoded.id;
    const {Email} = req.body;
    const user = await UserModel.findByIdAndUpdate({_id:id},{Email});
      
    return res.json({message:"success",user});
    
    /*if(user.modifiedCount  > 0){
        return res.json({message:"success",user});
      }
      return res.json({message:"error while updating"});*/
   }


