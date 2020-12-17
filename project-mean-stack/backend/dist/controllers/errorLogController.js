"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorLogController = void 0;
const error_1 = require("../models/error");
class ErrorLogController {
    static getErrorLog(req, res, next) {
        error_1.Error.find({}, (err, result) => {
            if (err) {
                res.status(500).json({ status: 'failed', message: err });
            }
            else {
                res.json({ status: 'success', message: 'Error Log!', data: result });
            }
        });
    }
    static saveError(req, res, next) {
        const error = new error_1.Error(req.body);
        error_1.Error.create(error, (err, result) => {
            if (err) {
                res.status(500).json({ status: 'failed', message: err });
            }
            else {
                res.json({ status: 'success', message: 'Error saved!', data: {} });
            }
        });
    }
}
exports.ErrorLogController = ErrorLogController;
