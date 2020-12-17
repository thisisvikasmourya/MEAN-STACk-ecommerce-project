import {Request,Response,NextFunction, Errback} from 'express';
import { User } from '../models/User';
import {compareSync} from 'bcryptjs'; 
import {sign} from 'jsonwebtoken';



export class Usercontroller {
   static login(req:Request,res:Response,_next:NextFunction) {
       
    const private_key:String | any = process.env.PRIVATEKEY || '';

      User.findOne({email : req.body.email},(err:Errback,result:any) => {
          if (err){
              res.status(500).json({status:'failed',message:err})
          } else {
              if (result !=undefined){
                  if (compareSync(req.body.password,result.password)){
                     const token = sign({id:result._id},private_key, {expiresIn : '1h'});
                      res.json({status :'success' , message: 'login succesful',data :token ,role:result.role })
                  }else {
                      res.json({status :'failed',message :"Usename or password is invalid" })
                  }
              } else {
                res.json({status :'failed',message :"Usename or password is invalid" })  
              }
          }
      }) 


    }

    static registration(req:Request,res:Response,_next:NextFunction) {
     const user = new User(req.body);
     User.create(user,(err: Errback,result:any)=>{
        if(err) {
            res.status(500).json (
                {status : 'failed',message:err}
            )}
            else {
                res.json
                (
                    {status:'success',message:'Registartion is successful!',data:result}
                )
            }
        
     })    
    }

    static updateProfile(req:Request,res:Response,_next:NextFunction) {
        const userId = req.body.userid;
        User.findByIdAndUpdate(userId,{
            $set : {
                FirstName:req.body.FirstName,
                LastName:req.body.LastName,
                addressinfo:req.body.addressinfo,
            }


        },(err: Errback,_result:any)=>{
           if(err) {
               res.status(500).json (
                   {status : 'failed',message:err}
               )}
               else {
                   res.json
                   (
                       {status:'success',message:'user profile updated!',data:null }
                   )
               }
           
        })
    }
    static getProfile(req: Request, res: Response, next: NextFunction) {
        const userId = req.body.userId;
        User.findById(userId, (err: Errback, result: any) => {
          if (err) {
            res.status(500).json({ status: 'failed', message: err })
          } else {
            res.json({ status: 'success', message: 'Pofile Updated!', data: result })
          }
        })
      }
}