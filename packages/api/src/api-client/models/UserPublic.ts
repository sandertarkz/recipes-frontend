/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UserPublic
 */
export interface UserPublic {
    /**
     * 
     * @type {number}
     * @memberof UserPublic
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof UserPublic
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof UserPublic
     */
    email: string;
    /**
     * 
     * @type {Date}
     * @memberof UserPublic
     */
    createdAt: Date;
}

/**
 * Check if a given object implements the UserPublic interface.
 */
export function instanceOfUserPublic(value: object): value is UserPublic {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('username' in value) || value['username'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    return true;
}

export function UserPublicFromJSON(json: any): UserPublic {
    return UserPublicFromJSONTyped(json, false);
}

export function UserPublicFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserPublic {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'username': json['username'],
        'email': json['email'],
        'createdAt': (new Date(json['created_at'])),
    };
}

export function UserPublicToJSON(json: any): UserPublic {
    return UserPublicToJSONTyped(json, false);
}

export function UserPublicToJSONTyped(value?: UserPublic | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'username': value['username'],
        'email': value['email'],
        'created_at': ((value['createdAt']).toISOString()),
    };
}

