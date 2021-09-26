//Import Essential Modules
import crypto, { createHash } from "crypto";
let createHah = crypto.createHash("sha256");

//Interfaces
interface Block {
    index: number;
    timestamp: string;
    proof: number;
    previousHash: string;
    data: object;
}
class Blockchain {
    //Define Class variables
    chain: Block[];

    //Constructor
    constructor() {
        this.chain = [];
        this.createBlock(1, "0");
    }

    //Create Block
    createBlock = (proof: number, previousHash: string): Promise<Block> => {
        return new Promise((resolve, reject) => {
            try {
                let block: Block = {
                    index: this.chain.length + 1,
                    timestamp: String(new Date()),
                    proof: proof,
                    previousHash: previousHash,
                    data: {},
                };
                this.chain.push(block);
                resolve(block);
            } catch (err) {
                reject(err);
            }
        });
    };

    //Get Previcous Block
    getPreviousBlock = (): Promise<Block> => {
        return new Promise((resolve, reject) => {
            try {
                let lastBlock: Block = this.chain[-1];
                resolve(lastBlock);
            } catch (err) {
                reject(err);
            }
        });
    };

    //Proof of Work
    proofOfWork = (previousProof: number): Promise<number> => {
        return new Promise((resolve, reject) => {
            try {
                let newProof: number = 1;
                let checkProof: boolean = false;
                while (checkProof === false) {
                    let hashOperation: string = createHah
                        .update(String(newProof ** 2 - previousProof ** 2))
                        .digest("hex");
                    if (hashOperation.substring(0, 4) === "0000") {
                        checkProof = true;
                        resolve(newProof);
                    } else {
                        newProof++;
                    }
                }
            } catch (err) {
                reject(err);
            }
        });
    };

    //Create Hashed Block
    hash = (block: Block): Promise<string> => {
        return new Promise((resolve, reject) => {
            try {
                let encodedBlock: string = JSON.stringify(block);
                let hashedBlock: string = createHah
                    .update(encodedBlock)
                    .digest("hex");
                resolve(hashedBlock);
            } catch (err) {
                reject(err);
            }
        });
    };

    //Check if chain is valid
    isChainValid = (): Promise<boolean> => {
        return new Promise(async (resolve, reject) => {
            try {
                //initialise with first block
                let chain: Block[] = this.chain;
                let previousBlock: Block = chain[0];
                let blockIndex: number = 1;
                let chainLength: number = chain.length;
                while (blockIndex < chainLength) {
                    let block: Block = chain[blockIndex];
                    let previousHash: string = await this.hash(previousBlock);
                    if (block.previousHash != previousHash) {
                        resolve(false);
                    }
                    let previousProof: number = previousBlock.proof;
                    let proof: number = block.proof;
                    let hashOperation: string = createHah
                        .update(String(proof ** 2 - previousProof ** 2))
                        .digest("hex");
                    if (hashOperation.substring(0, 4) != "0000") {
                        resolve(false);
                    } else {
                        previousBlock = block;
                        blockIndex++;
                    }
                    // CHECK BUG --- check if resolve happens before all the validations
                    resolve(true);
                }
            } catch (err) {
                reject(err);
            }
        });
    };
}

export default Blockchain;
