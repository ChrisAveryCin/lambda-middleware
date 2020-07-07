import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from 'aws-lambda';
export declare type APIGatewayHandler = (event: APIGatewayProxyEventV2) => Promise<APIGatewayProxyStructuredResultV2>;
export declare type Middleware = (next: APIGatewayHandler) => APIGatewayHandler;
export declare type MiddlewareFactory<T> = (config?: T) => Middleware;
//# sourceMappingURL=types.d.ts.map