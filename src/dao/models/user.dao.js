import mongoose from "mongoose";
import moment from "moment";

const collection = 'Users';


const schema = new mongoose.Schema({ 
  email : {
    type: 'string',
    required:true,
    unique:true,
    index: { unique:true }
  },
  name:{
    type: 'string',
    required:true
  },
  last_name:String,
  age:Number,
  role:{
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  nickname:String,
  avatar_url:String,
  phone:String,
  timestamp:{
    type: String,
    default: ()=>moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
  },
  cart: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Carts',
  },
  password: {
    type: String,
    required:true

  }

})

const userModel = mongoose.model(collection,schema);


export default userModel;
