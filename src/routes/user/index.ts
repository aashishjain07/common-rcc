import { BaseRoute } from "../base.routes";

export class userRoutes extends BaseRoute {
    public static path: String = '/v1';
    public static instance: userRoutes;

    private constructor() {
        super();
        this.init();
    }

    static get router() {
        if (!userRoutes.instance) {
            userRoutes.instance = new userRoutes();
        }
        return userRoutes.instance.router
    }

    private init() {

    }
}

