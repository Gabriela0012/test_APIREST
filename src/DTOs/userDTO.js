export default class USerDTO{
  constructor(user){
    this.id = user._id,
    this.fullName = `${user.name} ${user.last_name}`,
    this.email = user.email
  }
}