import { Publisher } from "@prisma/client"
import { db } from "../../utils/db.server"
import { Request, Response } from "express";


export const getAllPublishers =  async (req: Request, res: Response) => {
    try{

        const publishers: Publisher[] = await db.publisher.findMany();
        res.status(200).json({items: publishers, message: "Fetched " + publishers.length + " publishers"})

    } catch (e) {
        res.status(500).json({message: "Internal error.", error: e})
    }
}

export const publisherApi = {
    getAllPublishers,
};