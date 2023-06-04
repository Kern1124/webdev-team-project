import express from "express";
import cookieParser from 'cookie-parser';
import * as dotenv from "dotenv";
import cors from 'cors';
import userSession from "api/user/user.session";

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(userSession());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}
))

app.listen(PORT, () => {
    console.log("Listening");
});