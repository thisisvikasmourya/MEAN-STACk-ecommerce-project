"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = require("bcryptjs");
const salt_Round = process.env.SALT_ROUND;
let addressinfo = new mongoose_1.Schema({
    addressline1: String,
    addressline2: String,
    city: String,
    pin: String
});
let UserSchema = new mongoose_1.Schema({
    FirstName: {
        type: String,
    },
    lastName: {
        type: String,
        // required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        // required: true,
        unique: true
    },
    password: {
        type: String,
        // required: true,
        trim: true,
        maxlength: 12
    },
    mobile: {
        type: String,
        trim: true,
    },
    dob: {
        type: Date,
        trim: true,
    },
    role: {
        type: String,
        trim: true,
        required: true,
        default: 'User'
    },
    addressinfo: addressinfo
});
UserSchema.pre('save', function (next) {
    const user = this;
    if (user.isModified("password")) {
        const saltRound = salt_Round;
        bcryptjs_1.genSalt(saltRound, (err, salt) => {
            bcryptjs_1.hash(user.password, salt, (err, hash) => {
                if (err) {
                    throw err;
                }
                else {
                    user.password = hash;
                    next();
                }
            });
        });
    }
    else {
        next();
    }
});
exports.User = mongoose_1.model('User', UserSchema);
