import { Prisma } from '@prisma/client'


export type UserRegisterData = {
    username: string,
    password: string,
    email: string
}

export type UserLoginData = {
    username: string,
    password: string
}

