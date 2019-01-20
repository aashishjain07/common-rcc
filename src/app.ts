import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors';
import * as http from 'http';
import * as helmet from 'helmet';
import * as mongoose from 'mongoose';
//import * as { isCelebrate } from 'celebrate';
import * as bodyParser from 'body-parser';
import { DB_CONFIG } from './utility/index';
import { ApiRoutes } from './routes';

class App {
    public app: express.Application;
    public server;

    constructor() {
        // initGlobals();
        this.app = express();
        this.connectDatabase();
        this.server = new http.Server(this.app);
        this.defineRoutes();
        this.errorHandler();
        this.initConfiguration();

    }

    private initConfiguration(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.use(helmet());
    }

    private connectDatabase(): void {
        mongoose.connect(DB_CONFIG.DB_URI, { useNewUrlParser: true }).then(() => {
            global.logger.info(`Connected to the database ${DB_CONFIG.DB_URI}`);
        }).catch(error => {
            global.log(error);
            global.logger.error('Error in connecting to the database');
            process.exit(1);
        });

        mongoose.set('useCreateIndex', true);
        mongoose.set('useFindAndModify', false);

        if(process.env.NODE_ENV != 'production') mongoose.set('debug', true);
    }

    private defineRoutes(): void {
        this.app.use(ApiRoutes.path, ApiRoutes.router);
        
        this.app.get('/*', (req, res) => {
            res.sendFile(path.join(__dirname, '../client/index.html'));
        });
        
        this.app.use('/api-doc', (req, res) => {
            return res.sendFile(process.cwd() + '/src/docs/v1-routes.html');
        });
    

        this.app.use((req, res, next) => {
            res.status(404).json({
                success: false,
                message: 'Invalid route',
                result: {},
                statusCode: 404
            });
        });
    }

    private errorHandler(): void {
    // this.app.use((req, res, next, err) => {
    //     if (isCelebrate(err)) {
    //         validationResponse(res, err);
    //     } else {
    //         global.log('Error -> ', err );
    //         return res.status(500).json({ code: 500, message: 'Internal Server Error', success: false })
    //     }
    // })
    
    }
   
}



