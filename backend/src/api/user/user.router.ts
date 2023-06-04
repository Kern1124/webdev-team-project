import express from "express";
import z from 'zod';
import type { ZodType } from "zod";
import type { UserLoginData, UserRegisterData, UserWithRoles } from "./user.types.ts";

import * as UserService from "./user.service.ts"
import { User } from "@prisma/client";
import { db } from "utils/db.server.ts";

// We are using express-validator to validate whether requests should be successful.
// You can read more about it here: https://express-validator.github.io/docs/guides/getting-started

const router = express.Router();

// Register a user

router.post("/user/register", async (req, res) => {

    const userRegistrationSchema: ZodType<UserRegisterData> = z.object({
        username: z.string(),
        email: z.string().email(),
        password: z.string().min(6)
    })

    const result = await userRegistrationSchema.safeParseAsync(req.body);

    if (!result.success){
        res.status(400).json(result.error);
        return;
    }

    const userData: UserRegisterData = result.data;
    let user: Promise<User>;
    try {
        (user = UserService.register(userData))

    } catch (e) {
        res.status(400).json({message: "User already exists!"});
        return;
    }

    res.status(200).json({item: user, message: "User was registered successfully."});
});

// Login user

router.post("/user/login", async (req, res) => {

    const userLoginSchema: ZodType<UserLoginData> = z.object({
        username: z.string(),
        password: z.string()
    });

    const result = await userLoginSchema.safeParseAsync(req.body);

    if (!result.success){
        res.status(400).json(result.error);
        return;
    }

    const userData: UserLoginData = result.data;
    const user: UserWithRoles | null = await db.user.findFirst({
        where: {
            username: userData.username,
        },
        include: {
            userRoles: true,
        }
    });

    if (user == null){
        res.status(400).json({message: `User with username "${userData.username}" does not exist.`});
        return;
    }


    if (!UserService.validatePassword(userData.password, user?.passwordHash!)){
        res.status(400).json({message: "Incorrect password."});
        return;
    }

    req.session.user = {username: userData.username, roles: user?.userRoles!};
    res.status(200).json({message: "Successfully logged in."});
});


export default router;