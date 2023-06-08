import { userLoginSchema, userRegistrationSchema } from "../../models/user";
import type { UserLoginData, UserRegisterData } from "../../types/user.types";
import { Request, Response } from "express";
import * as UserService from "./user.service"
// import { User } from "@prisma/client";
import { db } from "../../utils/db.server";
import { ValidationError } from "yup";
import { User } from "@prisma/client";

// We are using express-validator to validate whether requests should be successful.
// You can read more about it here: https://express-validator.github.io/docs/guides/getting-started
// Register a user

const auth = async (req: Request, res: Response) => {
    try {
        const user = req.session.user;
        if (!user) {
            res.status(400).json({ message: 'No user authenticated' });
            return;
        }

        res.status(200).json({ item: user, message: `User ${user.username} is authorized` });
    }
    catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
}


const register = async (req: Request, res: Response) => {
    try {
        const validatedData = await userRegistrationSchema.validate(req.body);
        const userData = validatedData as UserRegisterData;
        const user = await UserService.register(userData);
        if (user.isErr) {
            res.status(400).json({ message: user.error })
            // res.status(400).json({ message: "User already exists!" });
            return;
        }
        res.status(200).json({ item: user, message: "User was registered successfully." });
        return;
    } catch (error) {
        if (error instanceof ValidationError) {
            res.status(400).json({ message: error.message });
            return;
        }
        res.status(500).json({ message: (error as Error).message });
    }
};

// Login user
const login = async (req: Request, res: Response) => {
    try {
        const validatedData = await userLoginSchema.validate(req.body);
        const userData = validatedData as UserLoginData;

        const user: User | null = await db.user.findFirst({
            where: {
                username: userData.username,
            }
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

        req.session.user = user
        res.status(200).json({ message: "Successfully logged in." });
        return;
    } catch (error) {
        if (error instanceof ValidationError) {
            res.status(400).json({ message: error.message });
            return;
        }
        res.status(500).json({ message: 'Something went wrong' });
    }
};


const logout = async (req: Request, res: Response) => {
    req.session.destroy(() => { });
    res.json({ message: 'Logged out' });
};

export const userApi = {
    auth,
    register,
    login,
    logout
};