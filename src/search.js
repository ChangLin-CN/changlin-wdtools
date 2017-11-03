/**
 * @module search
 */

import {isString,isUndefined,isObject} from 'changlin-util'

/**
 * 解析window.location.search
 *
 * @param {string} search
 * @example
 *
 *
 * ```javascript
 *
 * ```
 * @returns {object}
 */

export function searchParse(search) {
    if(!isString(search))throw new Error('The first parameter of searchParse should be string. ')
    let result={};
    if(/^\?/.test(search)){
        search=search.substr(1);
    }
    let arr=search.split('&');
    arr.forEach(function(str){
       let temp=str.split('=');
       if(temp.length===1||temp.length===2){
           result[temp[0]]=isUndefined(temp[1]) ? true :decodeURIComponent(temp[1]);
       }
    });
    return result
}
/**
 * 将对象转为字符串，window.location.search格式 （注意返回字符串不含?）
 *
 * @param {object} object
 * @example
 *
 *
 * ```javascript
 *
 * ```
 * @returns {string}
 */

export function searchStringify(object) {
    if(!isObject(object))throw new Error('The first parameter of searchStringify should be object. ')
    let result='';
   for(let p in object){
       result+=(result==''?'':'&')+p+object[p]
   }
    return result
}