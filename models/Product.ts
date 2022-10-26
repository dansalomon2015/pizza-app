import mongoose, { Schema, model, models } from "mongoose";
import { IProduct } from "types";

const ProductSchema = new Schema<IProduct>(
    {
        title: {
            type: String,
            required: true,
            maxLength: 60,
        },
        desc: {
            type: String,
            required: true,
            maxLength: 200,
        },
        img: {
            type: String,
            required: true,
        },
        prices: {
            type: [Number],
            required: true,
        },
        extraOption: {
            type: [
                { text: { type: String, required: true } },
                { price: { type: Number, required: true } },
            ],
        },
    },
    { timestamps: true }
);

// const ProductSchema = new mongoose.Schema(
//     {
//         title: {
//             type: String,
//             required: true,
//             maxLength: 60,
//         },
//         desc: {
//             type: String,
//             required: true,
//             maxLength: 200,
//         },
//         img: {
//             type: String,
//             required: true,
//         },
//         prices: {
//             type: [Number],
//             required: true,
//         },
//         extraOption: {
//             type: [
//                 { text: { type: String, required: true } },
//                 { price: { type: Number, required: true } },
//             ],
//         },
//     },
//     { timestamps: true }
// );

export const Product = models.Product || model<IProduct>("Product", ProductSchema);
