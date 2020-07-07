import 'source-map-support/register';
import { MiddlewareFactory } from '../types';
export declare class CorsConfig {
    allow: Array<string>;
    allowCredentials: boolean;
    constructor(allow?: Array<string>, allowCredentials?: boolean);
}
export declare const DefaultCorsConfig: CorsConfig;
export declare const withCors: MiddlewareFactory<CorsConfig>;
//# sourceMappingURL=index.d.ts.map