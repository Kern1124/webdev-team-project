import { Newspaper_copy } from "@prisma/client";
import { db } from "../../utils/db.server";
import { NewspaperCopyDeleteData } from "./newspaper_copy.types";
import { Result } from "@badrap/result";


export const create = async (data: NewspaperCopyDeleteData): Promise<Result<Newspaper_copy>> => {

    try {
        //Delete a newspaper_copy and return it
        return Result.ok(await db.newspaper_copy.delete({
            where: {
                id: data.id,
            },
        }));

    } catch (err) {
        return Result.err(err as Error);
    }
}