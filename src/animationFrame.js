

/**
* @function
* @param {function} callback
* @return {number}
*
* */
export const requestAnimationFrame = (function () {
    let time = 16.66666666666666;
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            return setTimeout(callback, time)
        }
})();


/**
* @function
* @param {number} id
* @return {undefined}
*
* */
export const cancelAnimationFrame=window.cancelAnimationFrame||function (id){clearTimeout(id)};