import { Role, User } from '@prisma/client';
import expressSession from 'express-session';

declare module 'express-session' {
interface SessionData {
    user: User & { userRoles: Role[] };
  }
}

const userSession = () => expressSession ({
    secret: "this is a bad secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: false
    },
});

export default userSession;