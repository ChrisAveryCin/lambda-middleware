/// <reference types="hapi__joi" />
import 'source-map-support/register';
import { APIGatewayProxyEventV2 } from 'aws-lambda';
import { ObjectSchema, ValidationErrorItem } from "@hapi/joi";
import { APIGatewayHandler } from '../types';
export declare class RequestContext {
    event: APIGatewayProxyEventV2;
    constructor(e: APIGatewayProxyEventV2);
}
export declare class Response<T> {
    status: number;
    body: T;
    constructor(status: number, body: T);
}
export declare class ValidationError {
    msg: string;
    errors: Array<ValidationErrorSummary>;
    constructor(msg: string, errors: Array<ValidationErrorItem>);
}
export declare class ValidationErrorSummary {
    msg: string;
    path: string;
    constructor(msg: string, path: string);
}
export declare type GetApi<TOutput> = (context: RequestContext) => Promise<Response<TOutput>>;
export declare type PostApi<TInput, TOutput> = (input: TInput, context: RequestContext) => Promise<Response<TOutput>>;
export declare const withJsonGet: <TOutput>(handler: GetApi<TOutput>) => APIGatewayHandler;
export declare const withJsonPost: <TInput, TOutput>(handler: PostApi<TInput, TOutput>, schema?: ObjectSchema<TInput>) => APIGatewayHandler;
//# sourceMappingURL=index.d.ts.map