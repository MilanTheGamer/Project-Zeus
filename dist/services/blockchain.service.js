"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        this.chain = [];
    }
    return Blockchain;
}());
exports.default = Blockchain;
