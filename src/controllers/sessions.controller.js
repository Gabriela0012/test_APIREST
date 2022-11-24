// import logger from '../middleware/logger.js'
import { createHash, isValidPassword } from '../utils.js'
import { usersService, cartsService } from '../services/index.js'
import jwt from 'jsonwebtoken'
import config from '../config/config.js'



const register =  async (req,res)=>{
  const {name,last_name,age,nickname,avatar,email,password} = req.body;
  console.log(req.body)
  
  if(!email||!name||!last_name||!age||!nickname||!avatar||!password) return res.status(400).send({status: 'error'});
  console.log(req.body.email, 'hola aqui esta el mail')
      // logger.info(`Email de persona registrada ${req.method} ${req.url} ${req.body.email}`);
  const exists = await usersService.getUserByEmail(req.body.email)
      // logger.info(exists, `${req.method} ,${req.url} `)
  console.log(exists)

  if(exists) return res.status(400).send({status:'error', error: 'el usuario ya existe'})
  const cart = await cartsService.createCart();
      
  const newUser={
    email,
    name,
    last_name,
    age,
    nickname,
    avatar,
    password:createHash(password),
    cart:cart._id
  }
  let result = await usersService.saveUser(newUser);
  res.send({status:'success', payload:result}) 
}

const login = async (req, res) => {
  const {email, password} = req.body;
  if(!email || !password) return res.status(400).send({status:'error',error: 'valores incompletos'})
  if(email===config.session.ADMIN_EMAIL&&password===config.session.ADMIN_PASSWORD){
    const sessionAdminUser = {
      name: 'Admin',
      role: 'admin',
      id: '0'
    }
    const token = jwt.sign(sessionAdminUser,config.jwt.SECRET,{expiresIn:'1h'})
    return res.cookie(config.jwt.COOKIE,token,{maxAge:3600000}).send({status:'success', message:'logueado'})
  };

  const user = await usersService.getUserByEmail(email);
  if(!user) return res.status(400).send({status:'error',error:'usuario no xiste'});
  if(!isValidPassword(user,password))return res.status(400).send({status:'error',error:'error en la contraseña'})
  const tokenUser = {
    email: user.email,
    role: user.role,
    name: user.name,
    id: user._id,
    cart: user.cart
  }

  const token = jwt.sign(tokenUser,config.jwt.SECRET,{expiresIn:'1h'})
  res.cookie(config.jwt.COOKIE,token,{maxAge:3600000}).send({status:'success', message:'logueado'})

}


export default{
  login,
  register
}