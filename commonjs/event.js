"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;

/**
 * addEventListener
 * @function
 *
 * @param {object} el
 * @param {string} type
 * @param {function} fn
 * @param {boolean} useCapture
 * @returns {undefined}
 */
function addEventListener(el, type, fn) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  el.addEventListener(type, fn, useCapture);
}

/**
 * removeEventListener
 * @function
 *
 * @param {object} el
 * @param {string} type
 * @param {function} fn
 * @param {boolean} useCapture
 * @returns {undefined}
 */
function removeEventListener(el, type, fn) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  el.removeEventListener(type, fn, useCapture);
}