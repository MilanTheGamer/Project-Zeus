//Initiate BlockChain
import Blockchain from "../services/blockchain.service";
let blockchain = new Blockchain();

//Routes
import { Router, Request, Response } from "express";
let router = Router();

router.get("/", (req: Request, res: Response) => {
    res.status(200).send("OK");
});

router.get("/mineBlock", (req: Request, res: Response) => {
    blockchain.mineBlock();
    res.status(200).send("OK");
});

router.get("/getChain", (req: Request, res: Response) => {
    let chain = blockchain.chain;
    let data = {
        chain,
        length: chain.length,
    };
    res.status(200).json(data);
});

export default router;
