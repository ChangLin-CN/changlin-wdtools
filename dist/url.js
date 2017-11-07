'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAbsoluteURL = getAbsoluteURL;

var _changlinUtil = require('changlin-util');

/**
 * 获取绝对URL
 * @param {string} location
 * @return {string}
 */
function getAbsoluteURL(location) {
  if (!(0, _changlinUtil.isString)(location)) throw new Error('The first parameter of getAbsoluteURL should be string. ');
  var a = document.createElement('A');
  a.href = location;
  return a.href;
}