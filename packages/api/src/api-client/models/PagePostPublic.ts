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
import type { PostPublic } from './PostPublic';
import {
    PostPublicFromJSON,
    PostPublicFromJSONTyped,
    PostPublicToJSON,
    PostPublicToJSONTyped,
} from './PostPublic';

/**
 * 
 * @export
 * @interface PagePostPublic
 */
export interface PagePostPublic {
    /**
     * 
     * @type {Array<PostPublic>}
     * @memberof PagePostPublic
     */
    items: Array<PostPublic>;
    /**
     * 
     * @type {number}
     * @memberof PagePostPublic
     */
    total: number | null;
    /**
     * 
     * @type {number}
     * @memberof PagePostPublic
     */
    page: number | null;
    /**
     * 
     * @type {number}
     * @memberof PagePostPublic
     */
    size: number | null;
    /**
     * 
     * @type {number}
     * @memberof PagePostPublic
     */
    pages?: number | null;
}

/**
 * Check if a given object implements the PagePostPublic interface.
 */
export function instanceOfPagePostPublic(value: object): value is PagePostPublic {
    if (!('items' in value) || value['items'] === undefined) return false;
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('page' in value) || value['page'] === undefined) return false;
    if (!('size' in value) || value['size'] === undefined) return false;
    return true;
}

export function PagePostPublicFromJSON(json: any): PagePostPublic {
    return PagePostPublicFromJSONTyped(json, false);
}

export function PagePostPublicFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagePostPublic {
    if (json == null) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(PostPublicFromJSON)),
        'total': json['total'],
        'page': json['page'],
        'size': json['size'],
        'pages': json['pages'] == null ? undefined : json['pages'],
    };
}

export function PagePostPublicToJSON(json: any): PagePostPublic {
    return PagePostPublicToJSONTyped(json, false);
}

export function PagePostPublicToJSONTyped(value?: PagePostPublic | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'items': ((value['items'] as Array<any>).map(PostPublicToJSON)),
        'total': value['total'],
        'page': value['page'],
        'size': value['size'],
        'pages': value['pages'],
    };
}

