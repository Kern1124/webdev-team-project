import express from "express";
import cookieParser from 'cookie-parser';
import * as dotenv from "dotenv";
import cors from 'cors';
import userSession from "./api/user/user.session";
import { userApi } from "./api/user/userApi";
import { newspaperApi } from "./api/newspaper/newspaperApi";
import { publisherApi } from "./api/publisher/publisherApi";

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
app.get('/newspaper/:publisher', newspaperApi.getNewspaperByPublisher)
app.get('/newspaper/:id', newspaperApi.getNewspapersByIdInverval)
app.get('/publisher', publisherApi.getAllPublishers)
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});