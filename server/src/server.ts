import express from "express"
import { Request, Response } from 'express';
import loggerMiddleware from "./middlewares/loggerMiddleware";
import bodyParser from "body-parser"

const app = express();
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(loggerMiddleware);

app.get('/', (req: Request, res: Response) => {
    res.send({message: "hello world!"})
})


const server = app.listen(PORT, () => {
    console.log(`app started listening on port ${PORT} `);
})