import { usersService } from "../services/index.js";



const getUsers = async (req, res) => {
  let result = await usersService.getUsers();

  console.log(result)
  res.send({status:"success", payload:result});

}


const getUsersById = async (req, res) => {
  const {uid} = req.params;
  let user  = await usersService.getUserById();
  if(!user) return  res.status(400).send({status:"error",error:'Usuario no encontrado'});
}

const getUsersByEmail = async (req, res) => {
  const {email} = req.body;
  let user = await usersService.getUserByEmail(email);
  return user
}


export default{
  getUsers,
  getUsersById,
  getUsersByEmail,
  

}
