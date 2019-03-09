import * as express from 'express';
import {AccessList} from "../AccessList/access-list";

export interface ServerRoute {
    prefix: string;
    routes: express.Router;
}

export interface Route {
    prefix?: string;
    path?: string,
    accessList?: AccessList,
    children?: Route[];
    method?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'option';
}
