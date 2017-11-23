'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isWeiXin = isWeiXin;
exports.isAndroid = isAndroid;
exports.isIOS = isIOS;
var browser = {
    versions: function () {
        var u = navigator.userAgent;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
            iPad: u.indexOf('iPad') > -1,
            weixin: u.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
};

/**
 * 判断是否为微信浏览器
 * @return {boolean}
 */
function isWeiXin() {
    return browser.versions.weixin;
}

/**
 * 判断是否为安卓端
 * @return {boolean}
 */
function isAndroid() {
    return browser.versions.android;
}

/**
 * 判断是否为IOS端
 * @return {boolean}
 */
function isIOS() {
    return browser.versions.ios;
}