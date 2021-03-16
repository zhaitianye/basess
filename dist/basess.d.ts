import './basess.css';
/**
 * 设计稿宽度为375px，此值要与 postcss.config.js 文件中的 rootValue 对应( 是rootValue的10倍 )
 * @param { number } baseWidth 设计稿宽度,默认不传则为375
 */
export declare function setRem(baseWidth?: number): void;
/**
 * 启动函数，设计稿默认宽度375
 * @param { number } baseWidth 设计稿宽度,默认不传则为375
 */
export default function start(designWidth: number): void;
