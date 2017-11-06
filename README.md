
# changlin-wdtools
浏览器环境中使用的一些函数    / The  functions that be used in the browser environment

## API
## Modules

<dl>
<dt><a href="#module_cookie">cookie</a></dt>
<dd></dd>
<dt><a href="#module_search">search</a></dt>
<dd></dd>
</dl>

<a name="module_cookie"></a>

## cookie

* [cookie](#module_cookie)
    * [.setCookieDefaultConfig(config)](#module_cookie.setCookieDefaultConfig) ⇒ <code>undefined</code>
    * [.getCookie(name)](#module_cookie.getCookie) ⇒ <code>string</code>
    * [.getCookieObject(name)](#module_cookie.getCookieObject) ⇒ <code>object</code>
    * [.setCookie(name, value, attributes)](#module_cookie.setCookie) ⇒ <code>string</code>
    * [.deleteCookie(name)](#module_cookie.deleteCookie) ⇒ <code>string</code>

<a name="module_cookie.setCookieDefaultConfig"></a>

### cookie.setCookieDefaultConfig(config) ⇒ <code>undefined</code>
修改默认cookie设置

**Kind**: static method of [<code>cookie</code>](#module_cookie)  

| Param | Type |
| --- | --- |
| config | <code>object</code> | 

**Example**  
```javascriptsetCookieDefaultConfig({ maxAge:3600,path:'/',domain:'abc.com'})```
<a name="module_cookie.getCookie"></a>

### cookie.getCookie(name) ⇒ <code>string</code>
获取cookie值

**Kind**: static method of [<code>cookie</code>](#module_cookie)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

**Example**  
```javascriptgetCookie('cookieName')```
<a name="module_cookie.getCookieObject"></a>

### cookie.getCookieObject(name) ⇒ <code>object</code>
获取cookie值，并解析为对象

**Kind**: static method of [<code>cookie</code>](#module_cookie)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

**Example**  
```javascriptgetCookieObject('cookieName')```
<a name="module_cookie.setCookie"></a>

### cookie.setCookie(name, value, attributes) ⇒ <code>string</code>
设置cookie值

**Kind**: static method of [<code>cookie</code>](#module_cookie)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | cookie name |
| value | <code>string</code> \| <code>number</code> \| <code>object</code> | cookie value |
| attributes | <code>object</code> | cookie value |

<a name="module_cookie.deleteCookie"></a>

### cookie.deleteCookie(name) ⇒ <code>string</code>
删除 cookie

**Kind**: static method of [<code>cookie</code>](#module_cookie)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | cookie name |

<a name="module_search"></a>

## search

* [search](#module_search)
    * [.searchParse(search)](#module_search.searchParse) ⇒ <code>object</code>
    * [.searchStringify(object)](#module_search.searchStringify) ⇒ <code>string</code>
    * [.searchExtend(arguments)](#module_search.searchExtend) ⇒ <code>string</code>

<a name="module_search.searchParse"></a>

### search.searchParse(search) ⇒ <code>object</code>
解析window.location.search

**Kind**: static method of [<code>search</code>](#module_search)  

| Param | Type |
| --- | --- |
| search | <code>string</code> | 

**Example**  
```javascript```
<a name="module_search.searchStringify"></a>

### search.searchStringify(object) ⇒ <code>string</code>
将对象转为字符串，window.location.search格式 （注意返回字符串不含?）

**Kind**: static method of [<code>search</code>](#module_search)  

| Param | Type |
| --- | --- |
| object | <code>object</code> | 

**Example**  
```javascript```
<a name="module_search.searchExtend"></a>

### search.searchExtend(arguments) ⇒ <code>string</code>
合并所有参数，返回字符串 （注意返回字符串不含?）

**Kind**: static method of [<code>search</code>](#module_search)  

| Param | Type |
| --- | --- |
| arguments | <code>object</code> \| <code>string</code> | 

**Example**  
```javascript```
