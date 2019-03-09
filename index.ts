import server from './bootstrap/server';
import {environment} from "./environments/environment";

server.listen(environment.PORT, () => {
    console.log(`Express server listening on port ${environment.PORT}`);
});
