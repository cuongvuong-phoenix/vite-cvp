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
exports.__esModule = true;
var path = require("path");
var fastify_1 = require("fastify");
var fastify_static_1 = require("fastify-static");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var manifest, render, server;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('../dist/client/ssr-manifest.json'); })];
                case 1:
                    manifest = _a.sent();
                    return [4 /*yield*/, Promise.resolve().then(function () { return require('../dist/server/main'); })];
                case 2:
                    render = (_a.sent())["default"];
                    server = fastify_1["default"]();
                    server.register(fastify_static_1["default"], {
                        root: path.join(__dirname, '../dist/client'),
                        index: false,
                        wildcard: false
                    });
                    server.get('*', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                        var url, html, err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    url = req.protocol + "://" + req.headers.host + req.url;
                                    return [4 /*yield*/, render(url, { manifest: manifest, preload: true })];
                                case 1:
                                    html = (_a.sent()).html;
                                    res.status(200).type('text/html').send(html);
                                    return [3 /*break*/, 3];
                                case 2:
                                    err_1 = _a.sent();
                                    res.status(500).send({ message: err_1 });
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/, server];
            }
        });
    });
}
main()
    .then(function (server) {
    var port = process.env.PORT || 5000;
    var ip = process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.0.0.1';
    server.listen(port, ip, function (err, address) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log("\uD83D\uDD25 Server listening at " + address);
    });
})["catch"](function (err) { return console.error(err); });
