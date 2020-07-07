import 'source-map-support/register';
import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from 'aws-lambda';
import { MiddlewareFactory } from '../types';
export declare class RequestData {
    time: string;
    src: string;
    status?: number;
    http_1xx?: number;
    http_2xx?: number;
    http_3xx?: number;
    http_4xx?: number;
    http_5xx?: number;
    len: number;
    ms: number;
    method: string;
    path: string;
    constructor(start: Date, end: Date, request: APIGatewayProxyEventV2, response: APIGatewayProxyStructuredResultV2);
}
export declare type OnRequestCompleteFunction = (data: RequestData) => void;
export declare type DateFunction = () => Date;
declare type HttpLoggingConfig = {
    onRequestComplete: OnRequestCompleteFunction;
    now: DateFunction;
};
export declare const withHttpLogging: MiddlewareFactory<HttpLoggingConfig>;
export {};
//# sourceMappingURL=index.d.ts.map