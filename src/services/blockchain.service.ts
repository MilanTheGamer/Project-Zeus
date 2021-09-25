//Interfaces
interface Block {
    index: Number;
    timestamp: String;
    proof: any;
    previousHash: String;
    data: Object;
}
class Blockchain {
    //Define Class variables
    chain: Block[];

    //Constructor
    constructor() {
        this.chain = [];
    }

    //Create Block
    createBlock = (proof: any, previousHash: String): Promise<Block> => {
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
}

export default Blockchain;
