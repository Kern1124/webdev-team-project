import express from "express";
import cookieParser from 'cookie-parser';
import * as dotenv from "dotenv";
import cors from 'cors';
import userSession from "./api/user/user.session";
import { userApi } from "./api/user/userApi";
import { newspaperApi } from "./api/newspaper/newspaperApi";
import { publisherApi } from "./api/publisher/publisherApi";
import { articleApi } from "./api/article/article.router";
import bodyParser from "body-parser";
import auth from "./middleware/authMiddleware";

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
//auth('MANAGER') auth('DIRECTOR') auth('JOURNALIST')
app.use(userSession());
app.get('/auth', userApi.auth)
app.post('/register', userApi.register)
app.post('/login', userApi.login)
app.post('/logout', userApi.logout)
app.get('/newspaper/publisher=/:publisher', newspaperApi.getNewspaperByPublisher)
app.get('/newspaper/name=/:title', newspaperApi.getNewspaperByPublisher)
app.get('/newspaper/:publisher/:title', newspaperApi.getNewspaperByPublisher)
app.get('/newspaper/:id/:from/:to', newspaperApi.getNewspapersByIdInverval)
app.get('/publisher', auth('JOURNALIST'), publisherApi.getAllPublishers)
app.get('/article/content=/:content', articleApi.getCopyArticles)
app.get('/article/id=/:newspaperCopyId', articleApi.getCopyArticles)
app.get('/article/:newspaperCopyId/:content', articleApi.getCopyArticles)

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});