import * as express from 'express'

abstract class Controller{
    public router = express.Router();
    abstract intializeRoutes();
}

export default Controller;