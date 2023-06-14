import express from "express";
import cookieParser from 'cookie-parser';
import * as dotenv from "dotenv";
import cors from 'cors';
import userSession from "./api/user/user.session";
import { userApi } from "./api/user/userApi";
import { newspaperApi } from "./api/newspaper/newspaperApi";
import { publisherApi } from "./api/publisher/publisherApi";
import { articleApi } from "./api/article/articleApi";
import auth from "./middleware/authMiddleware";
import { commentApi } from "./api/comment/commentApi";
import { copyApi } from "./api/copy/copyApi";




dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'))

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}
))
//auth('MANAGER') auth('DIRECTOR') auth('JOURNALIST')
app.use(userSession());
app.get('/auth', userApi.auth)
app.post('/register', userApi.register)
app.post('/login', userApi.login)
app.post('/logout', userApi.logout)
app.get('/user/article', userApi.getUserArticles)

app.get('/newspaper', newspaperApi.getAllNewspaper)
app.get('/newspaper/publisher=/:publisherId', newspaperApi.getNewspaperByPublisher)
app.get('/newspaper/name=/:title', newspaperApi.getNewspaperByPublisher)
app.get('/newspaper/:publisherId/:title', newspaperApi.getNewspaperByPublisher)
app.get('/newspaper/:id/:from/:to', newspaperApi.getNewspapersByIdInvervalRoles)
app.get('/newspaper/:id/:from/:to/:heading', newspaperApi.getNewspaperByIntervalHeadingRoles)
app.get('/newspaper/publish', newspaperApi.getUnpublishedCopies) //DIRECTOR

app.get('/publisher', publisherApi.getAllPublishers)

app.get('/article', articleApi.getAll)
app.post('/article/comment', auth('JOURNALIST'), commentApi.create)
app.post('/article/create', auth('JOURNALIST'), articleApi.create)
app.get('/article/:articleId', articleApi.getArticleWithId)
app.get('/article/:articleId/comment', commentApi.getArticleComments)
app.get('/article/heading=/:heading', articleApi.getGlobalArticlesByHeading)
app.get('/article/content=/:content', articleApi.getCopyArticles)
app.get('/article/id=/:newspaperCopyId', articleApi.getCopyArticles)
app.get('/article/related/:articleId', articleApi.getRelatedArticles)
app.get('/article/:newspaperCopyId/:content', articleApi.getCopyArticles)


// Approval / Discard
app.post('/article/:articleId/discard', auth('JOURNALIST'), articleApi.discard)
app.post('/article/:articleId/approve', auth('JOURNALIST'), articleApi.approve)
app.post('/copy/:id/discard', auth('JOURNALIST'), copyApi.discard)
app.post('/copy/:id/approve', auth('JOURNALIST'), copyApi.approve)
app.post('/comment/:id/delete', auth('JOURNALIST'), commentApi.deleteComment)

app.get('/articles/approval', articleApi.getUnapprovedArticles) //MANAGER

app.get('/category', articleApi.getCategories)
app.post('/upload/:newspaperId', newspaperApi.updateImage)

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
