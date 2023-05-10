import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log("Listening");
});