import express from "express";
import { number } from "yup";
import { newspaperById, newspaperPublisherRequest } from "../../models/newspaper";
import { Newspaper } from "@prisma/client";
import { NewspaperWithCopies } from "./newspaper.types";
import { db } from "../../utils/db.server";

const newspaperRouter = express.Router();

// V požadavku je záslán title newspaper a publisher name
// -> server vyfiltruje odpovídající newspapers a pošle je
// (filtrování normálně přes string contains substring).
// Ať se neposílá moc dat, tak by tenhle endpoint měl poslat jen jméno a id newspaperu,
// případně jestli v databází bude mít nějaký podnázev.


newspaperRouter.get("/newspapers/:publisher", async (req, res) => {
    const publisher: string = req.params.publisher;
    const validatedData = await newspaperPublisherRequest.validate(req.body);

    try {
        const newspapers: Newspaper[] = await db.newspaper.findMany({
            where: {
                publisher: {
                    name: publisher,
                },
                name: {
                    contains: validatedData.title,
                }
            }
        })

        if (newspapers.length == 0){
            res.status(404).json({message: "No newspapers found."});
            return
        }

        res.status(200).json({item: newspapers, message: "Found " + newspapers.length + " entries."});

    } catch (e) {
        res.status(500).json({message: "Internal error."})
    }

});

// V požadavku je zasláno id newspaperu a datum od-do ->
// server pošle daný newspaper spolu s jeho newspaper copies,
// opět bude stačit short info (název, id a datum).
// Vyfiltruje jeho newspaper copies podle data, pokud je datum
// null tak se pošlou všechny newspaper copies.


newspaperRouter.get("/newspapers/:id", async (req, res) => {

    const id: string  = req.params.id;
    const validatedData = await newspaperById.validate(req.body);

    try{
        const newspaper: NewspaperWithCopies | null = await  db.newspaper.findFirst({
            where: {
                id: id,
            },
            include: {
                newspaperCopies: {
                    where: {
                        date: {
                            lte: validatedData.to,
                            gte: validatedData.from
                        }
                    }
                },
            }
        });
        if(!newspaper) {
            res.status(404).json({message: "No newspaper found."})
            return
        }

        res.status(200).json({item: newspaper, message: "Newspaper found."})

    } catch (e) {
        res.status(500).json({message: "Internal error."})
    }

});


export default newspaperRouter;