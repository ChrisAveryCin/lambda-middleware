import 'source-map-support/register';
import { APIGatewayProxyEventV2 } from 'aws-lambda';
import { MiddlewareFactory } from '../types';
declare type OnErrorFunction = (event: APIGatewayProxyEventV2, error: Error) => void;
export declare const DefaultLogger: OnErrorFunction;
declare type JsonErrorHandlingConfig = {
    onError: OnErrorFunction;
};
export declare const withJsonErrorHandling: MiddlewareFactory<JsonErrorHandlingConfig>;
export {};
//# sourceMappingURL=index.d.ts.map