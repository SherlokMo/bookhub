import { Request, Response } from 'express';

export default (request: Request, response: Response, next) => {
    console.log(`${request.method} ${request.path}`);
    next();
}