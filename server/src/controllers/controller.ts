import {Router} from 'express'

abstract class Controller{
    public router = Router();
    abstract intializeRoutes();
}

export default Controller;