"use strict";
/**
 * @description Define for /users endpoints
 * @author Ashish Jain
 * @name user.routes
 * @created: 2018-01-27 01:33:53
 */
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
const base_routes_1 = require("../base.routes");
class UserRoutes extends base_routes_1.BaseRoute {
    constructor() {
        super();
        this.init();
    }
    static get router() {
        if (!UserRoutes.instance) {
            UserRoutes.instance = new UserRoutes();
        }
        return UserRoutes.instance.router;
    }
    /* Defining Routes */
    init() {
        this.router.post('/', celebrate_1.celebrate({
            body: {
                name: celebrate_1.Joi.string().required(),
                username: celebrate_1.Joi.string().required(),
                email: celebrate_1.Joi.string().required(),
                password: celebrate_1.Joi.string().min(6).required()
            }
        }), (req, res, next) => {
            // UserController.createUser(req, res, next);
        });
    }
}
/* Define static class members */
UserRoutes.path = '/users';
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=user.routes.js.map