"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var blockchain_route_1 = __importDefault(require("./routes/blockchain.route"));
var app = (0, express_1.default)();
app.use("/api/blockchain", blockchain_route_1.default);
exports.default = app;
