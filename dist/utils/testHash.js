"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
var createHah = crypto_1.default.createHash("sha256");
var hash = createHah.update("b'5'").digest("hex");
exports.default = hash;
