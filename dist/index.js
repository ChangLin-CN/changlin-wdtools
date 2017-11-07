'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cookie = require('./cookie.js');

Object.defineProperty(exports, 'getCookie', {
  enumerable: true,
  get: function get() {
    return _cookie.getCookie;
  }
});
Object.defineProperty(exports, 'setCookie', {
  enumerable: true,
  get: function get() {
    return _cookie.setCookie;
  }
});
Object.defineProperty(exports, 'setCookieDefaultConfig', {
  enumerable: true,
  get: function get() {
    return _cookie.setCookieDefaultConfig;
  }
});
Object.defineProperty(exports, 'deleteCookie', {
  enumerable: true,
  get: function get() {
    return _cookie.deleteCookie;
  }
});
Object.defineProperty(exports, 'getCookieObject', {
  enumerable: true,
  get: function get() {
    return _cookie.getCookieObject;
  }
});

var _search = require('./search.js');

Object.defineProperty(exports, 'searchParse', {
  enumerable: true,
  get: function get() {
    return _search.searchParse;
  }
});
Object.defineProperty(exports, 'searchStringify', {
  enumerable: true,
  get: function get() {
    return _search.searchStringify;
  }
});
Object.defineProperty(exports, 'searchExtend', {
  enumerable: true,
  get: function get() {
    return _search.searchExtend;
  }
});

var _url = require('./url.js');

Object.defineProperty(exports, 'getAbsoluteURL', {
  enumerable: true,
  get: function get() {
    return _url.getAbsoluteURL;
  }
});

var _browser = require('./browser.js');

Object.defineProperty(exports, 'isAndroid', {
  enumerable: true,
  get: function get() {
    return _browser.isAndroid;
  }
});
Object.defineProperty(exports, 'isIOS', {
  enumerable: true,
  get: function get() {
    return _browser.isIOS;
  }
});
Object.defineProperty(exports, 'isWeiXin', {
  enumerable: true,
  get: function get() {
    return _browser.isWeiXin;
  }
});