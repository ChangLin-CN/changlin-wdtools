

import {isString,isUndefined,isObject,isNumber,isBoolean,extend} from 'changlin-util'

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
       if(isString(object[p])||isNumber(Object[p])){
           result+=`${result===''?'':'&'}${p}=${encodeURIComponent(object[p])}`
       }else if(isBoolean(object[p])&&object[p]){
           result+=`${result===''?'':'&'}${p}`
       }
   }
    return result
}

/**
 * 合并所有参数，返回字符串 （注意返回字符串不含?）
 *
 * @param {object|string} arguments
 * @example
 *
 *
 * ```javascript
 *
 * ```
 * @returns {string}
 */

export function searchExtend() {
    if(arguments.length===0){
        return
    }
    let arr=[];
    for(let n of arguments){
        if(isObject(n)){
            arr.push(extend(n))
        }else if(isString(n)){
            arr.push(searchParse(n))
        }
    }
    let obj=extend(...arr);
    let result=searchStringify(obj);
    return result
}