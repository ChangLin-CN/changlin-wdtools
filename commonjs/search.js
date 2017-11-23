'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.searchParse = searchParse;
exports.searchStringify = searchStringify;
exports.searchExtend = searchExtend;

var _changlinUtil = require('changlin-util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 解析window.location.search
 *
 * @param {string} search
 * @example
 *
 *
 * ```javascript
 *searchParse('?c=4&b=5')//=>{c:4,b:5}
 * ```
 * @returns {object}
 */
function searchParse() {
    var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.search;

    if (!(0, _changlinUtil.isString)(search)) throw new Error('The first parameter of searchParse should be string. ');
    var result = {};
    if (/^\?/.test(search)) {
        search = search.substr(1);
    }
    var arr = search.split('&');
    arr.forEach(function (str) {
        var temp = str.split('=');
        if (temp.length === 1 || temp.length === 2) {
            result[temp[0]] = (0, _changlinUtil.isUndefined)(temp[1]) ? true : decodeURIComponent(temp[1]);
        }
    });
    return result;
}

/**
 * 将对象转为字符串，window.location.search格式 （注意返回字符串不含?）
 *
 * @param {object} object
 * @example
 *
 *
 * ```javascript
 *searchStringify({a:'1234'})//=>'a=1234'
 * ```
 * @returns {string}
 */
function searchStringify(object) {
    if (!(0, _changlinUtil.isObject)(object)) throw new Error('The first parameter of searchStringify should be object. ');
    var result = '';
    for (var p in object) {
        if ((0, _changlinUtil.isString)(object[p]) || (0, _changlinUtil.isNumber)(Object[p])) {
            result += '' + (result === '' ? '' : '&') + p + '=' + encodeURIComponent(object[p]);
        } else if ((0, _changlinUtil.isBoolean)(object[p]) && object[p]) {
            result += '' + (result === '' ? '' : '&') + p;
        }
    }
    return result;
}

/**
 * 合并所有参数，返回字符串 （注意返回字符串不含?）
 *
 * @param {object|string} arguments
 * @example
 *
 *
 * ```javascript
 *searchExtend('?a=3&b=4', {b:5}, {b:6,c:7})//=>'a=3&b=6&c=7'
 * ```
 * @returns {string}
 */

function searchExtend() {
    if (arguments.length === 0) {
        return;
    }
    var arr = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = (0, _getIterator3.default)(arguments), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var n = _step.value;

            if ((0, _changlinUtil.isObject)(n)) {
                arr.push((0, _changlinUtil.extend)(n));
            } else if ((0, _changlinUtil.isString)(n)) {
                arr.push(searchParse(n));
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var obj = _changlinUtil.extend.apply(undefined, arr);
    var result = searchStringify(obj);
    return result;
}