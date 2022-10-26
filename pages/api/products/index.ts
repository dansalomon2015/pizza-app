import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "util/";
import { Product } from "models";
import { IProduct } from "types";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IProduct>
) {
    const { method, body } = req;

    await dbConnect();

    if (method === "GET") {
    }
    if (method === "POST") {
        try {
            const product = new Product({ ...body });
            await product.save();
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json(error as any);
        }
    }
}
