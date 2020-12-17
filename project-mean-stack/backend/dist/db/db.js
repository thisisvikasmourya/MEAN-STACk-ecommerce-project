"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoConnet = void 0;
const mongoose = require("mongoose");
class MongoConnet {
    static connect() {
        const mongoDBconn = process.env.MONGODB_URL || "";
        return mongoose.connect(mongoDBconn, { useNewUrlParser: true });
    }
}
exports.MongoConnet = MongoConnet;
