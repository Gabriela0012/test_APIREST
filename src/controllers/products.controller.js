import { productsService } from "../services/index.js";



const createProduct = async (req, res) => {
  if(!req.file) return res.status(500).send({status:'error', error:'Error al cargar la imagen'})
  const {name, price,description,code,stock} = req.body;
  console.log(req.body)
  if(!name||!price||!description||!code||!stock) return res.status(400).send({status:'error', error: 'valores incompletos'})
  const product = {
    name,
    price,
    thumbnail: `${req.protocol}://${req.hostname}:${process.env.PORT}/thumbnails/${req.file.filename}`,
    description,
    code,
    stock
  }
  let result = await productsService.createProduct(product);
  res.send({status:'success', payload: result})
} 

const getAllProducts = async (req, res) => {
  let result = await productsService.getAllProducts();

  console.log(result)
  res.send({status:"success", payload:result});

}


export default {
  createProduct,
  getAllProducts
}