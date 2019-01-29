"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseClass {
    constructor(res, rawResponse, data) {
        this._response = res;
        this._headerCode = rawResponse.headerCode;
        this._message = rawResponse.message;
        this._statusCode = rawResponse.statusCode;
        this._success = rawResponse.success;
        this._result = data;
    }
    get statusCode() {
        return this._statusCode;
    }
    get headerCode() {
        return this._headerCode;
    }
    get message() {
        return this._message;
    }
    get success() {
        return this._success;
    }
    get result() {
        return this._result;
    }
    set statusCode(statusCode) {
        this._statusCode = statusCode;
    }
    set headerCode(headerCode) {
        this._headerCode = headerCode;
    }
    set message(message) {
        this._message = message;
    }
    set success(success) {
        this._success = success;
    }
    sendResponse() {
        return this._response.status(this.headerCode).json({
            statusCode: this.statusCode,
            message: this.message,
            success: this.success,
            result: this.result,
        });
    }
}
exports.ResponseClass = ResponseClass;
//# sourceMappingURL=response.util.js.map