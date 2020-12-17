"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usercontroller = void 0;
class Usercontroller {
    static login(req, res, next) {
        res.json({ user: "test", success: "true" });
    }
    static registration(req, res, next) {
        console.log(req.body);
        res.json({ user: "test", success: "true" });
    }
    static updateProfile(req, res, next) {
        console.log(req.body);
        res.json({ user: "test", success: "true" });
    }
}
exports.Usercontroller = Usercontroller;
