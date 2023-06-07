import { Result } from "@badrap/result";
import { db } from "../../utils/db.server";
import { Newspaper_copy } from "@prisma/client";
import { NewspaperCopyCreateData } from "../../types/newspaper_copy.types";

export const create = async (data: NewspaperCopyCreateData): Promise<Result<Newspaper_copy>> => {

    try {
        //Create a new newspaper_copy and return it
        return Result.ok(await db.newspaper_copy.create({
            data: {
                ...data,
            },
        }));
    } catch (err) {
        return Result.err(err as Error);
    }
}