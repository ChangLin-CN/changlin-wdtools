'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.setCookieDefaultConfig = setCookieDefaultConfig;
exports.getCookie = getCookie;
exports.getCookieObject = getCookieObject;
exports.setCookie = setCookie;
exports.deleteCookie = deleteCookie;

var _changlinUtil = require('changlin-util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultConfig = {
    //三年
    maxAge: 3 * _changlinUtil.ONE_YEAR / 1000,
    path: '/',
    domain: undefined
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
function setCookieDefaultConfig(config) {
    if ((0, _changlinUtil.isObject)(config)) {
        (0, _changlinUtil.extend)(defaultConfig, config);
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
function getCookie(name) {
    if (!(0, _changlinUtil.isString)(name)) {
        throw new Error('name should be string');
    }
    var result = '',
        c = document.cookie;
    var match = new RegExp(name + "=([^;]*);?").test(c);
    if (match) {
        result = decodeURIComponent(RegExp.$1);
    }
    return result;
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
function getCookieObject(name) {
    var result = {};
    try {
        result = JSON.parse(getCookie(name));
    } catch (e) {}
    return result;
}

/**
 * 设置cookie值
 * @param {string} name cookie name
 * @param {string | number | object} value cookie value
 * @param {object} attributes cookie config
 * @return {string}
 */
function setCookie(name, value, attributes) {
    if (!(0, _changlinUtil.isString)(name)) {
        throw new Error('name should be string');
    }
    if (/;/.test(name)) {
        throw new Error('name should not include ;');
    }

    if ((0, _changlinUtil.isString)(value) || (0, _changlinUtil.isNumber)(value)) {
        value = encodeURIComponent(value);
    } else if ((0, _changlinUtil.isObject)(value)) {
        value = encodeURIComponent((0, _stringify2.default)(value));
    } else {
        throw new Error('value should be string | number | object ');
    }

    if ((0, _changlinUtil.isObject)(attributes)) {
        attributes = (0, _changlinUtil.extend)((0, _changlinUtil.extend)({}, defaultConfig), attributes);
    } else {
        attributes = defaultConfig;
    }

    var c = name + '=' + value + ';max-age=' + attributes.maxAge + ';path=' + attributes.path + ';' + (attributes.domain ? 'domain=' + attributes.domain : '');

    document.cookie = c;

    return c;
}

/**
 * 删除 cookie
 * @param {string} name cookie name
 * @return {string}
 */
function deleteCookie(name) {
    return setCookie(name, '', { maxAge: 0 });
}