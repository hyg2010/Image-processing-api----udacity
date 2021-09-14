"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var app = express_1.default();
// Middlewares
app.use('/api', index_1.default);
var port = 4000;
// listen
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
exports.default = app;
