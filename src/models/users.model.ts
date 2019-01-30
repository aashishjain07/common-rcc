//import * as mongoose from 'mongoose';
import { Document, model, Model, Schema } from 'mongoose';
import { ENUM } from '../constants/index';

export interface IUser extends Document {
    name: String,
    username: String,
    email: String,
    password: String,
    profileImage: String,
    gender: String,
    country: String,
    timezone: String,
    status: Number,
    loggedIn: Boolean,
    verified: Boolean,
    isDelete: Boolean,
    registerationDate: Date,
    social: userSocial,
    meta: meta
}
export interface userSocial {
    facebookToken: String,
    facebookLogin: String,
    instagramToken: String,
    instagramLogin: String
}

export interface meta {
    tokenData: String,
    tokenExpiryDate: Date
}

const schema = new Schema({
    name: {
        type: Schema.Types.String,
        trim: true
    },
    username: {
        type: String,
        trim: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    profileImage: {
        type: String,
        trim: true,
        default: true
    }, 
    gender: {
        type: String,
        default: 'n/a',
        enum: ['male', 'female', 'n/a']
    }, 
    country: {
        type: String,
        default: 'India'
    },
    timezone: {
        type: String,
        default: ''
    },
    status: {
        type: Number,
        index: true,
        default: ENUM.USER.STATUS.DEACTIVE
    },
    loggedIn: {
        type: Boolean,
        default: false
    }, 
    verified: {
        type: Boolean,
        default: false
    },
    social: {
        facebookToken: {
            type: String,
            index: true,
            default: ''
        },
        facebookLogin: {
            type: Boolean,
            default: false
        }, 
        instagramToken: {
            type: String,
            index: true,
            default: ''    
        },
        instagramLogin: {
            type: Boolean,
            default: false
        }, 
    },
    meta: {
        tokenData: {
            token: {
                type: String,
                default: ''
            },
            tokenExpiryDate: {
                type: Date,
                default: null
            }
        }
    },
    isDelete: {
        type: Boolean,
        default: false
    },
    registerationDate: {
        type: Boolean,
        default: Date.now,
        index: true
    }
}, {
    timestamps: true,
    collection: 'users'
})
export const USER = model('USER', schema);
