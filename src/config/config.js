import dotenv from "dotenv";

dotenv.config();


export default{
  app: {
    MODE:process.env.NODE || 'PROD',
    PORT: process.env.PORT || '8080',
    DEBUG: process.env.DEBUG || false,
    DOMAIN: process.env.DOMAIN 
    
  
  },
  session:{
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD
  },
  mongo:{
    USER: process.env.USER_MONGO,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB
  },
  jwt:{
    SECRET:process.env.JWT_SECRET,
    COOKIE:process.env.JWT_COOKIE
  }
  
}
