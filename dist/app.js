"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const cors = require("cors");
const http = require("http");
const helmet = require("helmet");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const celebrate_1 = require("celebrate");
const validations_1 = require("./middlewares/validations");
const index_1 = require("./utility/index");
const routes_1 = require("./routes");
class App {
    constructor() {
        index_1.initGlobals();
        this.app = express();
        this.connectDatabase();
        this.server = new http.Server(this.app);
        this.defineRoutes();
        this.errorHandler();
        this.initConfiguration();
    }
    initConfiguration() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.use(helmet());
    }
    connectDatabase() {
        mongoose.connect(index_1.DB_CONFIG.DB_URI, { useNewUrlParser: true }).then(() => {
            global.logger.info(`Connected to the database ${index_1.DB_CONFIG.DB_URI}`);
        }).catch(error => {
            global.log(error);
            global.logger.error('Error in connecting to the database');
            process.exit(1);
        });
        mongoose.set('useCreateIndex', true);
        mongoose.set('useFindAndModify', false);
        if (process.env.NODE_ENV != 'production')
            mongoose.set('debug', true);
    }
    defineRoutes() {
        this.app.use(routes_1.ApiRoutes.path, routes_1.ApiRoutes.router);
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
    errorHandler() {
        this.app.use((req, res, next, err) => {
            if (celebrate_1.isCelebrate(err)) {
                validations_1.validationResponse(res, err);
            }
            else {
                global.log('Error -> ', err);
                return res.status(500).json({ code: 500, message: 'Internal Server Error', success: false });
            }
        });
    }
}
exports.default = new App().server;
//# sourceMappingURL=app.js.map