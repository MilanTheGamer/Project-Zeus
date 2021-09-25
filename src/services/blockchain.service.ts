//Import Essential Modules
import crypto, { createHash } from "crypto";
let createHah = crypto.createHash("sha256");

//Interfaces
interface Block {
    index: number;
    timestamp: string;
    proof: string;
    previousHash: string;
    data: object;
}
class Blockchain {
    //Define Class variables
    chain: Block[];

    //Constructor
    constructor() {
        this.chain = [];
    }

    //Create Block
    createBlock = (proof: string, previousHash: string): Promise<Block> => {
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
                    let hashOperation = createHah
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
}

export default Blockchain;
