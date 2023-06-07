import { object, string } from 'yup';

export const userRegistrationSchema = object({
    username: string().required(),
    email: string().email().required(),
    password: string().min(6).max(20).required(),
});

export const userLoginSchema = object({
    username: string().required(),
    password: string().min(6).max(20).required(),
});