import { Router } from 'express'
import viewsController from '../controllers/views.controller.js'
import {publicValidation, privateValidation, executePolicies} from '../middlewares/auth.js'

const router = Router()

router.get('/',privateValidation, viewsController.home)
router.get('/register',publicValidation, viewsController.register)
router.get('/login',publicValidation,viewsController.login)
router.get('/loginfail', viewsController.loginfail)
router.get('/registerfail', viewsController.registerfail)
router.get('/productAdd',privateValidation,executePolicies(['ADMIN']), viewsController.productAdd)



export default router
