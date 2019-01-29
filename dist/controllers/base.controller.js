"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utility_1 = require("utility");
class BaseController {
    constructor() { }
    sendResponse(response, meta, data = {}, message) {
        const _response = new utility_1.ResponseClass(response, meta, data);
        if (message) {
            _response.message = message;
        }
        return _response.sendResponse();
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=base.controller.js.map