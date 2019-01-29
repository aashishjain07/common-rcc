"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const dotenv = require("dotenv");
if (!process.env.NODE_ENV) {
    console.log('NODE_ENV was not defined. Using local environment');
    process.env.NODE_ENV = 'local';
}
exports.ENVIRONMENT = process.env.NODE_ENV;
switch (exports.ENVIRONMENT) {
    case 'development':
        {
            if (fs.existsSync("bin/.env.development")) {
                dotenv.config({ path: "bin/.env.development/" });
            }
            else {
                global.logger.error("Development file not found. Please restart with env file");
                process.exit(1);
            }
        }
        ;
        break;
    case 'staging':
        {
            if (fs.existsSync("bin/.env.staging")) {
                dotenv.config({ path: "bin/.env.staging/" });
            }
            else {
                global.logger.error("Staging file not found. Please restart with env file");
                process.exit(1);
            }
        }
        ;
        break;
    case 'production':
        {
            if (fs.existsSync("bin/.env")) {
                dotenv.config({ path: "bin/.env.local/" });
            }
            else {
                global.logger.error("Development file not found. Please restart with env file");
                process.exit(1);
            }
        }
        ;
        break;
    default: {
        if (fs.existsSync("bin/.env.local")) {
            dotenv.config({ path: "bin/.env.local/" });
        }
        else {
            global.logger.error("Local file not found. Please restart with env file");
            process.exit(1);
        }
    }
}
exports.DB_CONFIG = {
    DB_URI: process.env['DB_URI'],
    DB_USER: process.env['DB_USER'],
    DB_PASSWORD: process.env['DB_PASSWORD']
};
exports.APP_CONFIG = {
    PORT: process.env['PORT'],
};
//# sourceMappingURL=secret.utility.js.map