import {isDom,isArray,isString} from 'changlin-util'

/**
 *
 * @param {*} any
 * @returns {null|object}
 */

export function findEL(any){
    if(isDom(any)){
        return any
    }
    if(isString(any)){
        return document.querySelector(any)
    }
    return null
}

/**
 *
 * @param any
 * @returns {array}
 */
export function findELs(any){
    if(isString(any)){
        return document.querySelectorAll(any)
    }
    if(isArray(any)&&(any.filter(n=>isDom(n)).length===any.length)){
        return any
    }
    return []
}