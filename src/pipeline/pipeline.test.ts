import { Middleware, APIGatewayHandler } from "../types";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { RequestContext, Response } from "../json-api";
import { applyMiddleware } from ".";

describe('Pipeline', () => {
    describe('httpGet', () => {
        describe('given an array of middleware and a handler', () => {
            it('calls middleware in correct order', async () => {
                
                let callOrder = ''
                const middleware: Middleware[] = [
                    (handler: APIGatewayHandler) => async (event: any) => {
                        callOrder  = callOrder + '1'
                        const res = await handler(event) as any
                        callOrder  = callOrder + '6'
                        return res
                    },
                    (handler: APIGatewayHandler) => async (event: any) => {
                        callOrder  = callOrder + '2'
                        const res = await handler(event) as any
                        callOrder  = callOrder + '5'
                        return res
                    },
                    (handler: APIGatewayHandler) => async (event: any) => {
                        callOrder  = callOrder + '3'
                        const res = await handler(event) as any
                        callOrder  = callOrder + '4'
                        return res
                    }
                ]

                const { getHandler } = applyMiddleware(middleware)
                const fakeHandler = getHandler<any>((ctx: any) => { 
                    return new Response( 200, {callOrder: ctx.event.callOrder}) 
                });
                await fakeHandler({} as any) as any

                expect(callOrder).toEqual('123456')

            });
        });
    });

    
});
