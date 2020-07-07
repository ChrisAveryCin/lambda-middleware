/// <reference types="hapi__joi" />
import { ObjectSchema } from '@hapi/joi';
import { APIGatewayHandler, MiddlewareFactory } from './types';
import { Response } from './json-api';
import { PostApi, GetApi } from './json-api';
import { APIGatewayProxyEventV2 } from 'aws-lambda';
export declare const buildGetApi: <TOutput>(api: GetApi<TOutput>) => APIGatewayHandler;
export declare const buildPostApi: <TInput, TOutput>(api: PostApi<TInput, TOutput>, schema?: ObjectSchema<TInput>) => APIGatewayHandler;
declare const _default: {
    Response: typeof Response;
    buildPipeline: (middleware: import("./types").Middleware[]) => {
        getHandler: <TOut>(api: any) => APIGatewayHandler;
        postHandler: <TIn, TOut_1>(api: any, schema: ObjectSchema<TIn>) => APIGatewayHandler;
    };
    withCors: MiddlewareFactory<import("./cors").CorsConfig>;
    withHttpLogging: MiddlewareFactory<{
        onRequestComplete: import("./http-logging").OnRequestCompleteFunction;
        now: import("./http-logging").DateFunction;
    }>;
    withJsonErrorHandling: MiddlewareFactory<{
        onError: (event: APIGatewayProxyEventV2, error: Error) => void;
    }>;
    buildGetApi: <TOutput>(api: GetApi<TOutput>) => APIGatewayHandler;
    buildPostApi: <TInput, TOutput_1>(api: PostApi<TInput, TOutput_1>, schema?: ObjectSchema<TInput>) => APIGatewayHandler;
};
export default _default;
export * from './types';
//# sourceMappingURL=index.d.ts.map