"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    productName: {
        type: String,
        // required: true,
        trim: true
    },
    category: {
        type: String,
        // required: true,
        trim: true,
    },
    description: {
        type: String,
        // required: true,
        trim: true,
    },
    imageUrl: {
        type: String,
        // required: true,
        trim: true,
    },
    price: {
        type: Number,
    },
    outOfStock: {
        type: Boolean,
        default: false
    }
});
exports.Product = mongoose_1.model('Product', ProductSchema);
