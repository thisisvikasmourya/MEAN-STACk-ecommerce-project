import * as mongoose from 'mongoose';

export class MongoConnet{
    static connect() {
      const mongoDBconn = process.env.MONGODB_URL || "";

      
      return mongoose.connect(mongoDBconn,{useNewUrlParser:true},);

    }


}