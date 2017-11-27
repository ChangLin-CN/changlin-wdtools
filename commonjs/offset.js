"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.offset = offset;
/**
 *
 * @param {object} el
 * @returns {{left: number, top: number}}
 */
function offset(el) {
    var left = 0;
    var top = 0;

    while (el) {
        left -= el.offsetLeft;
        top -= el.offsetTop;
        el = el.offsetParent;
    }
    return {
        left: left,
        top: top
    };
}