import App from "./app";
import FilesController from "./controllers/files.controller";

const app = new App([
    new FilesController()
]);

app.listen();