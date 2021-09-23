"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("../app"));
var NODE_ENV = process.env.NODE_ENV;
var PORT = process.env.PORT;
app_1.default.listen(PORT, function () {
    console.log("Server is running in " + NODE_ENV + " environment at port " + PORT);
});
