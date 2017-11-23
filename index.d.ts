/**
 * 类型声明文件
 * 用于 代码提示
 */

declare module "changlin-wdtools" {
    interface cookieConfig {
        maxAge?: number;
        path?: string;
        domain?: string;

        [propName: string]: any;
    }

    export function setCookieDefaultConfig(config: cookieConfig): void

    export function getCookie(name: string): string

    export function getCookieObject(name: string): object

    export function setCookie(name: string, value: string | number | object, attributes: cookieConfig): string

    export function deleteCookie(name: string): string

    export function isWeiXin(): boolean

    export function isAndroid(): boolean

    export function isIOS(): boolean

    export function searchParse(search: string = window.location.search): object

    export function searchStringify(obj: object): string

    export function searchExtend(...params: (string | object)[]): string

    export function getAbsoluteURL(url: string): string

    export function requestAnimationFrame(callback: () => {}): number

    export function cancelAnimationFrame(id: number): void

    export function cssPrefix(key: string): string

    export function css(el: object, key: string, value?: string): string

    export function addEventListener(el: object, type: string, fn: () => {}, useCapture?: boolean = false): void

    export function removeEventListener(el: object, type: string, fn: () => {}, useCapture?: boolean = false): void

    export const hasTransition: boolean

}