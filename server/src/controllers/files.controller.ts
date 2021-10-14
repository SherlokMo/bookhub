import {Request, Response} from 'express';
import Controller from './controller'

class FilesController extends Controller {
    public path = "/files"

    public constructor()
    {
        super();
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(this.path, (req: Request, res: Response) => {
            res.send({status: "files path"});
        })
    }

}
export default FilesController