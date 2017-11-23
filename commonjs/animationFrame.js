"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


/**
* @function
* @param {function} callback
* @return {number}
*
* */
var requestAnimationFrame = exports.requestAnimationFrame = function () {
    var time = 16.66666666666666;
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        return setTimeout(callback, time);
    };
}();

/**
* @function
* @param {number} id
* @return {undefined}
*
* */
var cancelAnimationFrame = exports.cancelAnimationFrame = window.cancelAnimationFrame || function (id) {
    clearTimeout(id);
};