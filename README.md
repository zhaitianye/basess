# Basess

<div align="center"><a href="https://github.com/zhaitianye/basess" target="_blank"><img width="300" src="./src/img/basess.png" alt="Basess logo"></a></div>
<br/>
<p align="center">
  <a href="https://npmjs.com/package/basess"><img src="https://img.shields.io/npm/v/basess.svg" alt="npm package"></a>
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/basess.svg" alt="node compatility"></a>
  <a href="https://npmcharts.com/compare/basess?minimal=true"><img src="https://img.shields.io/npm/dm/basess.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/basess"><img src="https://img.shields.io/npm/l/basess.svg?sanitize=true" alt="License"></a>
</p>
<br/>


## 关于🐛

👍 Basess 是一个基本CSS类的集合。

🗿 支持TypeScript、Vue、 React、 Angular、Jquery等前端主流类库。

🔨 快速入门，支持移动和PC终端。

🎭 和 [tailwindcss](https://tailwindcss.com/) 相似（实际应用要更早）。

🥪 Basess简化了开发流程并减少了代码耦合

🥗 移动端的开发更加简单顺畅

## 快速开始

### 1. 简单使用

#### 安装

```sh
yarn add basess
```

#### 引入

```js
import "basess/dist/basess.css";
```

#### 使用

> 至此你可以看到字体大小为18，颜色为红色，上边距为10的文字

```html
<div class="f-18 col-red mt-10">Test</div>
```

### 2. 移动端使用

> 移动端目前不支持JQuery，只支持使用NodeJS构建的项目。

#### 安装

```sh
yarn add basess postcss postcss-pxtorem
```

#### 新建文件

> postcss.config.js

```js
// 具体配置请参考 postcss postcss-pxtorem 配置
module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 37.5,  // 根字体大小，这里默认37.5，代表设计稿为375px
      unitPrecision: 8, // 小数位数
      propList: ["*"],
      selectorBlackList: [".norem"], // 忽略 norem 前缀的类的转换rem
    },
  },
};
```

#### 引入

> 需要导入到主文件中，设计稿的默认宽度是375px。

```js
import Basess from "basess";
import "basess/dist/basess.css";
Basess(375);
```

#### 使用

> 在移动终端中，PX单位会自动转换为REM单位

```html
<div class="f-18 col-red mt-10">Test</div>
```

## API 文档

> 建议查看源代码 `\src\basess.css`使用，API文档仅供参考(不是特别详细)

- [v2 当前版本](./doc/v2/API_Chinese.md)
- [v1 English](./doc/v1/API_English.md)  [v1 中文](./doc/v1/API_Chinese.md)

## License

> Copyright (c) 2018-present, zhaitianye
