export default class ProductService {
  constructor(dao) {
    this.dao = dao;
  }
  getProducts = async() =>{
    let result = await this.dao.getAll();
    return result.map(product=>product.toObject());
  }
  getAllProducts = () =>{
    return this.dao.getAll();
  }
  

  getProductById = async(id) =>{
    let result = await this.dao.getById(id);
    return result.toObject();
  }

  createProduct = (product) =>{
    return this.dao.save(product);
  }

  updateProduct = (id, product) =>{
    return this.dao.update(id, product);
  }


}