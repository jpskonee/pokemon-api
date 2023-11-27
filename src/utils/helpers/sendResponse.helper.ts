import { type Response } from 'express';
import { statusCode } from '../constant/statusCode.constant';

interface ResponseProps {
    res: Response
    code?: number
    message?: string
    error?: any
    data?: any
    [others: string]: any
}

export class FormatApiResponse {
    private static readonly timestamp = new Date().toLocaleString();

    static sendSuccessResponse({ res, code = statusCode.SUCCESS_OK, message = 'Operation Successful!', ...rest }: ResponseProps): void {
        res.status(code).json({ code, message, ...rest, timestamp: this.timestamp });
    }

    static sendErrorResponse({ res, code = statusCode.BAD_REQUEST, error = 'An Error Occured', ...rest }: ResponseProps): void {
        console.log({ code, error });
        res.status(code).json({ code, error, ...rest, timestamp: this.timestamp });
    }

    static catchErrorAndSendResponse({ res, error }: ResponseProps): void {
        const code = error?.status || statusCode.SERVER_ERROR;
        const errorMsg = error?.message || 'Server Error. Please try again later or contact support.';
        console.log({ code, error: errorMsg });
        res.status(code).json({ code, error: errorMsg, timestamp: this.timestamp });
    }
}
