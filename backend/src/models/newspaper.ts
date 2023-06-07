import { date, object, string } from 'yup';

export const newspaperById = object({
    from: date().optional(),
    to: date().optional()
});
