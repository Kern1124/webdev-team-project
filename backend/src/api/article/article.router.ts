import { Router } from 'express';
/*
import { userLoginSchema, userRegistrationSchema } from "../../models/user.ts";
import type { UserLoginData, UserRegisterData, UserWithRoles } from "./user.types.ts";

import * as ArticleService from "./article.service.ts"
import { ValidationError } from "yup";
 */
import auth from '../../middleware/authMiddleware';

const articleRouter = Router();

// This serves just as a test route to see if the server is working
// We would not like to do it this way
// I think it would be better to separate /login /logout / register from user
// and then probably make a hierarchy user / :id / article / :id atd...
articleRouter.get('/', (req, res) => {
    res.json({ message: `This route is not protected at all, body: ${JSON.stringify(req.body)}` });
});

articleRouter.get('/protected', auth('JOURNALIST'), (req, res) => {
    res.json({ message: `This route has just authentication, body: ${JSON.stringify(req.body)}` });
});
/*
articleRouter.get('/protected-admin', auth('MANAGER'), (req, res) => {
    res.json({ message: `This route has authentication and authorization, body: ${JSON.stringify(req.body)}` });
});
*/
export default articleRouter;