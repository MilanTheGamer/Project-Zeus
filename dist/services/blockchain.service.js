"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Import Essential Modules
var crypto_1 = __importDefault(require("crypto"));
var createHah = crypto_1.default.createHash("sha256");
var Blockchain = /** @class */ (function () {
    //Constructor
    function Blockchain() {
        var _this = this;
        //Create Block
        this.createBlock = function (proof, previousHash) {
            return new Promise(function (resolve, reject) {
                try {
                    var block = {
                        index: _this.chain.length + 1,
                        timestamp: String(new Date()),
                        proof: proof,
                        previousHash: previousHash,
                        data: {},
                    };
                    _this.chain.push(block);
                    resolve(block);
                }
                catch (err) {
                    reject(err);
                }
            });
        };
        //Get Previcous Block
        this.getPreviousBlock = function () {
            return new Promise(function (resolve, reject) {
                try {
                    var lastBlock = _this.chain[-1];
                    resolve(lastBlock);
                }
                catch (err) {
                    reject(err);
                }
            });
        };
        //Proof of Work
        this.proofOfWork = function (previousProof) {
            return new Promise(function (resolve, reject) {
                try {
                    var newProof = 1;
                    var checkProof = false;
                    while (checkProof === false) {
                        var hashOperation = createHah
                            .update(String(Math.pow(newProof, 2) - Math.pow(previousProof, 2)))
                            .digest("hex");
                        if (hashOperation.substring(0, 4) === "0000") {
                            checkProof = true;
                            resolve(newProof);
                        }
                        else {
                            newProof++;
                        }
                    }
                }
                catch (err) {
                    reject(err);
                }
            });
        };
        this.chain = [];
    }
    return Blockchain;
}());
exports.default = Blockchain;
