"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usercontroller = void 0;
const User_1 = require("../models/User");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
class Usercontroller {
    static login(req, res, _next) {
        const private_key = process.env.PRIVATEKEY || '';
        User_1.User.findOne({ email: req.body.email }, (err, result) => {
            if (err) {
                res.status(500).json({ status: 'failed', message: err });
            }
            else {
                if (result != undefined) {
                    if (bcryptjs_1.compareSync(req.body.password, result.password)) {
                        const token = jsonwebtoken_1.sign({ id: result._id }, private_key, { expiresIn: '1h' });
                        res.json({ status: 'success', message: 'login succesful', data: token, role: result.role });
                    }
                    else {
                        res.json({ status: 'failed', message: "Usename or password is invalid" });
                    }
                }
                else {
                    res.json({ status: 'failed', message: "Usename or password is invalid" });
                }
            }
        });
    }
    static registration(req, res, _next) {
        const user = new User_1.User(req.body);
        User_1.User.create(user, (err, result) => {
            if (err) {
                res.status(500).json({ status: 'failed', message: err });
            }
            else {
                res.json({ status: 'success', message: 'Registartion is successful!', data: result });
            }
        });
    }
    static updateProfile(req, res, _next) {
        const userId = req.body.userid;
        User_1.User.findByIdAndUpdate(userId, {
            $set: {
                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
                addressinfo: req.body.addressinfo,
            }
        }, (err, _result) => {
            if (err) {
                res.status(500).json({ status: 'failed', message: err });
            }
            else {
                res.json({ status: 'success', message: 'user profile updated!', data: null });
            }
        });
    }
    static getProfile(req, res, next) {
        const userId = req.body.userId;
        User_1.User.findById(userId, (err, result) => {
            if (err) {
                res.status(500).json({ status: 'failed', message: err });
            }
            else {
                res.json({ status: 'success', message: 'Pofile Updated!', data: result });
            }
        });
    }
}
exports.Usercontroller = Usercontroller;
