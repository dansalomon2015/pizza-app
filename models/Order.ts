import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        customer: {
            type: String,
            required: true,
            maxLength: 60,
        },
        adress: {
            type: String,
            required: true,
            maxLength: 200,
        },
        total: {
            type: Number,
            default: 0,
        },
        status: {
            type: Number,
            required: true,
        },
        method: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
