import {Usercontroller} from '../controllers/usercontroller';
import * as express from "express";
import {validateUser} from '../middleware/auth';

export const userRoute = express.Router();

userRoute.get('/',validateUser,Usercontroller.getProfile);
userRoute.post('/login',Usercontroller.login);
userRoute.post('/register',Usercontroller.registration);
userRoute.put('/updateprofile',validateUser, Usercontroller.updateProfile);
