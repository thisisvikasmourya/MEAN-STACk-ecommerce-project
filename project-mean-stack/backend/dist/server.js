"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const userRoutes_1 = require("./routes/userRoutes");
const categoryRoutes_1 = require("./routes/categoryRoutes");
const productRoutes_1 = require("./routes/productRoutes");
const errorLogRoutes_1 = require("./routes/errorLogRoutes");
const cartRoutes_1 = require("./routes/cartRoutes");
const wishlistRoutes_1 = require("./routes/wishlistRoutes");
const orderRoutes_1 = require("./routes/orderRoutes");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db_1 = require("./db/db");
const helmet = require("helmet");
// import * as multer from 'multer';
dotenv.config({ path: ".env" });
var app = express();
app.use(helmet());
//app.get('/', (req,res) => res.send('this is get API'))
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT");
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/user", userRoutes_1.userRoute);
app.use("/category", categoryRoutes_1.categoryRoute);
app.use("/product", productRoutes_1.productRoute);
app.use("/Errorlog", errorLogRoutes_1.errorLogRoute);
app.use("/wishlist", wishlistRoutes_1.wishlistRoute);
app.use("/cart", cartRoutes_1.cartRoute);
app.use("/order", orderRoutes_1.orderRoute);
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
    db_1.MongoConnet.connect().then(_res => console.log("DB connected"));
    console.log("Server running on port 3000");
});
