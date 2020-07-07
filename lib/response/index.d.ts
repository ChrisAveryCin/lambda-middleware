import 'source-map-support/register';
import { APIGatewayProxyStructuredResultV2 } from 'aws-lambda';
export declare class ErrorResponse {
    msg: string;
    code: number;
    constructor(msg: string, code: number);
}
export declare const jsonError: (msg: string, code: number) => APIGatewayProxyStructuredResultV2;
export declare const jsonOK: () => APIGatewayProxyStructuredResultV2;
export declare const jsonResponse: <T>(input: T, status: number) => APIGatewayProxyStructuredResultV2;
//# sourceMappingURL=index.d.ts.map