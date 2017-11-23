'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hasTransition = undefined;
exports.cssPrefix = cssPrefix;
exports.css = css;

var _changlinUtil = require('changlin-util');

var style = document.createElement('div').style;

var cssPrefixes = ["Webkit", "Moz", "ms"];

var cssPropsMap = {};

/**
 * Support transition
 */

var hasTransition = exports.hasTransition = cssPrefix('transition') in style;

/**
 *prefix css
 * @param {string} key
 * @returns {string}
 */

function cssPrefix(key) {
    if (key in cssPropsMap) {
        return key;
    }
    var tempKey = key;
    if (!(key in style)) {
        var temp = (0, _changlinUtil.firstUpperCase)(key);

        for (var i = 0; i < cssPrefixes.length; i++) {
            var result = cssPrefixes[i] + temp;
            if (result in cssPrefixes) {
                tempKey = result;
            }
        }
    }
    cssPropsMap[key] = tempKey;
    //console.log(1);
    return tempKey;
}

/**
 * set or get style
 * @param {object} el
 * @param {string} key
 * @param {string} value
 * @returns {string}
 */

function css(el, key, value) {
    var tempKey = void 0;
    tempKey = cssPrefix(key);
    if (value !== undefined) {
        return el.style[tempKey] = value;
    }
    return el.style[tempKey];
}