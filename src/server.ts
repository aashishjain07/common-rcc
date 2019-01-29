import App from "./app";

import { APP_CONFIG } from './utility/secret.utility';

const port = APP_CONFIG.PORT || 3000;

App.listen(port, function() {
    console.log(`${process.env.NODE_ENV} server listening on ${port}`);
});