"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_routes_1 = require("./base.routes");
const user_1 = require("./user");
class ApiRoutes extends base_routes_1.BaseRoute {
    constructor() {
        super();
        this.init();
    }
    static get router() {
        if (!ApiRoutes.instance) {
            ApiRoutes.instance = new ApiRoutes();
        }
        return ApiRoutes.instance.router;
    }
    init() {
        this.printRoutes();
        this.setLanguage();
        this.router.use(user_1.userRoutes.path, user_1.userRoutes.router);
    }
    // print req details
    printRoutes() {
        this.router.use('/', (req, res, next) => {
            res.locals.lang = req.headers.lang ? req.headers.lang : 'EN';
            console.log("\n=============================== NEW REQUEST -> ", req.method, req.originalUrl);
            console.log(req.body);
            console.log("\n===============================");
            next();
        });
    }
    setLanguage() {
        this.router.use('/', (req, res, next) => {
            res.locals.lang = req.headers.lang ? req.headers.lang : 'EN';
            next();
        });
    }
}
ApiRoutes.path = '/api';
exports.ApiRoutes = ApiRoutes;
//# sourceMappingURL=index.js.map