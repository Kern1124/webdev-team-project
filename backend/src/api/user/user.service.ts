import { User } from "@prisma/client";
import { db } from "utils/db.server";
import argon2 from 'argon2';
import type { UserRegisterData } from "./user.types";

// This service file contains all user related prisma functions

export const validatePassword = async (inputPassword: string, passwordHash: string): Promise<boolean> => {
    try {
        return await argon2.verify(passwordHash, inputPassword);
    } catch (error) {
        return false;
    }
};

export const register = async (data: UserRegisterData): Promise<User> => {
    return Promise.resolve(
        await db.$transaction(async (transaction) => {
            try {
                // TODO username should be unique? email too?
                await transaction.user.findFirstOrThrow({
                where: {
                    username: data.username
                }
            })} catch (e) {
                throw Error("User with this username already exists.");
            }
        
            const passwordHash: string = await argon2.hash(data.password);
        
            const user: User = await transaction.user.create(
                {
                    data: {
                        username: data.username,
                        passwordHash: passwordHash,
                        email: data.email,
                    }
                }
            )
            return user;
        }))
};



