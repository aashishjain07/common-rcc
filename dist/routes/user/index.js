"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_routes_1 = require("../base.routes");
class userRoutes extends base_routes_1.BaseRoute {
    constructor() {
        super();
        this.init();
    }
    static get router() {
        if (!userRoutes.instance) {
            userRoutes.instance = new userRoutes();
        }
        return userRoutes.instance.router;
    }
    init() {
    }
}
userRoutes.path = '/v1';
exports.userRoutes = userRoutes;
//# sourceMappingURL=index.js.map