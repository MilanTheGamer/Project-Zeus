import express, { Application, Request, Response, NextFunction } from "express";

//testHash
import hash from "./utils/testHash";

const app: Application = express();

app.get("/testHas", (req: Request, res: Response, next: NextFunction) => {
    let hashStart = hash.substring(0, 4);
    console.log(hashStart);
    res.status(200).send("OK");
});

export default app;
