/**
 * 类型声明文件
 * 用于 代码提示
 */

declare module "changlin-wdtools" {
    export class Cookie{
        constructor:(config:object)=>any;
        getCookie:(name:string)=>string
    }
}