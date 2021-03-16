# Basess 文档(v2)

<div align="center"><a href="https://github.com/zhaitianye/basess" target="_blank"><img width="300" src="../../src/img/basess.png" alt="Basess logo"></a></div>

## 目录

<!-- TOC -->

- [Basess 文档(v2)](#basess-文档v2)
  - [目录](#目录)
  - [说明](#说明)
  - [API](#api)
    - [通用主体](#通用主体)
    - [清浮动](#清浮动)
    - [margin](#margin)
    - [padding](#padding)
    - [高度,宽度](#高度宽度)
    - [行高](#行高)
    - [圆角](#圆角)
    - [宽度比例](#宽度比例)
    - [常用阴影](#常用阴影)
    - [链接](#链接)
    - [下划线](#下划线)
    - [边框](#边框)
    - [字体字号](#字体字号)
    - [堆叠](#堆叠)
    - [颜色（常用前景色）](#颜色常用前景色)
    - [背景颜色（常用背景色）](#背景颜色常用背景色)
    - [浮动](#浮动)
    - [文本对齐](#文本对齐)
    - [文本截断](#文本截断)
    - [翻转](#翻转)
    - [定位](#定位)
      - [定位方式](#定位方式)
      - [定位距离](#定位距离)
    - [超出操作](#超出操作)
    - [鼠标手势](#鼠标手势)
    - [块的显示方式](#块的显示方式)
    - [常用图片](#常用图片)
    - [常用遮罩](#常用遮罩)
    - [整体透明](#整体透明)
    - [flex 布局](#flex-布局)

<!-- /TOC -->

## 说明

不建议完全按照此 API 文档操作，文档还在撰写期间。建议直接查看源码 `/src/basess.css` 进行开发

pc 端可以直接引入主体使用 `import Basess from "basess"`

移动端需要配合 `postcss postcss-pxtorem` 自动做 rem 配置

## API

### 通用主体

- 主体
  - container
    - 主体部分，左右两边有 margin auto，自动适配宽屏

### 清浮动

> 清除浮动可以带来正确的盒子模型，建议经常清除一下，没有什么坏处

- clear 清除浮动

### margin

```
  * margin-top
    * mt-0 代表：margin-top:0px
    * mt-1 代表：margin-top:1px
    * mt-2 代表：margin-top:2px
    * mt-3 代表：margin-top:3px
    * mt-4 代表：margin-top:4px
    * mt-5 代表：margin-top:5px
    * mt-6 代表：margin-top:6px
    * mt-7 代表：margin-top:7px
    * mt-8 代表：margin-top:8px
    * mt-9 代表：margin-top:9px
    * mt-10 代表：margin-top:10px
    * mt-15 代表：margin-top:15px
    * mt-20 代表：margin-top:20px
    * mt-... 代表：margin-top:...px
    * mt-100 代表：margin-top:100px
  * margin-left
    * ml-0 代表：margin-left:0px
    * 其余使用同上
  * margin-right
    * mr-0 代表：margin-right:0px
    * 其余使用同上
  * margin-bottom
    * mb-0 代表：margin-bottom:0px
    * 其余使用同上
  * margin
    * mg-0 代表：margin:0px
    * 其余使用同上
```

### padding

```
  * padding-top
    * pt-0 代表：padding-top:0px
    * pt-1 代表：padding-top:1px
    * pt-2 代表：padding-top:2px
    * pt-3 代表：padding-top:3px
    * pt-4 代表：padding-top:4px
    * pt-5 代表：padding-top:5px
    * pt-6 代表：padding-top:6px
    * pt-7 代表：padding-top:7px
    * pt-8 代表：padding-top:8px
    * pt-9 代表：padding-top:9px
    * pt-10 代表：padding-top:10px
    * pt-15 代表：padding-top:15px
    * pt-20 代表：padding-top:20px
    * pt-... 代表：padding-top:...px
    * pt-100 代表：padding-top:100px
  * padding-left
    * pl-0 代表：padding-left:0px
    * 其余使用同上
  * padding-right
    * pr-0 代表：padding-right:0px
    * 其余使用同上
  * padding-bottom
    * pb-0 代表：padding-bottom:0px
    * 其余使用同上
  * padding
    * pd-0 代表：padding:0px
    * 其余使用同上
```

### 高度,宽度

```
  * height
    * h-15 代表：height:15px
    * h-20 代表：height:20px
    * 以5递增到60。。。
    * h-60 代表：height:60px
```

### 行高

```
  * line-height
    * line-h-15 代表：line-height:15px
    * line-h-20 代表：line-height:20px
    * 以5递增到60。。。
    * line-h-60 代表：line-height:60px
    * line-h-100s 代表: 行高100%
    * line-h-150s 代表: 行高150%
```

### 圆角

```
  * border-radius
  * radius-0 代表：border-radius:0px
  * radius-3 代表：border-radius:3px
  * radius-5 代表：border-radius:5px
  * radius-10 代表: border-radius:10px
  * radius-15 代表: border-radius:15px
  * radius-20 代表: border-radius:20px
  * radius-30 代表: border-radius:30px
```

### 宽度比例

```
* full-w 代表：宽度100%;
* full-h 代表：高度100%;
* full-wh 代表：宽度和高度都是:100%
```

### 常用阴影

```
* shadow-rb 代表：右下方盒子阴影;
```

### 链接

```
* inline-link 代表：增加一个下划线链接;
```

### 下划线

```
* t-none 代表：无下划线
* t-through 代表：有下划线
```

### 边框

```
* 边框初始
  * bor 代表：加一个边框
* 边框颜色
  * bor-col-pri 代表：颜色为 #00A5F7
  * bor-col-red 代表：颜色为 #e3393c
  * bor-col-orange 代表：颜色为 #orange
  * bor-col-success 代表：颜色为 #5eb95e
  * bor-col-ccc 代表：颜色为 #ccc
  * bor-col-eb 代表：颜色为 #ebebeb
  * bor-col-f2 代表：颜色为 #f2f2f2
  * bor-col-eaf8ff 代表：颜色为 #eaf8ff
* 边框粗细
  * bor-2px 代表：粗细为 2px
  * bor-2px 代表：粗细为 3px
  * bor-2px 代表：粗细为 5px
  * bor-2px 代表：粗细为 7px
* 边框有无
  * bor-t 代表: 只有上边框
  * bor-r 代表: 只有右边框
  * bor-b 代表: 只有下边框
  * bor-l 代表: 只有左边框
  * bor-t-none 代表: 上边框不显示
  * bor-l-none 代表: 右边框不显示
  * bor-r-none 代表: 下边框不显示
  * bor-b-none 代表: 左边框不显示
```

### 字体字号

```
* 字体大小
  * f-11 代表：字体大小为 11px（强制缩放）
  * f-12 代表：字体大小为 12px
  * f-13 代表：字体大小为 13px
  * f-14 代表：字体大小为 14px
  * f-16 代表：字体大小为 16px
  * f-18 代表：字体大小为 18px
  * f-20 代表：字体大小为 20px
  * f-24 代表：字体大小为 24px
  * f-26 代表：字体大小为 26px
  * f-28 代表：字体大小为 28px
  * f-30 代表：字体大小为 30px

* 强制字体大小

  * f-12i 代表：字体大小强制为 12px
  * f-13i 代表：字体大小强制为 13px
  * f-14i 代表：字体大小强制为 14px
  * f-16i 代表：字体大小强制为 16px
  * f-18i 代表：字体大小强制为 18px
  * f-20i 代表：字体大小强制为 20px
  * f-24i 代表：字体大小强制为 24px
  * f-26i 代表：字体大小强制为 26px
  * f-28i 代表：字体大小强制为 28px
  * f-30i 代表：字体大小强制为 30px

* 加粗

  * f-w 代表：字体加粗
```

### 堆叠
```
- z-0 代表：堆叠为 0
- z-9 代表：堆叠为 9
- z-99 代表：堆叠为 99
- z-999 代表：堆叠为 999
- z-9999 代表：堆叠为 9999
- z-99999 代表：堆叠为 99999
```
### 颜色（常用前景色）
```
- col-primary 代表：颜色为 00ADEB
- col-success 代表：颜色为 5eb95e
- col-danger 代表：颜色为 dd514c
- col-warning 代表：颜色为 f37b1d
- col-error 代表：颜色为 c00
- col-green 代表：颜色为 72c02c
- col-white 代表：颜色为 white
- col-black 代表：颜色为 black
- col-orange 代表：颜色为 orange
```
### 背景颜色（常用背景色）
```
- bg-primary 代表：背景颜色为 00ADEB
- bg-white 代表：背景颜色为 fff
- bg-gray 代表：背景颜色为 f5f5f5
- bg-black 代表：背景颜色为 black
- bg-red 代表：背景颜色为 E12432
- bg-green 代表：背景颜色为 72c02c
- bg-orange 代表：背景颜色为 orange
```
### 浮动
```
- pull-left 代表：左浮动
- pull-right 代表：右浮动
```
### 文本对齐
```
- text-left 代表：左对齐
- text-right 代表：右对齐
- text-center 代表：居中
```
### 文本截断
```
- text-overflow 代表：一行超出省略
- text-overflow-1 代表：一行直接截断
- text-line-1 代表：一行文字，多余超出省略
- text-line-2 代表：两行文字，多余超出省略
- text-line-4 代表：四行文字，多余超出省略
```
### 翻转
```
- flipx 代表：水平翻转
- flipy 代表：垂直翻转
- rotate45 代表：顺时针旋转 45 度
- rotate90 代表：顺时针旋转 90 度
- rotate180 代表：顺时针旋转 180 度
- rotate270 代表：顺时针旋转 270 度
```
### 定位

#### 定位方式
```
- 固定位置
  - affix 代表固定的位置
- 绝对定位
  - pos-a 代表绝对定位
- 相对定位
  - pos-r 代表相对定位
```
#### 定位距离
```
- top
  1. 正向
     - t-0 代表：top : 0px
     - t-1 代表：top : 1px
     - t-2 代表：top : 2px
     - t-3 代表：top : 3px
     - t-4 代表：top : 4px
     - t-5 代表：top : 5px
     - t-7 代表：top : 7px
     - t-10 代表：top : 10px
  2. 反向
     - t--1 代表：top : -1px
     - t--2 代表：top : -2px
     - t--3 代表：top : -3px
     - t--4 代表：top : -4px
     - t--5 代表：top : -5px
- left
  1. 正向
     - l-0 代表：left : 0px
     - l-1 代表：left : 1px
     - l-2 代表：left : 2px
     - l-3 代表：left : 3px
     - l-4 代表：left : 4px
     - l-5 代表：left : 5px
     - l-7 代表：left : 7px
     - l-10 代表：left : 10px
  2. 反向
     - l--1 代表：left : -1px
     - l--2 代表：left : -2px
     - l--3 代表：left : -3px
     - l--4 代表：left : -4px
     - l--5 代表：left : -5px
- right
  1. 正向
     - r-0 代表：right : 0px
     - r-1 代表：right : 1px
     - r-2 代表：right : 2px
     - r-3 代表：right : 3px
     - r-4 代表：right : 4px
     - r-5 代表：right : 5px
     - r-7 代表：right : 7px
     - r-10 代表：right : 10px
  2. 反向
     - r--1 代表：right : -1px
     - r--2 代表：right : -2px
     - r--3 代表：right : -3px
     - r--4 代表：right : -4px
     - r--5 代表：right : -5px
- bottom
  1. 正向
     - b-0 代表：bottom : 0px
     - b-1 代表：bottom : 1px
     - b-2 代表：bottom : 2px
     - b-3 代表：bottom : 3px
     - b-4 代表：bottom : 4px
     - b-5 代表：bottom : 5px
     - b-7 代表：bottom : 7px
     - b-10 代表：bottom : 10px
  2. 反向
     - b--1 代表：bottom : -1px
     - b--2 代表：bottom : -2px
     - b--3 代表：bottom : -3px
     - b--4 代表：bottom : -4px
     - b--5 代表：bottom : -5px
```
### 超出操作
```
- overflow-h 代表：超出部分隐藏
- overflow-v 代表：超出部分显示
- overflow-s 代表：超出部分滑动
- overflow-t 代表：默认的鼠标
```
### 鼠标手势
```
- cur-p 代表：手指形式的鼠标
- cur-h 代表：帮助形式的鼠标
- cur-a 代表：自动形式的鼠标
- cur-d 代表：默认方式的鼠标
```
### 块的显示方式
```
- dis-b 代表：表现形式为显示块状元素
- dis-n 代表：隐藏显示
- dis-i 代表：表现形式为行内
- dis-ib 代表：表现形式为内联块
```
### 常用图片
```
- img-20 代表：宽高为 20px 的图片
- img-25 代表：宽高为 25px 的图片
- img-30 代表：宽高为 30px 的图片
- img-35 代表：宽高为 35px 的图片
- img-50 代表：宽高为 50px 的图片
- img-60 代表：宽高为 60px 的图片
- img-100 代表：宽高为 100px 的图片
- img-center 代表：图片垂直居中
```
### 常用遮罩
```
- rgba-30 代表：透明度为 30 的遮罩
- rgba-50 代表：透明度为 50 的遮罩
- rgba-70 代表：透明度为 70 的遮罩
```
### 整体透明
```
- opacity-d1 代表：整体透明度为 0.1
- opacity-d2 代表：整体透明度为 0.2
- opacity-d3 代表：整体透明度为 0.3
- opacity-d4 代表：整体透明度为 0.4
- opacity-d5 代表：整体透明度为 0.5
- opacity-d6 代表：整体透明度为 0.6
- opacity-d7 代表：整体透明度为 0.7
- opacity-d8 代表：整体透明度为 0.8
- opacity-d9 代表：整体透明度为 0.9
```
### flex 布局
```
- flex 代表：启用 flex 布局
- flex-1 代表： flex: 1 填充剩余空间
- flex-ju-center 代表：横向居中
- flex-ju-start 代表：横向靠头部
- flex-ju-end 代表：横向靠尾部
- flex-ju-between 代表：横向两端对齐
- flex-ju-around 代表：横向均匀分布
- flex-align-start 代表：竖向靠头部
- flex-align-end 代表：竖向靠尾部
- flex-align-center 代表：竖向居中
```