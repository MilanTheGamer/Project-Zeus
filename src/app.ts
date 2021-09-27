import express, { Application, Request, Response, NextFunction } from "express";
import blockchainRoute from "./routes/blockchain.route";

const app: Application = express();

app.use("/api/blockchain", blockchainRoute);

export default app;
