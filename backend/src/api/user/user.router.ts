import express from "express";
import { userLoginSchema, userRegistrationSchema } from "../../models/user.ts";
import type { UserLoginData, UserRegisterData, UserWithRoles } from "./user.types.ts";

import * as UserService from "./user.service.ts"
// import { User } from "@prisma/client";
import { db } from "utils/db.server.ts";
import { ValidationError } from "yup";

// We are using express-validator to validate whether requests should be successful.
// You can read more about it here: https://express-validator.github.io/docs/guides/getting-started

const userRouter = express.Router();

// Register a user

userRouter.post('/register', async (req, res) => {
    try {
        const validatedData = await userRegistrationSchema.validate(req.body);
        const userData = validatedData as UserRegisterData;
        const user = await UserService.register(userData);
        if (!user) {
            res.status(400).json({ message: "User already exists!" });
            return;
        }
        res.status(200).json({ item: user, message: "User was registered successfully." });
    } catch (error) {
        if (error instanceof ValidationError) {
            res.status(400).json({ message: error.message });
            return;
        }
        res.status(500).json({ message: 'Something went wrong' });
    }
});

// Login user

userRouter.post('/login', async (req, res) => {
    try {
        const validatedData = await userLoginSchema.validate(req.body);
        const userData = validatedData as UserLoginData;

        const user: UserWithRoles | null = await db.user.findFirst({
            where: {
                username: userData.username,
            },
            include: {
                userRoles: true,
            },
        });

        if (!user) {
            res
                .status(400)
                .json({ message: `User with username "${userData.username}" does not exist.` });
            return;
        }

        if (!UserService.validatePassword(userData.password, user.passwordHash)) {
            res.status(400).json({ message: "Incorrect password." });
            return;
        }

        req.session.user = { username: userData.username, roles: user.userRoles };
        res.status(200).json({ message: "Successfully logged in." });
    } catch (error) {
        if (error instanceof ValidationError) {
            res.status(400).json({ message: error.message });
            return;
        }
        res.status(500).json({ message: 'Something went wrong' });
    }
});


userRouter.post('/logout', async (req, res) => {
    req.session.destroy(() => { });
    res.json({ message: 'Logged out' });
})

export default userRouter;