import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "util/";
import { Product } from "models";
import { IProduct } from "types";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IProduct>
) {
    const {
        method,
        body,
        query: { id },
    } = req;

    await dbConnect();

    if (method === "GET") {
        try {
            const product = await Product.findById(id);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error as any);
        }
    }
    if (method === "PUT") {
        try {
            const product = new Product({ ...body });
            await product.save();
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json(error as any);
        }
    }
}
