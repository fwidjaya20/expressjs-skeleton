import {Request, Response} from 'express';
import {AccessList} from "../../contracts/AccessList/access-list";

export class ExampleAcl extends AccessList {
    public static getExample(request: Request, response: Response): any {
        response
            .status(200)
            .json({
                message: 'Hello World Example'
            });
    }

    public static getExample2(request: Request, response: Response): any {
        response
            .status(200)
            .json({
                message: 'Hello World Example 2'
            });
    }

    public static getProductExample(request: Request, response: Response): any {
        response
            .status(200)
            .json({
                message: 'Hello World Product Example'
            });
    }

    public static getProductExampleById(request: Request, response: Response): any {
        response
            .status(200)
            .json({
                message: `Get Product Example by ID (${request.params.id})`
            })
    }
}
