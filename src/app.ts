import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    console.log("HEY THERE");
    res.status(200).send("OK");
});

export default app;
