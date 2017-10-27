'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Cookie = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _changlinUtil = require('changlin-util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Class Cookie. */
var Cookie = exports.Cookie = function () {
    /**
     * 创建cookie对象
     * @param {object} config -
     */
    function Cookie(config) {
        var _this = this;

        (0, _classCallCheck3.default)(this, Cookie);

        this.getObject = function (name) {
            var result = {};
            try {
                result = JSON.parse(_this.get(name));
            } catch (e) {}
            return result;
        };

        this.set = function (name, value, attributes) {
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
                attributes = (0, _changlinUtil.extend)(_this.getDefaultConfig(), attributes);
            } else {
                attributes = _this.getDefaultConfig();
            }

            var c = name + '=' + value + ';max-age=' + attributes.maxAge + ';path=' + attributes.path + ';' + (attributes.domain ? 'domain=' + attributes.domain : '');

            document.cookie = c;

            return c;
        };

        this.del = function (name) {
            return _this.set(name, '', { maxAge: 0 });
        };

        var defaultConfig = {
            //三年
            maxAge: 3 * _changlinUtil.ONE_YEAR / 1000,
            path: '/',
            domain: undefined
        };
        if ((0, _changlinUtil.isObject)(config)) {
            (0, _changlinUtil.extend)(defaultConfig, config);
        }
        this.getDefaultConfig = function () {
            return defaultConfig;
        };
    }
    /**
     * Get cookie value
     * @param {string} name cookie name
     * @return {string} cookie value
     */


    (0, _createClass3.default)(Cookie, [{
        key: 'get',
        value: function get(name) {
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
         * set cookie value
         * @param {string} name cookie name
         * @param {string | number | object} value cookie value
         * @param {object} attributes cookie value
         * @return {string} cookie value
         */

        /**
         * set cookie value
         * @param {string} name cookie name
         * @return {string} cookie value
         */

    }]);
    return Cookie;
}(); /**
      * @module cookie
      */