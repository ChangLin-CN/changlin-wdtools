'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findEL = findEL;
exports.findELs = findELs;

var _changlinUtil = require('changlin-util');

/**
 *
 * @param {*} any
 * @returns {null|object}
 */

function findEL(any) {
    if ((0, _changlinUtil.isDom)(any)) {
        return any;
    }
    if ((0, _changlinUtil.isString)(any)) {
        return document.querySelector(any);
    }
    return null;
}

/**
 *
 * @param any
 * @returns {array}
 */
function findELs(any) {
    if ((0, _changlinUtil.isString)(any)) {
        return document.querySelectorAll(any);
    }
    if ((0, _changlinUtil.isArray)(any) && any.filter(function (n) {
        return (0, _changlinUtil.isDom)(n);
    }).length === any.length) {
        return any;
    }
    return [];
}