"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const secret_utility_1 = require("./utility/secret.utility");
const port = secret_utility_1.APP_CONFIG.PORT || 3000;
app_1.default.listen(port, function () {
    console.log(`${process.env.NODE_ENV} server listening on ${port}`);
});
//# sourceMappingURL=server.js.map