/**
 * @module cookie
 */

import {extend,ONE_YEAR,isObject,isDate,isNumber,isString} from 'changlin-util'

/** Class Cookie. */
export class Cookie{
    /**
     * 创建cookie对象
     * @param {object} config -
     */
    constructor(config){
        let defaultConfig={
            //三年
            maxAge:3*ONE_YEAR/1000,
            path:'/',
            domain:undefined,
        }
        if(isObject(config)){
            extend(defaultConfig,config)
        }
        this.getDefaultConfig=()=>defaultConfig;
    }
    /**
     * Get cookie value
     * @param {string} name cookie name
     * @return {string} cookie value
     */
    get(name){
        if(!isString(name)){
            throw new Error('name should be string')
        }
        let result='',c=document.cookie;
        let match=new RegExp(name+"=([^;]*);?").test(c);
        if(match){result=decodeURIComponent(RegExp.$1)}
        return result
    }
    getObject=(name)=>{
        let result={};
        try{
            result=JSON.parse(this.get(name))
        }catch (e){
        
        }
        return result
    }
    
    /**
     * set cookie value
     * @param {string} name cookie name
     * @param {string | number | object} value cookie value
     * @param {object} attributes cookie value
     * @return {string} cookie value
     */
    set=(name,value,attributes)=>{
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
            attributes=extend(extend({},this.getDefaultConfig()),attributes);
        }else{
            attributes=this.getDefaultConfig();
        }
        
        let c=`${name}=${value};max-age=${attributes.maxAge};path=${attributes.path};${attributes.domain ? ('domain='+attributes.domain):''}`;
        
        document.cookie=c;
        
        return c
    }
    /**
     * set cookie value
     * @param {string} name cookie name
     * @return {string} cookie value
     */
    del=(name)=>{
        return this.set(name,'',{maxAge:0});
    }

    
}
