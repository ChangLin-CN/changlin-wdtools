
import {extend,ONE_YEAR,isObject,isDate,isNumber,isString} from 'changlin-util'


let defaultConfig={
    //三年
    maxAge:3*ONE_YEAR/1000,
    path:'/',
    domain:undefined,
};

/**
 * 修改默认cookie设置
 *
 * @param {object} config
 * @example
 * ```javascript
 *setCookieDefaultConfig({
 *  maxAge:3600,
 *path:'/',
 *domain:'abc.com'
 * })
 * ```
 * @returns {undefined}
 */
export function setCookieDefaultConfig(config){
    if(isObject(config)){
        extend(defaultConfig,config)
    }
}

/**
 * 获取cookie值
 *
 * @param {string} name
 * @example
 * ```javascript
 * getCookie('cookieName')
 * ```
 * @returns {string}
 */
export function  getCookie(name){
    if(!isString(name)){
        throw new Error('name should be string')
    }
    let result='',c=document.cookie;
    let match=new RegExp(name+"=([^;]*);?").test(c);
    if(match){result=decodeURIComponent(RegExp.$1)}
    return result
}

/**
 * 获取cookie值，并解析为对象
 *
 * @param {string} name
 * @example
 * ```javascript
 * getCookieObject('cookieName')
 * ```
 * @returns {object}
 */
export function  getCookieObject(name){
    let result={};
    try{
        result=JSON.parse(getCookie(name))
    }catch (e){
    
    }
    return result
}

/**
 * 设置cookie值
 * @param {string} name cookie name
 * @param {string | number | object} value cookie value
 * @param {object} attributes cookie config
 * @return {string}
 */
export function  setCookie(name,value,attributes){
    if(!isString(name)){
        throw new Error('name should be string')
    }
    if(/;/.test(name)){
        throw new Error('name should not include ;')
    }
    
    if(isString(value)||isNumber(value)){
        value=encodeURIComponent(value)
    }else if(isObject(value)){
        value=encodeURIComponent(JSON.stringify(value));
    }else{
        throw new Error('value should be string | number | object ')
    }
    
    if(isObject(attributes)){
        attributes=extend(extend({},defaultConfig),attributes);
    }else{
        attributes=defaultConfig;
    }
    
    let c=`${name}=${value};max-age=${attributes.maxAge};path=${attributes.path};${attributes.domain ? ('domain='+attributes.domain):''}`;
    
    document.cookie=c;
    
    return c
}

/**
 * 删除 cookie
 * @param {string} name cookie name
 * @return {string}
 */
export function deleteCookie(name){
    return setCookie(name,'',{maxAge:0});
}