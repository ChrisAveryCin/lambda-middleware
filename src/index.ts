
import { withCors } from './cors';
import { withJsonErrorHandling } from './json-error';
import { withHttpLogging } from './http-logging';
import { ObjectSchema } from '@hapi/joi';
import { APIGatewayHandler, MiddlewareFactory } from './types';
import { buildPipeline } from './pipeline';
import { Response } from './json-api';
import { PostApi, GetApi } from './json-api';
import { APIGatewayProxyEventV2 } from 'aws-lambda';

// pipeline
const {getHandler, postHandler} = buildPipeline([
    withHttpLogging(),
    withJsonErrorHandling(),
    withCors(),
])

// buildGetApi creates the default configuration for a GET API.
export const buildGetApi = <TOutput>(api: GetApi<TOutput>): APIGatewayHandler => getHandler<TOutput>(api);

// buildPostApi creates the default configuration for a POST API.
export const buildPostApi = <TInput, TOutput>(
    api: PostApi<TInput, TOutput>,
    schema: ObjectSchema<TInput> = null,
): APIGatewayHandler => postHandler<TInput, TOutput>(api, schema);

export default {
    Response,
    buildPipeline,
    withCors,
    withHttpLogging,
    withJsonErrorHandling,
    buildGetApi,
    buildPostApi
}

export * from './types'
