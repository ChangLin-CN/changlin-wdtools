
# changlin-wdtools
浏览器环境中使用的一些函数    / The  functions that be used in the browser environment

### 安装
```javascript
npm i changlin-wdtools --save
//或者
npm install changlin-wdtools --save
```

### 使用
```javascript
//引入模块内函数
import {setCookie} from "changlin-wdtools"

```



## Functions

<dl>
<dt><a href="#setCookieDefaultConfig">setCookieDefaultConfig(config)</a> ⇒ <code>undefined</code></dt>
<dd><p>修改默认cookie设置</p>
</dd>
<dt><a href="#getCookie">getCookie(name)</a> ⇒ <code>string</code></dt>
<dd><p>获取cookie值</p>
</dd>
<dt><a href="#getCookieObject">getCookieObject(name)</a> ⇒ <code>object</code></dt>
<dd><p>获取cookie值，并解析为对象</p>
</dd>
<dt><a href="#setCookie">setCookie(name, value, attributes)</a> ⇒ <code>string</code></dt>
<dd><p>设置cookie值</p>
</dd>
<dt><a href="#deleteCookie">deleteCookie(name)</a> ⇒ <code>string</code></dt>
<dd><p>删除 cookie</p>
</dd>
<dt><a href="#searchParse">searchParse(search)</a> ⇒ <code>object</code></dt>
<dd><p>解析window.location.search</p>
</dd>
<dt><a href="#searchStringify">searchStringify(object)</a> ⇒ <code>string</code></dt>
<dd><p>将对象转为字符串，window.location.search格式 （注意返回字符串不含?）</p>
</dd>
<dt><a href="#searchExtend">searchExtend(arguments)</a> ⇒ <code>string</code></dt>
<dd><p>合并所有参数，返回字符串 （注意返回字符串不含?）</p>
</dd>
<dt><a href="#getAbsoluteURL">getAbsoluteURL(location)</a> ⇒ <code>string</code></dt>
<dd><p>获取绝对URL</p>
</dd>
<dt><a href="#isWeiXin">isWeiXin()</a> ⇒ <code>boolean</code></dt>
<dd><p>判断是否为微信浏览器</p>
</dd>
<dt><a href="#isAndroid">isAndroid()</a> ⇒ <code>boolean</code></dt>
<dd><p>判断是否为安卓端</p>
</dd>
<dt><a href="#isIOS">isIOS()</a> ⇒ <code>boolean</code></dt>
<dd><p>判断是否为IOS端</p>
</dd>
</dl>

<a name="setCookieDefaultConfig"></a>

## setCookieDefaultConfig(config) ⇒ <code>undefined</code>
修改默认cookie设置

**Kind**: global function  

| Param | Type |
| --- | --- |
| config | <code>object</code> | 

**Example**  
```javascriptsetCookieDefaultConfig({ maxAge:3600,path:'/',domain:'abc.com'})```
<a name="getCookie"></a>

## getCookie(name) ⇒ <code>string</code>
获取cookie值

**Kind**: global function  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

**Example**  
```javascriptgetCookie('cookieName')```
<a name="getCookieObject"></a>

## getCookieObject(name) ⇒ <code>object</code>
获取cookie值，并解析为对象

**Kind**: global function  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

**Example**  
```javascriptgetCookieObject('cookieName')```
<a name="setCookie"></a>

## setCookie(name, value, attributes) ⇒ <code>string</code>
设置cookie值

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | cookie name |
| value | <code>string</code> \| <code>number</code> \| <code>object</code> | cookie value |
| attributes | <code>object</code> | cookie config |

<a name="deleteCookie"></a>

## deleteCookie(name) ⇒ <code>string</code>
删除 cookie

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | cookie name |

<a name="searchParse"></a>

## searchParse(search) ⇒ <code>object</code>
解析window.location.search

**Kind**: global function  

| Param | Type |
| --- | --- |
| search | <code>string</code> | 

**Example**  
```javascriptsearchParse('?c=4&b=5')//=>{c:4,b:5}```
<a name="searchStringify"></a>

## searchStringify(object) ⇒ <code>string</code>
将对象转为字符串，window.location.search格式 （注意返回字符串不含?）

**Kind**: global function  

| Param | Type |
| --- | --- |
| object | <code>object</code> | 

**Example**  
```javascriptsearchStringify({a:'1234'})//=>'a=1234'```
<a name="searchExtend"></a>

## searchExtend(arguments) ⇒ <code>string</code>
合并所有参数，返回字符串 （注意返回字符串不含?）

**Kind**: global function  

| Param | Type |
| --- | --- |
| arguments | <code>object</code> \| <code>string</code> | 

**Example**  
```javascriptsearchExtend('?a=3&b=4', {b:5}, {b:6,c:7})//=>'a=3&b=6&c=7'```
<a name="getAbsoluteURL"></a>

## getAbsoluteURL(location) ⇒ <code>string</code>
获取绝对URL

**Kind**: global function  

| Param | Type |
| --- | --- |
| location | <code>string</code> | 

<a name="isWeiXin"></a>

## isWeiXin() ⇒ <code>boolean</code>
判断是否为微信浏览器

**Kind**: global function  
<a name="isAndroid"></a>

## isAndroid() ⇒ <code>boolean</code>
判断是否为安卓端

**Kind**: global function  
<a name="isIOS"></a>

## isIOS() ⇒ <code>boolean</code>
判断是否为IOS端

**Kind**: global function  
