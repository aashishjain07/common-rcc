/**
 * @description Define for /users endpoints
 * @author Ashish Jain
 * @name user.routes
 * @created: 2018-01-27 01:33:53
 */

import { celebrate, Joi, errors } from 'celebrate';
import { BaseRoute } from '../base.routes';
import { ENUM } from '../../constants';

export class UserRoutes extends BaseRoute {
    
    /* Define static class members */
    public static path = '/users';
    private static instance: UserRoutes;

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
private init() {
    this.router.post('/', 
    celebrate({
        body: {
            name: Joi.string().required(),
            username: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().min(6).required()
        }
    }),
    (req, res, next) => {
       // UserController.createUser(req, res, next);
    })
}

}