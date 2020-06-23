import { Middleware, APIGatewayHandler } from '../types';
import { withJsonGet, withJsonPost } from '../json-api';

const buildPipeline = (middleware: Middleware[], api: APIGatewayHandler) => middleware.reduceRight((mem, cur) => cur(mem), api);

export const applyMiddleware = (middleware: Middleware[]) => {
    return {
        getHandler: <TOut>(api) => buildPipeline(middleware, withJsonGet<TOut>(api)),
        postHandler: <TIn, TOut>(api) => buildPipeline(middleware, withJsonPost<TIn, TOut>(api)),
    };
};
