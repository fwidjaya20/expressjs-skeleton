import * as express from 'express';
import {Api} from "../routes/api";
import {ExampleAcl} from "../app/Example/example.acl";
import {Route} from "../contracts/Interfaces/router.interface";

class Server {
    public server: express.Application;
    private readonly router: express.Router;
    private routeCollections: Route[] = [];

    public constructor() {
        this.server = express();
        this.router = express.Router();

        this.initRoutes();
        this.routes();
    }

    private initRoutes(): void {
        this.routeCollections = [
            {
                prefix: 'api',
                children: new Api().routes()
            },
            {
                path: '',
                method: 'get',
                accessList: ExampleAcl.getExample2
            }
        ];
    }

    private routes(): void {
        this.routeCollections.map((R: Route) => {
            this.routeFactory(R);
        });

        this.server.use('/', this.router);
    }

    private routeFactory(R: Route) {
        if (!R.prefix && !R.children) {
            if (!R.method) {
                throw new Error(`Route Method must be defined`);
            }

            if (!R.path && !R.accessList) {
                throw new Error(`Route Path and Access List must be defined!`);
            }

            this.router[R.method](`/${R.path}`, R.accessList);
        } else {
            R.children.map((cR: Route) => {
                if (cR.prefix && cR.children) {
                    cR.prefix = `${R.prefix}/${cR.prefix}`;
                    this.routeFactory(cR);
                } else {
                    this.router[cR.method](`/${R.prefix}/${cR.path}`, cR.accessList);
                }
            });
        }
    }
}

export default new Server().server;