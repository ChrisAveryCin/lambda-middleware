# lambda-middleware

Opinionated middleware for implementing API Gateway Lambdas.

Provides:

* CORS
* HTTP Logging
* JSON API
* JSON Error Handling

By using this API middleware, you can take the API Gateway handling code out of your Lambda code, and simplify your API code by leaving out CORS and global error handling.

APIs are defined with input and output types for HTTP handlers:

```typescript
// All of the handlers need a JSON output type.
class HelloOutput {
  message: string;
  constructor(msg: string) {
    this.message = msg;
  }
}
```

POST / PUT handlers also require an XInput type.

```typescript
class HelloInput {
  first: string;
  last: string;
}
```

If you define a joi schema, it can be used to validate JSON posts.

```typescript
const helloInputValidation = Joi.object<HelloInput>({
    first: Joi.string().required(),
    last: Joi.string().required(),
});
```

A GET handler doesn't need to do JSON.stringify here - the middleware does that.

```typescript
// Each handler receives an optional "RequestContext" that can be used to get access to the raw event.
const getExample = async (ctx: RequestContext): Promise<Response<HelloOutput>> =>
  new Response<HelloOutput>( 200, new HelloOutput(`Here's the headers: ${JSON.stringify(ctx.event.headers)}`));
```

A POST handler also has an input type. The JSON middleware will handle JSON.parse and pass the data in.

```typescript
const postExample = async (input: HelloInput): Promise<Response<HelloOutput>> =>
  new Response<HelloOutput>(200, new HelloOutput(`Hello ${input.first}`));
```

This handler just throws an error. It's here to demonstrate how errors can be caught by the error handling middleware.

```typescript
const errorExample = async (): Promise<Response<HelloOutput>> => {
  throw new Error("I always throw an error");
};
```

A bundling function combines all of the middleware for use.

```typescript
// Note that (optional) validation is passed in.

export const post = buildPostApi<HelloInput, HelloOutput>(postExample, helloInputValidation);
export const error = buildPostApi<HelloInput, HelloOutput>(errorExample);
```

Build your own pipelines

```typescript
const {getHandler, postHandler} = buildPipeline([
    withHttpLogging(),
    withCors({
      allow: ['https://example.com'],
      allowCredentials: false
      }),
    withJsonErrorHandling()
])

export const get = getHandler<HelloOutput>(getExample);
```

Write your own middleware with the `MiddlewareFactory<T>` type.

```typescript
type MyConfig = {foo: 'bar'}
const myMiddleware: MiddlewareFactory<MyConfig> = (config) => (next: APIGatewayHandler) => async (event: APIGatewayProxyEventV2) => {
    // do things to event
    const res = next(event)
    // do things to result
    return res
}
const {getHandler, postHandler} = buildPipeline([
 myMiddleware()
])

export const get = getHandler<HelloOutput>(getExample);
```
