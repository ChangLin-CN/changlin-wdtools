
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
export function addEventListener(el, type,fn,useCapture=false) {
    el.addEventListener(type, fn, useCapture)
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
export function removeEventListener(el, type,fn, useCapture=false) {
    el.removeEventListener(type, fn,useCapture )
}