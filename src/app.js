import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

//import routes
import viewsRouter from './routes/views.router.js'
import sessionsRouter from './routes/sessions.router.js'
import usersRouter from './routes/users.router.js'
import productsRouter from './routes/products.router.js'

import config from './config/config.js'
import initializePassport from './config/passport.config.js'
import __dirname from './utils.js'








initializePassport();

const app = express();

const PORT = config.app.PORT
const server = app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`)
})

console.log(config.mongo)
console.log(config.session)



const connection = mongoose.connect((`mongodb+srv://${config.mongo.USER}:${config.mongo.PASSWORD}@ecommerce1.dxk6fgr.mongodb.net/${config.mongo.DB}?retryWrites=true&w=majority`)
  ,err =>{
  if(err) console.log(err);
  else console.log('Base conectada a Atlas');
})




app.engine('handlebars',handlebars.engine())
app.set('views',__dirname+'/views');
app.set('view engine', 'handlebars');



app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))
app.use(cookieParser());
//use routes 
app.use('/', viewsRouter)
app.use('/api/sessions', sessionsRouter)
app.use('/api/users', usersRouter)
app.use('/api/products', productsRouter)
