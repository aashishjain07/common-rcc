"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const log = (...args) => {
    console.log(...args);
};
const logger = winston.createLogger({});
exports.initGlobals = () => {
    global.log = log;
    global.logger = logger;
};
//# sourceMappingURL=global.utility.js.map