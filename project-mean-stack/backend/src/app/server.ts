import * as express from 'express';
import {userRoute} from "./routes/userRoutes";
import {categoryRoute} from "./routes/categoryRoutes";
import {productRoute} from "./routes/productRoutes";
import { errorLogRoute } from './routes/errorLogRoutes';
import {cartRoute} from './routes/cartRoutes';
import { wishlistRoute } from './routes/wishlistRoutes';
import {orderRoute} from './routes/orderRoutes'
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import { MongoConnet } from './db/db';
import * as helmet from 'helmet';
// import * as multer from 'multer';

dotenv.config({path:".env"});

var app = express();
app.use(helmet());

//app.get('/', (req,res) => res.send('this is get API'))

app.use(function (req, res, next) {
  
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT");
  next();
});
 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use("/user",userRoute);
app.use("/category",categoryRoute);
app.use("/product",productRoute);
app.use("/Errorlog",errorLogRoute);
app.use("/wishlist", wishlistRoute);
app.use("/cart", cartRoute);
app.use("/order", orderRoute);



// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, __dirname + '/product')
//   },
//   filename: function (req, file, cb) {
//     return cb(null, file.originalname + '-' + Date.now())
//   }
// })

// const upload = multer({ storage: storage });
// app.post('/', upload.single('file'), function (req, res) {

//     console.log(req.body) // form fields
//     console.log(req.file) // form files
//     res.status(204).end()
// });




app.listen(process.env.PORT || 3000, () => {
  MongoConnet.connect().then(_res => console.log("DB connected"));
  console.log("Server running on port 3000");
});

  

