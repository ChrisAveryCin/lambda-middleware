import { Middleware, APIGatewayHandler } from '../types';
import { withJsonGet, withJsonPost } from '../json-api';
import { ObjectSchema } from '@hapi/joi';

const applyMiddleware = (middleware: Middleware[], api: APIGatewayHandler) => middleware.reduceRight((mem, cur) => cur(mem), api);

export const buildPipeline = (middleware: Middleware[]) => {
    return {
        getHandler: <TOut>(api) => applyMiddleware(middleware, withJsonGet<TOut>(api)),
        postHandler: <TIn, TOut>(api, schema: ObjectSchema<TIn> ) => applyMiddleware(middleware, withJsonPost<TIn, TOut>(api, schema)),
    };
};
