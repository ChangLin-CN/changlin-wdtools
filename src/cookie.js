/**
 * @module cookie
 */



/**
 * 字符串两端剪切
 *
 * @param {string}  string
 * @param {string}  fe  f or e or  fe
 * @param {string}  char
 *
 * @example
 * ```javascript
 * trim('   abc   ')//=>'abc'
 * trim('   abc   ','f')//=>'abc   '
 * trim('   abc   ','e')//=>'   abc'
 * trim('**abc**','*')//=>'abc'
 * ```
 *
 * @returns {string}
 */

export class Cookie{
    constructor({maxage,path,domain}={path:'/'}){
        
        //创建cookie对象
        let cookie=(function(){
            let cookie={};
            let all=document.cookie;
            if(all===''){return cookie}
            let list=all.split(';');
            for(let i=0;i<list.length;i++){
                let p=list[i].indexOf('=');
                let name=list[i].substring(0,p).replace(/^\s*/,'').replace(/\s*$/,'');
                let value=list[i].substring(p+1);
                value=decodeURIComponent(value);
                cookie[name]=value;
            }
        
            return cookie
        
        }());
        
        
        //将所有cookie名字存在keys里
        let keys=[];
        for(let key in cookie) keys.push(key);
    
        //定义存储API公用属性和方法
        this.length=keys.length;
    
        //返回第n个cookie的名字
        this.key=function(n){
            if(n<0 || n>keys.length) return null;
            return keys[n];
        };
    
        //返回指定name 的cookie值；
        this.getItem=function(name){
            return cookie[name] || null
        };
    
        //存储cookie的值
    
        this.setItem=function(key,value){
            console.log(cookie);
            if(!(key in cookie)){
                keys.push(key);
                this.length++;
            }
        
            cookie[key]=value;
        
            let newcookie=key+'='+encodeURIComponent(value);
            if(maxage) newcookie+=";max-age="+maxage;
            if(path) newcookie+=';path='+path;
            if(domain) newcookie+=';domain='+domain;
            document.cookie=newcookie;
        };
    
        //删除指定cookie
        this.removeItem=function(key){
            if(!(key in cookie)) return;
            delete cookie[key];
            for (let i=0;i<keys.length;i++){
                if(keys[i]==key){
                    keys.splice(i,1)
                }
            }
            this.length--;
            document.cookie=key+'=;max-age=0'+';path='+path+';domain='+domain;
        };
        //删除所有cookie
        this.clear=function(){
            for(let i=0;i<keys.length;i++){
                document.cookie=keys[i]+'=;max-age=0'+';path='+path+';domain='+domain;
            }
            cookie={};
            keys=[];
            this.length=0;
        }
    }
};
