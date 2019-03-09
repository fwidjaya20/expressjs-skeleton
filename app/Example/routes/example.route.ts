import {RoutesContract} from "../../../contracts/Router/routes.contract";
import {Route} from "../../../contracts/Interfaces/router.interface";
import {ExampleAcl} from "../example.acl";

export class ExampleRoute extends RoutesContract {
    public routes(): Route[] {
        return [
            {
                path: ``,
                accessList: ExampleAcl.getProductExample,
                method: 'get'
            },
            {
                path: `:id`,
                accessList: ExampleAcl.getProductExampleById,
                method: 'get'
            }
        ];
    }
}