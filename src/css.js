import {firstUpperCase} from 'changlin-util'

const style = document.createElement('div').style;

const  cssPrefixes = [ "Webkit", "Moz", "ms" ];

const cssPropsMap={};

/**
 * Support transition
 */

export const hasTransition=cssPrefix('transition') in style;


/**
 *prefix css
 * @param {string} key
 * @returns {string}
 */

export function cssPrefix(key) {
    if(key in cssPropsMap){
        return key;
    }
    let tempKey=key;
    if(!(key in style)){
        let temp=firstUpperCase(key);

        for(let i=0;i<cssPrefixes.length;i++){
            let result=cssPrefixes[i]+temp;
            if(result in cssPrefixes){
                tempKey= result
            }
        }
    }
    cssPropsMap[key]=tempKey;
    //console.log(1);
    return tempKey
}

/**
 * set or get style
 * @param {object} el
 * @param {string} key
 * @param {string} value
 * @returns {string}
 */

export function css(el,key,value) {
    let tempKey;
    tempKey=cssPrefix(key);
    if(value!==undefined){
        return el.style[tempKey]=value
    }
    return el.style[tempKey]
}