"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPostApi = exports.buildGetApi = void 0;
var cors_1 = require("./cors");
var json_error_1 = require("./json-error");
var http_logging_1 = require("./http-logging");
var pipeline_1 = require("./pipeline");
var json_api_1 = require("./json-api");
// pipeline
var _a = pipeline_1.buildPipeline([
    http_logging_1.withHttpLogging(),
    json_error_1.withJsonErrorHandling(),
    cors_1.withCors(),
]), getHandler = _a.getHandler, postHandler = _a.postHandler;
// buildGetApi creates the default configuration for a GET API.
exports.buildGetApi = function (api) { return getHandler(api); };
// buildPostApi creates the default configuration for a POST API.
exports.buildPostApi = function (api, schema) {
    if (schema === void 0) { schema = null; }
    return postHandler(api, schema);
};
exports.default = {
    Response: json_api_1.Response,
    buildPipeline: pipeline_1.buildPipeline,
    withCors: cors_1.withCors,
    withHttpLogging: http_logging_1.withHttpLogging,
    withJsonErrorHandling: json_error_1.withJsonErrorHandling,
    buildGetApi: exports.buildGetApi,
    buildPostApi: exports.buildPostApi
};
__exportStar(require("./types"), exports);
//# sourceMappingURL=index.js.map