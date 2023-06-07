import { date, object, string } from 'yup';

export const newspaperById = object({
    from: date().optional(),
    to: date().optional()
});

export const userLoginSchema = object({
    username: string().required(),
    password: string().min(6).max(20).required(),
});