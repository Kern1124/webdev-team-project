import { UserRole } from '@prisma/client';
import expressSession from 'express-session';

declare module 'express-session' {
    interface SessionData {
        user: { username: string, roles: UserRole[]}
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