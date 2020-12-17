import {Request,Response,NextFunction, Errback} from 'express';
import {Category} from '../models/Category';

export class CategoryController {
    static getCategories(req:Request,res:Response,next:NextFunction) {
        Category.find({},(err:Errback,result:any) => {
            if (err) {
                res.status(500).json({status : 'failed',message:err})
            } else {
                res.json
                   (
                       {status:'success',message:'categories Found!',data:result }
                   )
            }
        })
    }

static saveCategories(req:Request,res:Response,next:NextFunction){
    const categories = req.body ;
    Category.insertMany(categories,(err:Errback,result:any) => {
        if (err) {
            res.status(500).json({status : 'failed',message:err})
        } else {
            res.json
               (
                   {status:'success',message:'categories save!',data:result }
               )
        }
    })
    
}

}