import mongoose from "mongoose";
import moment from "moment";

const collection = 'Products';


const schema = new mongoose.Schema({ 

  name:{
    type: 'string',
    required:true
  },
  price:Number,
  thumbnail:String,
  description:String,
  code:String,
  stock:Number,
  timestamp:{
    type: String,
    default: ()=>moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
  }
})

const productModel = mongoose.model(collection,schema);


export default productModel;