import {isString} from 'changlin-util'

/**
 * 获取绝对URL
 * @param {string} location
 * @return {string}
 */
export function getAbsoluteURL(location){
    if(!isString(location))throw new Error('The first parameter of getAbsoluteURL should be string. ')
    let a = document.createElement('A');
       a.href = location;
       return a.href
}