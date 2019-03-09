import {Route} from "../Interfaces/router.interface";

export abstract class RoutesContract {
    public abstract routes(): Route[];
}
