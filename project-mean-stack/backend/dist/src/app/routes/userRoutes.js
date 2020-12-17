"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const usercontroller_1 = require("../controllers/usercontroller");
const express = require("express");
exports.userRoute = express.Router();
exports.userRoute.get('/', usercontroller_1.Usercontroller.login);
exports.userRoute.post('/register', usercontroller_1.Usercontroller.registration);
exports.userRoute.put('/updateprofile', usercontroller_1.Usercontroller.updateProfile);
