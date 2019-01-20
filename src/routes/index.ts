import { BaseRoute } from './base.routes';
import { userRoutes } from './user';

export class ApiRoutes extends BaseRoute {
    public static path = '/api';
    public static instance: ApiRoutes;
    private constructor() {
        super()
        this.init();
    }

    static get router() {
        if (!ApiRoutes.instance) {
            ApiRoutes.instance = new ApiRoutes();
        }
        return ApiRoutes.instance.router;
    }

    private init() {
        this.printRoutes();
        this.setLanguage();
        this.router.use(userRoutes.path, userRoutes.router)
    }

    // print req details
    private printRoutes() {
        this.router.use('/', (req, res, next) => {
            res.locals.lang = req.headers.lang ? req.headers.lang : 'EN';
        })
    }

    private setLanguage() {
        this.router.use('/', (req, res, next) => {
            res.locals.lang = req.headers.lang ? req.headers.lang : 'EN';
        })
    }
}

