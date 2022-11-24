import { Router } from 'express';
import productsController from '../controllers/products.controller.js';
import uploader from '../services/uploader.js'


const router = Router()

router.get('/',productsController.getAllProducts)
router.post('/', uploader.single('thumbnail'), productsController.createProduct)



export default router;

