import { date, object, string } from 'yup';

export const newspaperById = object({
    from: date().optional(),
    to: date().optional()
});

export const newspaperCreateData = object({
    publisherId: string().required(),
    name: string().required()
})

export const newspaperPublisherRequest = object({
    title: string().required(),
});
