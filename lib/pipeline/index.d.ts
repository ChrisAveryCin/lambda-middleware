/// <reference types="hapi__joi" />
import { Middleware, APIGatewayHandler } from '../types';
import { ObjectSchema } from '@hapi/joi';
export declare const buildPipeline: (middleware: Middleware[]) => {
    getHandler: <TOut>(api: any) => APIGatewayHandler;
    postHandler: <TIn, TOut_1>(api: any, schema: ObjectSchema<TIn>) => APIGatewayHandler;
};
//# sourceMappingURL=index.d.ts.map