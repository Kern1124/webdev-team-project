import express from "express";
import cookieParser from 'cookie-parser';
import * as dotenv from "dotenv";
import cors from 'cors';
import userSession from "./api/user/user.session";
import { userApi } from "./api/user/userApi";
import articleRouter from "./api/article/article.router";
import { newspaperApi } from "./api/newspaper/newspaperApi";

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:8000',
    credentials: true
}
))

app.use(userSession());
app.post('/register', userApi.register)
app.post('/login', userApi.login)
app.post('/logout', userApi.logout)
app.use('/article', articleRouter)
app.get('/newspaper', newspaperApi.getNewspapers)
app.get('/newspaper/:id', newspaperApi.getNewspapersByIdInverval)

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});