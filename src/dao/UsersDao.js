import usersModel from './models/user.dao.js';

export default class UsersDao{

  getAll = () =>{
    return usersModel.find().lean();
  }

  getById = () =>{
    return usersModel.findOne({_id:id});
  }

  getByEmail = (email) =>{
    return usersModel.findOne({email});
  }

  save = (user) =>{
    return usersModel.create(user);
  }


}