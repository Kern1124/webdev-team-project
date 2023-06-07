import { Newspaper } from "@prisma/client";
import { NewspaperCreateData } from "../../types/newspaper.types";
import { db } from "../../utils/db.server";
import { Result } from "@badrap/result";

export const create = async (data: NewspaperCreateData): Promise<Result<Newspaper>> => {

    try {
        
        return Result.ok(await db.$transaction(async (transaction) => {
            // Check if there's an existing newspaper already
            const checkExisting: Newspaper | null = await transaction.newspaper.findFirst({
                where: {
                    name: data.name,
                }
            })
            // Throw an error if yes
            if (!checkExisting){
                throw new Error("Newspaper with this name already exists.");
            }

            //Otherwise create a new newspaper and return it
            return await transaction.newspaper.create({
                data: {
                    ...data,
                },
            })  
        }))

    } catch (err) {
        return Result.err(err as Error);
    }
}


