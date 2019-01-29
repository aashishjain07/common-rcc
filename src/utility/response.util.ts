import { Response } from 'express';
import { IResponseRaw } from '../interfaces/response.interface';

export class ResponseClass {

    private _statusCode: number;
    private _headerCode: number;
    private _message: string;
    private _success: boolean;
    private _result: any;
    private _response: Response;

    constructor(res: Response, rawResponse: IResponseRaw, data: any) {
        this._response = res;
        this._headerCode = rawResponse.headerCode;
        this._message = rawResponse.message;
        this._statusCode = rawResponse.statusCode;
        this._success = rawResponse.success;
        this._result = data;
    }

    get statusCode(): number {
        return this._statusCode;
    }
    
    get headerCode(): number {
        return this._headerCode;
    }
    
    get message(): string {
        return this._message;
    }
    
    get success(): boolean {
        return this._success;
    }

    get result() {
        return this._result
    }

    set statusCode(statusCode: number) {
        this._statusCode = statusCode
    }
    set headerCode(headerCode: number) {
        this._headerCode = headerCode;
    }
    set message(message: string) {
        this._message = message;
    }
    set success(success: boolean) {
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