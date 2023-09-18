import { Response, Request, NextFunction } from 'express';
import httpStatus from 'http-status';

export function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
    console.error(err);
    if ((err.message = 'Song not found')) return res.status(httpStatus.NOT_FOUND).send(err.message);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send('try again later');
}
