// 引入basess
import basess from '../css/basess.css'

// 移动端rem等比适配配置文件
// 设计稿宽度为375px，此值要与 postcss.config.js 文件中的 rootValue 对应
function setRem(baseWidth = 375) {
  const dpr = window.devicePixelRatio;
  const currentWidth = document.documentElement.clientWidth;
  let remSize = 0;
  let scale = 0;
  scale = currentWidth / baseWidth;
  remSize = baseWidth / 10;
  remSize = remSize * Math.min(scale, 3); // 指最高放大比例为，可根据实际业务需求调整
  document.documentElement.style.fontSize = remSize + "px";
  document.documentElement.setAttribute("data-dpr", `${dpr}`);
}

// 启动函数，设计稿默认宽度
export default function start(designWidth) {
  setRem(designWidth);

  // 改变窗口大小时重新设置 rem
  window.onresize = function () {
    console.log("改变窗口大小-重新设置rem=====>");
    setRem(designWidth);
  };
}