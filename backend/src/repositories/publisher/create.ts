import { Result } from "@badrap/result";
import { db } from "../../utils/db.server";
import { Publisher } from "@prisma/client";
import { PublisherCreateData } from "../../types/publisher.types";

export const create = async (data: PublisherCreateData): Promise<Result<Publisher>> => {

    try {
        return Result.ok(await db.$transaction(async (transaction) => {

            const existingPublisher: Publisher | null = await transaction.publisher.findFirst({
                where: {
                    name: data.name
                }
            })

            if (!existingPublisher){
                throw new Error("Publisher with this name already exists!");
            }

            return await transaction.publisher.create({
                data: {
                    ...data
                }
            });

        }));

    } catch (err) {
        return Result.err(err as Error);
    }
}