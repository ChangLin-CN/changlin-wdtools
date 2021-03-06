/**
 *
 * @param {object} el
 * @returns {{left: number, top: number}}
 */
export function offset(el) {
    let left = 0
    let top = 0

    while (el) {
        left -= el.offsetLeft
        top -= el.offsetTop
        el = el.offsetParent
    }
    return {
        left,
        top
    }
}