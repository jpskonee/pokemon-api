import { type Request, type Response, type NextFunction } from 'express';
import type Joi from 'joi';
import { FormatApiResponse } from '../utils/helpers/sendResponse.helper';

const options: Joi.ValidationOptions = {
    abortEarly: false,
    messages: { 'any.required': '{#label} is required.' }
};

type validateScope = 'params' | 'body' | 'query';
export const validateData = (schema: Joi.ObjectSchema<any>, scope: validateScope = 'body') => {
    return (req: Request, res: Response, next: NextFunction) => {
        let targetObject = req.body;
        switch (scope) {
            case 'params':
                targetObject = req.params;
                break;
            case 'query':
                targetObject = req.query;
                break;
            default:
                targetObject = req.body;
        }

        const { error } = schema.validate(targetObject, options);
        if (error !== undefined) {
            const errorMessage = error.details.map((detail) => detail.message).join(', ');
            FormatApiResponse.sendErrorResponse({ res, error: errorMessage });
            return;
        }
        next();
    };
};
