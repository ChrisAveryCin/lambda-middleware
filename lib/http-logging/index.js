"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withHttpLogging = exports.RequestData = void 0;
require("source-map-support/register");
var RequestData = /** @class */ (function () {
    function RequestData(start, end, request, response) {
        var _a, _b, _c, _d;
        this.time = start.toISOString();
        this.src = 'rl';
        this.status = (response === null || response === void 0 ? void 0 : response.statusCode) || 0;
        this.http_1xx = inRange(this.status, 100, 200);
        this.http_2xx = inRange(this.status, 200, 300);
        this.http_3xx = inRange(this.status, 300, 400);
        this.http_4xx = inRange(this.status, 400, 500);
        this.http_5xx = inRange(this.status, 500, 600);
        this.len = (response === null || response === void 0 ? void 0 : response.body) ? response.body.length : 0;
        this.ms = end.getTime() - start.getTime();
        this.method = ((_b = (_a = request === null || request === void 0 ? void 0 : request.requestContext) === null || _a === void 0 ? void 0 : _a.http) === null || _b === void 0 ? void 0 : _b.method) || "";
        this.path = ((_d = (_c = request === null || request === void 0 ? void 0 : request.requestContext) === null || _c === void 0 ? void 0 : _c.http) === null || _d === void 0 ? void 0 : _d.path) || "";
    }
    return RequestData;
}());
exports.RequestData = RequestData;
var inRange = function (n, from, to) { return n >= from && n < to ? 1 : undefined; };
var DefaultLogger = function (data) { return console.log(JSON.stringify(data)); };
var DefaultDateFunction = function () { return new Date(); };
var defaultConfig = {
    now: DefaultDateFunction,
    onRequestComplete: DefaultLogger
};
// withHttpLogging logs HTTP information - the HTTP status code, response body length, time taken, method and path.
exports.withHttpLogging = function (config) {
    if (config === void 0) { config = defaultConfig; }
    return function (next) { return function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var now, onRequestComplete, start, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    now = config.now, onRequestComplete = config.onRequestComplete;
                    start = now();
                    return [4 /*yield*/, next(event)];
                case 1:
                    response = _a.sent();
                    onRequestComplete(new RequestData(start, now(), event, response));
                    return [2 /*return*/, response];
            }
        });
    }); }; };
};
//# sourceMappingURL=index.js.map