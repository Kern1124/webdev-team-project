import { Result } from '@badrap/result';
import { User } from "@prisma/client";
import { db } from "../../utils/db.server";
import argon2 from 'argon2';
import type { UserRegisterData } from "../../types/user.types";
import { RoleRecordType } from '../../models/role';

// This service file contains all user related prisma functions

export const validatePassword = async (inputPassword: string, passwordHash: string): Promise<boolean> => {
  try {
    return await argon2.verify(passwordHash, inputPassword);
  } catch (error) {
    return false;
  }
}

export const register = async (data: UserRegisterData) => {
  try {
    // Start a database transaction
    return Result.ok(await db.$transaction(async (prisma) => {
      // Check if the user already exists based on username and email
      const existingUser = await prisma.user.findFirst({
        where: {
          OR: [
            { username: data.username },
            { email: data.email },
          ],
        },
      });

      // If user exists, throw an error
      if (existingUser) {
        throw new Error("User with this username or email already exists.");
      }
      const passwordHash: string = await argon2.hash(data.password);
      // Create the new user
      const newUser = await prisma.user.create({
        data: {
          username: data.username,
          email: data.email,
          passwordHash,
          userRole: 'JOURNALIST' as RoleRecordType
          // Other user properties
        },
      });

      // Return the newly created user
      return newUser;
    }));
  } catch (error) {
    // Transaction failed or user already exists
    return Result.err(error as Error);
  }
}
