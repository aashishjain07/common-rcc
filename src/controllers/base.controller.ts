import { IResponseRaw } from '../interfaces/response.interface'
import { ResponseClass } from 'utility';

export class BaseController {
    constructor() {}

    sendResponse(response: Response, meta: IResponseRaw, data: any = {}, message?: string) {
        const _response = new ResponseClass(response, meta, data) 
            if (message) {
                _response.message = message;
            }
            return _response.sendResponse();
           
        }
    }
