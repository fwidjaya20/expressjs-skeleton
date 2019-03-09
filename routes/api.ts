import {RoutesContract} from "../contracts/Router/routes.contract";
import {ExampleAcl} from "../app/Example/example.acl";
import {Route} from "../contracts/Interfaces/router.interface";
import {ExampleRoute} from "../app/Example/routes/example.route";

export class Api extends RoutesContract {
    public routes(): Route[] {
        return [
            {
                path: ``,
                accessList: ExampleAcl.getExample,
                method: 'get'
            },
            {
                prefix: 'example',
                children: new ExampleRoute().routes()
            }
        ];
    }
}