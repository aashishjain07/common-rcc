import { Router } from 'express';

export abstract class BaseRoute {
    constructor() { }
        protected router = Router();
}