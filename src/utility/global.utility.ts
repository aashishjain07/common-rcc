import * as winston from "winston";

declare global {
    namespace NodeJS {
        interface Global {
            log: any
            logger: any
        }
    }
}

const log = (...args) => {
    console.log(...args);
}

const logger = winston.createLogger({

})

export const initGlobals = () => {
    global.log = log;
    global.logger = logger
}