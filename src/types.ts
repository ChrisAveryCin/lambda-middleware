
import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from 'aws-lambda';

export type APIGatewayHandler = (event: APIGatewayProxyEventV2) => Promise<APIGatewayProxyStructuredResultV2>;
export type Middleware = (next: APIGatewayHandler) => APIGatewayHandler;
export type MiddlewareFactory<T> = (config?: T) => Middleware
