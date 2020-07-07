"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPipeline = void 0;
var json_api_1 = require("../json-api");
var applyMiddleware = function (middleware, api) { return middleware.reduceRight(function (mem, cur) { return cur(mem); }, api); };
exports.buildPipeline = function (middleware) {
    return {
        getHandler: function (api) { return applyMiddleware(middleware, json_api_1.withJsonGet(api)); },
        postHandler: function (api, schema) { return applyMiddleware(middleware, json_api_1.withJsonPost(api, schema)); },
    };
};
//# sourceMappingURL=index.js.map