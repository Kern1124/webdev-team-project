import { Request, Response } from "express";
import { db } from "../../utils/db.server";

const getAllCopies = async (req: Request, res: Response) => {
    try {
        const copies = await db.newspaper_copy.findMany({
            select: {
                date: true,
                newspaperId: true,
            }
            })
        res.status(200).json({ item: copies, message: "Fetched " + copies.length + " newspapers." });
    } catch (e) {
        res.status(500).json([]);
    }
}


export const newspaperCopyApi = {
    getAllCopies,
};
