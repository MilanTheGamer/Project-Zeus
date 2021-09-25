"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//testHash
var testHash_1 = __importDefault(require("./utils/testHash"));
var app = (0, express_1.default)();
app.get("/testHas", function (req, res, next) {
    var hashStart = testHash_1.default.substring(0, 4);
    console.log(hashStart);
    res.status(200).send("OK");
});
exports.default = app;
