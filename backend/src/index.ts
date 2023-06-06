import express from "express";
import cookieParser from 'cookie-parser';
import * as dotenv from "dotenv";
import cors from 'cors';
import userSession from "./api/user/user.session";
import userRouter from "./api/user/user.router";
import articleRouter from "./api/article/article.router";

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}
))

app.use(userSession());
app.use('/user', userRouter);
app.use('/article', articleRouter)

app.listen(PORT, () => {
    console.log("Listening");
});