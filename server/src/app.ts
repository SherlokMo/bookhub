import bodyParser from "body-parser";
import express from "express"
import Controller from "./interfaces/controller.interface";

class App{

    public app: express.Application

    constructor(controllers: Controller[]) {
        this.app = express()
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    public listen() {
        const PORT = process.env.PORT || 3000

        this.app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`);
        })
    }

    public getServer(): express.Application {
        return this.app;
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }

    private initializeControllers(controllers: Controller[])
    {
        controllers.forEach((controller: Controller) => {
            this.app.use('/', controller.router)
        })
    }

    private connectToPg()
    {

    }

}

export default App;