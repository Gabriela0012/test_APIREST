import {ROUTES} from '../constants/routes.js'



const home = (req,res) =>{
  const routes = ROUTES[req.user.role]
  res.render('home',{
    user: req.user,
    routes: routes
  });
  // res.render('home')
}

const register = (req,res) =>{
  res.render('register');
}

const login = (req,res) =>{
  res.render('login');
}

const loginfail = (req,res) =>{
  res.render('loginFail');
}

const registerfail = (req,res) =>{
  res.render('registerFail');
}

const productAdd = (req,res) =>{
  res.render('productAdd');
}


export default {
  home,
  login,
  loginfail,
  productAdd,
  register,
  registerfail
}
