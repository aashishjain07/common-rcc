import * as fs from "fs";
import * as dotenv from "dotenv";


if (!process.env.NODE_ENV) {
    console.log('NODE_ENV was not defined. Using local environment');
    process.env.NODE_ENV = 'local';
}

export const ENVIRONMENT = process.env.NODE_ENV;

switch (ENVIRONMENT) {
    case 'development': {
        if (fs.existsSync("bin/.env.development")) {
            dotenv.config({ path: "bin/.env.development/" })
        } else {
            global.logger.error("Development file not found. Please restart with env file");
            process.exit(1);
        }
    }; break;
    case 'staging': {
        if (fs.existsSync("bin/.env.staging")) {
            dotenv.config({ path: "bin/.env.staging/" })
        } else {
            global.logger.error("Staging file not found. Please restart with env file");
            process.exit(1);
        }
    }; break;
    case 'production': {
        if (fs.existsSync("bin/.env")) {
            dotenv.config({ path: "bin/.env.local/" })
        } else {
            global.logger.error("Development file not found. Please restart with env file");
            process.exit(1);
        }
    }; break;
    default: {
        if (fs.existsSync("bin/.env.local")) {
            dotenv.config({ path: "bin/.env.local/" })
        } else {
            global.logger.error("Local file not found. Please restart with env file");
            process.exit(1);
        }
    }
}

export const DB_CONFIG = {
    DB_URI: process.env['DB_URI'],
    DB_USER: process.env['DB_USER'],
    DB_PASSWORD: process.env['DB_PASSWORD']
}

export const APP_CONFIG = {
    PORT: process.env['PORT'],
   // SALT: process.env['SALT'],
}