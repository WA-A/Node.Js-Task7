import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    UserName:{
       type:String,
       required:true
    },
    Email:{
        type:String,
        required:true
     },
     
     Password:{
        type:String,
        required:true
     },
     age:{
      type:Number
  },
     ConfirmEmail:{
        type:Boolean,
        default:false
     },
     gender:{
        type:String,
        enum:['Male','Female'],
        default:'Male'
     }
    },
    {
     timestamps:true,
    }  
);
 // ID IS DEFAULT

const UserModel = model('User',UserSchema);


export default UserModel;