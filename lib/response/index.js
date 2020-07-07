"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonResponse = exports.jsonOK = exports.jsonError = exports.ErrorResponse = void 0;
require("source-map-support/register");
// An ErrorResponse defines the structure of HTTP errors returned to clients.
var ErrorResponse = /** @class */ (function () {
    function ErrorResponse(msg, code) {
        this.msg = msg;
        this.code = code;
    }
    return ErrorResponse;
}());
exports.ErrorResponse = ErrorResponse;
exports.jsonError = function (msg, code) { return exports.jsonResponse(new ErrorResponse(msg, code), code); };
exports.jsonOK = function () { return ({
    body: '{"ok":true}',
    statusCode: 200,
}); };
// jsonResponse is a helper that produces an APIGatewayProxyStructuredResultV2 containing the JSON data.
exports.jsonResponse = function (input, status) {
    return ({
        body: JSON.stringify(input),
        statusCode: status,
    });
};
//# sourceMappingURL=index.js.map