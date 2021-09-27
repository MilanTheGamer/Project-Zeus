"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Initiate BlockChain
var blockchain_service_1 = __importDefault(require("../services/blockchain.service"));
var blockchain = new blockchain_service_1.default();
//Routes
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get("/", function (req, res) {
    res.status(200).send("OK");
});
router.get("/mineBlock", function (req, res) {
    blockchain.mineBlock();
    res.status(200).send("OK");
});
router.get("/getChain", function (req, res) {
    var chain = blockchain.chain;
    var data = {
        chain: chain,
        length: chain.length,
    };
    res.status(200).json(data);
});
exports.default = router;
