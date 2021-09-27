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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Import Essential Modules
var crypto_1 = __importDefault(require("crypto"));
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
                    var lastBlock = _this.chain[_this.chain.length - 1];
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
                        var createHash = crypto_1.default.createHash("sha256");
                        var hashOperation = createHash
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
        //Create Hashed Block
        this.hash = function (block) {
            return new Promise(function (resolve, reject) {
                try {
                    var encodedBlock = JSON.stringify(block);
                    var createHash = crypto_1.default.createHash("sha256");
                    var hashedBlock = createHash
                        .update(encodedBlock)
                        .digest("hex");
                    resolve(hashedBlock);
                }
                catch (err) {
                    reject(err);
                }
            });
        };
        //Check if chain is valid
        this.isChainValid = function () {
            return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var chain, previousBlock, blockIndex, chainLength, block, previousHash, previousProof, proof, createHash, hashOperation, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 4, , 5]);
                            chain = this.chain;
                            previousBlock = chain[0];
                            blockIndex = 1;
                            chainLength = chain.length;
                            _a.label = 1;
                        case 1:
                            if (!(blockIndex < chainLength)) return [3 /*break*/, 3];
                            block = chain[blockIndex];
                            return [4 /*yield*/, this.hash(previousBlock)];
                        case 2:
                            previousHash = _a.sent();
                            if (block.previousHash != previousHash) {
                                resolve(false);
                            }
                            previousProof = previousBlock.proof;
                            proof = block.proof;
                            createHash = crypto_1.default.createHash("sha256");
                            hashOperation = createHash
                                .update(String(Math.pow(proof, 2) - Math.pow(previousProof, 2)))
                                .digest("hex");
                            if (hashOperation.substring(0, 4) != "0000") {
                                resolve(false);
                            }
                            else {
                                previousBlock = block;
                                blockIndex++;
                            }
                            // CHECK BUG --- check if resolve happens before all the validations
                            resolve(true);
                            return [3 /*break*/, 1];
                        case 3: return [3 /*break*/, 5];
                        case 4:
                            err_1 = _a.sent();
                            reject(err_1);
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            }); });
        };
        //Mine Block
        this.mineBlock = function () { return __awaiter(_this, void 0, void 0, function () {
            var previousBlock, previousProof, proof, previousHash, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.getPreviousBlock()];
                    case 1:
                        previousBlock = _a.sent();
                        previousProof = previousBlock.proof;
                        return [4 /*yield*/, this.proofOfWork(previousProof)];
                    case 2:
                        proof = _a.sent();
                        return [4 /*yield*/, this.hash(previousBlock)];
                    case 3:
                        previousHash = _a.sent();
                        return [4 /*yield*/, this.createBlock(proof, previousHash)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.chain = [];
        this.createBlock(1, "0");
    }
    return Blockchain;
}());
exports.default = Blockchain;
