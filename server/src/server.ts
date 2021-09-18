import express from "express"
import { Request, Response } from 'express';
import bodyParser from "body-parser"

const app = express();
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
    res.send({message: "I'm lslsing wow!"})
})


const server = app.listen(PORT, () => {
    console.log(`app started listening on port ${PORT} `);
})