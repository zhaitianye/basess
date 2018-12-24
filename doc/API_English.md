# Basess English document

<div align="left"><a href="https://github.com/zhaitianye/basess" target="_blank"><img width="400" src="../src/img/basess.png" alt="Basess logo"></a></div>

## 目录

<!-- TOC -->

- [Basess English document](#basess-english-document)
    - [目录](#目录)
    - [documentation](#documentation)
    - [Use version selection and dependencies](#use-version-selection-and-dependencies)
        - [PC端](#pc端)
        - [mobile terminal](#mobile-terminal)
        - [Projects that rely on bootstrapping or other responsive components](#projects-that-rely-on-bootstrapping-or-other-responsive-components)
    - [solution](#solution)
        - [style reset](#style-reset)
        - [Grid system](#grid-system)
        - [Clear float](#clear-float)
        - [margin](#margin)
            - [the PC version](#the-pc-version)
            - [Mobile version](#mobile-version)
        - [padding](#padding)
            - [PC版本](#pc版本)
            - [移动版本](#移动版本)
        - [高度,宽度](#高度宽度)
            - [PC版本](#pc版本-1)
            - [移动版本](#移动版本-1)
        - [行高](#行高)
            - [PC版本](#pc版本-2)
            - [移动版本](#移动版本-2)
        - [圆角](#圆角)
            - [PC版本](#pc版本-3)
            - [移动版本](#移动版本-3)
        - [宽度比例](#宽度比例)
        - [常用阴影](#常用阴影)
        - [链接](#链接)
        - [下划线](#下划线)
        - [边框](#边框)
            - [PC版本](#pc版本-4)
            - [移动版本增加](#移动版本增加)
        - [字体字号](#字体字号)
            - [PC版本](#pc版本-5)
            - [移动版本](#移动版本-4)
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
                - [PC版本](#pc版本-6)
                - [移动版本](#移动版本-5)
        - [超出操作](#超出操作)
        - [鼠标手势](#鼠标手势)
        - [块的显示方式](#块的显示方式)
        - [常用图片尺寸](#常用图片尺寸)
        - [常用遮罩](#常用遮罩)

<!-- /TOC -->

## documentation

Basess Is a basic set of styles, types, and componentization used with BootStrap.But it is smaller, simpler and more powerful than BootStrap.

## Use version selection and dependencies

### PC端

> Regular PX layout can be raster system to the mobile end, which is called PC end

  * Only need to quote dist/css/basess.min.css

### mobile terminal

> completely rem layout,100% restore the design draft

* dist/ CSS /basess-moble. Min. CSS must be referenced
* dist/ CSS /basess-moble.min.js must be referenced
  
### Projects that rely on bootstrapping or other responsive components

> is a truncated version that removes style resets and the underlying raster system, leaving only the underlying CSS.Ensures compatibility with other components.

* simply refer to dist/ CSS /basess- cut-min.css

## solution

### style reset

> has no style reset if it relies on dist/ CSS/basess-cut-min.css

The style reset is to ensure compatibility and consistent presentation of each browser, which is automatically controlled by default and does not allow unnecessary operations.

### Grid system

> has no grid system if it relies on dist/ CSS /basess-cut. Min. CSS

The raster system adopts the same specification as bootstarp. Please refer to the raster system of bootstarp for details

* subject
  * the container
    * main body, margin auto on left and right sides, automatically ADAPTS to wide screen
* grid layout
  * col - 1 ~ col - 12
    * box layout, width split into 12 equal parts
  * col - xs - 1 col - xs - 12
    * layout with screen width less than 768px (often used on mobile phones)
  * col - sm - 1 col - sm - 12
    * layout with a screen width of 768-992px (often used for narrow-screen tablets)
  * col - md - 1 ~ col - md - 12
    * layout with a screen width of 992-1200px (often used for widescreen tablets)
  * col - ~ col - lg lg - 1-12
    * layout with screen width greater than 1200px (often used on computers and large screens)
* grid hidden display
  * visible-xs visible-sm visible-md visible-lg
    * used to display blocks in different sizes
  * hidden-xs hidden-sm hidden-md hidden-lg
    * used to hide blocks in different sizes


### Clear float
> clear float can bring the correct box model, it is recommended to clear it often, there is no harm

* clear clear float

### margin

#### the PC version

> USES px on the PC version, so the class is different from the mobile version

  * margin - top
    * mt-0 stands for margin-top:0px
    * mt-1 stands for margin-top:1px
    * mt-2 stands for margin-top:2px
    * mt-3 stands for margin-top:3px
    * mt-4 stands for margin-top:4px
    * mt-5 stands for margin-top:5px
    * mt-6 stands for margin-top:6px
    * mt-7 stands for margin-top:7px
    * mt-8 stands for margin-top:8px
    * mt-9 stands for margin-top:9px
    * mt-10 stands for margin-top:10px
    * mt-15 represents margin-top:15px
    * mt-20 represents margin-top:20px
    * mt-25 stands for margin-top:25px
    * mt-30 represents margin-top:30px
    * mt-35 stands for margin-top:35px
    * mt-40 stands for margin-top:40px
    * mt-45 represents margin-top:45px
    * mt-50 stands for margin-top:50px
    * mt-55 represents margin-top:55px
    * mt-60 represents margin-top:60px
  * margin - left
    * ml-0 stands for margin-left:0px
    * use the same as above for the rest
  * margin - right
    * Mr -0 represents margin-right:0px
    * use the same as above for the rest
  * margin - bottom
    * mb-0 represents margin-bottom:0px
    * use the same as above for the rest
  * margin
    * mg-0 stands for margin:0px
    * use the same as above for the rest

####Mobile version
> in mobile phone version, all REM is used. There are some changes in the use class. Please refer to the initial environment of building mobile phone.

  * margin-top  
    * rmt -0 means: margin-top:0px
    * rmt-2 represents margin-top:2px
    * rmt-5 stands for margin-top:5px
    * rmt-8 represents margin-top:8px
    * rmt-10 represents margin-top:10px
    * rmt-12 represents margin-top:12px
    * rmt-15 represents margin-top:15px
    * rmt-18 represents margin-top:18px
    * rmt-20 represents margin-top:20px
    * rmt-25 represents margin-top:25px
    * rmt-30 represents margin-top:30px
    * rmt-35 represents margin-top:35px
    * rmt-40 represents margin-top:40px
    * rmt-45 represents margin-top:45px
    * rmt-50 represents margin-top:50px
    * rmt-60 represents margin-top:60px
    * rmt-70 represents margin-top:70px
    * rmt-80 represents margin-top:80px
    * rmt-90 represents margin-top:90px
    * rmt-100 represents margin-top:100px
    * rmt-110 represents margin-top:110px
    * ...We're going to go 10px apart, all the way up to 400px
    * rmt-400 represents margin-top:400px
  * margin - left
    * rml -0 stands for margin-left:0px
    * use the same as above for the rest
  * margin - right
    * rmr-0 represents margin-right:0px
    * use the same as above for the rest
  * margin - bottom
    * mrb -0 represents margin-bottom:0px
    * use the same as above for the rest
  * margin
    * rmg-0 stands for margin:0px
    * use the same as above for the rest

### padding

#### PC版本
> 在PC版本上，用的是px，所以类和移动版本有所不同
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
    * pt-25 代表：padding-top:25px
    * pt-30 代表：padding-top:30px
    * pt-35 代表：padding-top:35px
    * pt-40 代表：padding-top:40px
    * pt-45 代表：padding-top:45px
    * pt-50 代表：padding-top:50px
    * pt-55 代表：padding-top:55px
    * pt-60 代表：padding-top:60px
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
#### 移动版本
> 在手机版本上，用的全部是REM，使用类有些许变化,构建手机换请参阅 构建手机初始环境，
  * padding-top
    * rpt-0 代表：padding-top:0px
    * rpt-2 代表：padding-top:2px
    * rpt-5 代表：padding-top:5px
    * rpt-8 代表：padding-top:8px
    * rpt-10 代表：padding-top:10px
    * rpt-12 代表：padding-top:12px
    * rpt-15 代表：padding-top:15px
    * rpt-18 代表：padding-top:18px
    * rpt-20 代表：padding-top:20px
    * rpt-25 代表：padding-top:25px
    * rpt-30 代表：padding-top:30px
    * rpt-35 代表：padding-top:35px
    * rpt-40 代表：padding-top:40px
    * rpt-45 代表：padding-top:45px
    * rpt-50 代表：padding-top:50px
    * rpt-60 代表：padding-top:60px
    * rpt-70 代表：padding-top:70px
    * rpt-80 代表：padding-top:80px
    * rpt-90 代表：padding-top:90px
    * rpt-100 代表：padding-top:100px
    * rpt-110 代表：padding-top:110px
    * 。。。。。以10px为间隔，一直到400px
    * rpt-400 代表：padding-top:400px
  * padding-left
    * rpl-0 代表：padding-left:0px
    * 其余使用同上
  * padding-right
    * rpr-0 代表：padding-right:0px
    * 其余使用同上
  * padding-bottom
    * rpb-0 代表：padding-bottom:0px
    * 其余使用同上
  *  padding
     * rpd-0 代表：padding:0px
     * 其余使用同上

### 高度,宽度

#### PC版本
> 在PC版本上，用的是px，所以类和移动版本有所不同
  * height
    * h-15 代表：height:15px
    * h-20 代表：height:20px
    * 以5递增到60。。。
    * h-60 代表：height:60px
#### 移动版本

> 在手机版本上，用的全部是REM，使用类有些许变化,构建手机换请参阅 构建手机初始环境，
  * height
    * rh-0 代表：height:0px
    * rh-2 代表：height:2px
    * rh-5 代表：height:5px
    * rh-8 代表：height:8px
    * rh-10 代表：height:10px
    * rh-12 代表：height:12px
    * rh-15 代表：height:15px
    * rh-18 代表：height:18px
    * rh-20 代表：height:20px
    * rh-25 代表：height:25px
    * rh-30 代表：height:30px
    * rh-35 代表：height:35px
    * rh-40 代表：height:40px
    * rh-45 代表：height:45px
    * rh-50 代表：height:50px
    * rh-60 代表：height:60px
    * rh-70 代表：height:70px
    * rh-80 代表：height:80px
    * rh-90 代表：height:90px
    * rh-100 代表：height:100px
    * rh-110 代表：height:110px
    * 。。。。。以10px为间隔，一直到400px
    * rh-400 代表：height:400px
  * width
    * rw-0 代表：width:0px
    * 。。。。。其他的同上
    * rw-400 代表：width:400px
### 行高

#### PC版本
> 在PC版本上，用的是px
  * line-height
    * line-h-15 代表：line-height:15px
    * line-h-20 代表：line-height:20px
    * 以5递增到60。。。
    * line-h-60 代表：line-height:60px
    * line-h-100s 代表: 行高100%
    * line-h-150s 代表: 行高150%
#### 移动版本

> 在手机版本上，用的全部是REM
  * line-height
    * rline-h-0 代表：line-height:0px
    * rline-h-2 代表：line-height:2px
    * rline-h-5 代表：line-height:5px
    * rline-h-8 代表：line-height:8px
    * rline-h-10 代表：line-height:10px
    * rline-h-12 代表：line-height:12px
    * rline-h-15 代表：line-height:15px
    * rline-h-18 代表：line-height:18px
    * rline-h-20 代表：line-height:20px
    * rline-h-25 代表：line-height:25px
    * rline-h-30 代表：line-height:30px
    * rline-h-35 代表：line-height:35px
    * rline-h-40 代表：line-height:40px
    * rline-h-45 代表：line-height:45px
    * rline-h-50 代表：line-height:50px
    * rline-h-60 代表：line-height:60px
    * rline-h-70 代表：line-height:70px
    * rline-h-80 代表：line-height:80px
    * rline-h-90 代表：line-height:90px
    * rline-h-100 代表：line-height:100px
    * rline-h-110 代表：line-height:110px
    * 。。。。。以10px为间隔，一直到400px
    * rline-h-400 代表：line-height:400px

### 圆角

#### PC版本
> 在PC版本上，用的是px
  * border-radius
  * radius-0 代表：border-radius:0px
  * radius-3 代表：border-radius:3px
  * radius-5 代表：border-radius:5px
  * radius-10 代表: border-radius:10px
  * radius-15 代表: border-radius:15px
  * radius-20 代表: border-radius:20px
  * radius-30 代表: border-radius:30px
#### 移动版本

> 在手机版本上，用的全部是REM
  * border-radius
  * rradius-0 代表：border-radius:0px
  * rradius-3 代表：border-radius:3px
  * rradius-5 代表：border-radius:5px
  * rradius-7 代表：border-radius:7px
  * rradius-10 代表：border-radius:10px
  * rradius-13 代表：border-radius:13px
  * rradius-15 代表：border-radius:15px
  * rradius-17 代表：border-radius:17px
  * rradius-20 代表：border-radius:20px
  * rradius-25 代表：border-radius:25px
  * rradius-30 代表：border-radius:30px

### 宽度比例

* full-w 代表：宽度100%;
* full-h 代表：高度100%;
* full-wh 代表：宽度和高度都是:100%

### 常用阴影

* shadow-rb 代表：右下方盒子阴影;
  
### 链接

* inline-link 代表：增加一个下划线链接;

### 下划线

* t-none 代表：无下划线
* t-through 代表：有下划线

### 边框

#### PC版本

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

#### 移动版本增加

* 边框粗细
  * rbor-1px 代表：粗细为 1px
  * rbor-2px 代表：粗细为 2px
  * rbor-4px 代表：粗细为 4px
  * rbor-6px 代表：粗细为 6px
  * rbor-10px 代表：粗细为 10px
  * rbor-15px 代表：粗细为 15px
  * rbor-20px 代表：粗细为 20px
  
### 字体字号

#### PC版本

> 字体大小

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
  
> 强制字体大小

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

> 加粗

  * f-w 代表：字体加粗   

#### 移动版本

  * rf-20 代表：字体大小为 20px
  * rf-22 代表：字体大小为 22px
  * rf-24 代表：字体大小为 24px
  * rf-26 代表：字体大小为 26px
  * rf-28 代表：字体大小为 28px
  * rf-30 代表：字体大小为 30px
  * rf-32 代表：字体大小为 32px
  * rf-34 代表：字体大小为 34px
  * rf-36 代表：字体大小为 36px
  * rf-38 代表：字体大小为 38px
  * rf-40 代表：字体大小为 40px
  * rf-45 代表：字体大小为 45px
  * rf-50 代表：字体大小为 50px
  * 。。。。之后都以5为间距到150px
  * rf-150 代表：字体大小为 150px
  
### 堆叠

  * z-0 代表：堆叠为0
  * z-9 代表：堆叠为9
  * z-99 代表：堆叠为99
  * z-999 代表：堆叠为999
  * z-9999 代表：堆叠为9999
  * z-99999 代表：堆叠为99999

### 颜色（常用前景色）

  * col-primary 代表：颜色为00ADEB
  * col-success 代表：颜色为5eb95e
  * col-danger 代表：颜色为dd514c
  * col-warning 代表：颜色为f37b1d
  * col-error 代表：颜色为c00
  * col-333 代表：颜色为333
  * col-555 代表：颜色为555
  * col-666 代表：颜色为666
  * col-999 代表：颜色为999
  * col-ccc 代表：颜色为ccc
  * col-red 代表：颜色为e3393c
  * col-green 代表：颜色为72c02c
  * col-white 代表：颜色为white
  * col-black 代表：颜色为black
  * col-orange 代表：颜色为orange
  * col-h-blue 代表：颜色为003368

### 背景颜色（常用背景色）

  * bg-primary 代表：背景颜色为00ADEB
  * bg-white 代表：背景颜色为fff
  * bg-gray 代表：背景颜色为f5f5f5
  * bg-999 代表：背景颜色为999
  * bg-ddd 代表：背景颜色为ddd
  * bg-black1 代表：背景颜色为e7e8eb
  * bg-black2 代表：背景颜色为585f69
  * bg-555 代表：背景颜色为555
  * bg-black 代表：背景颜色为black
  * bg-h-black 代表：背景颜色为444
  * bg-h-blue 代表：背景颜色为003368
  * bg-l-blue 代表：背景颜色为eaf8ff
  * bg-red 代表：背景颜色为E12432
  * bg-l-red 代表：背景颜色为fafafa
  * bg-green 代表：背景颜色为72c02c
  * bg-orange 代表：背景颜色为orange

### 浮动

  * pull-left 代表：左浮动
  * pull-right 代表：右浮动

### 文本对齐

  * text-left 代表：左对齐
  * text-right 代表：右对齐
  * text-center 代表：居中

### 文本截断

  * text-overflow 代表：一行超出省略
  * text-overflow-1 代表：一行直接截断
  * text-line-1 代表：一行文字，多余超出省略
  * text-line-2 代表：两行文字，多余超出省略
  * text-line-4 代表：四行文字，多余超出省略

### 翻转

  * flipx 代表：水平翻转
  * flipy 代表：垂直翻转
  * rotate45 代表：顺时针旋转45度
  * rotate90 代表：顺时针旋转90度
  * rotate180 代表：顺时针旋转180度
  * rotate270 代表：顺时针旋转270度

### 定位

#### 定位方式

  * 固定位置
    * affix 代表固定的位置
  * 绝对定位
    * pos-a 代表绝对定位
  * 相对定位
    * pos-r 代表相对定位

#### 定位距离

##### PC版本
> 在PC版本上，用的是px
  * top
    1. 正向
       * t-0 代表：top : 0px
       * t-1 代表：top : 1px
       * t-2 代表：top : 2px
       * t-3 代表：top : 3px
       * t-4 代表：top : 4px
       * t-5 代表：top : 5px
       * t-7 代表：top : 7px
       * t-10 代表：top : 10px
    2. 反向
       * t--1 代表：top : -1px
       * t--2 代表：top : -2px
       * t--3 代表：top : -3px
       * t--4 代表：top : -4px
       * t--5 代表：top : -5px
  * left
    1. 正向
       * l-0 代表：left : 0px
       * l-1 代表：left : 1px
       * l-2 代表：left : 2px
       * l-3 代表：left : 3px
       * l-4 代表：left : 4px
       * l-5 代表：left : 5px
       * l-7 代表：left : 7px
       * l-10 代表：left : 10px
    2. 反向
       * l--1 代表：left : -1px
       * l--2 代表：left : -2px
       * l--3 代表：left : -3px
       * l--4 代表：left : -4px
       * l--5 代表：left : -5px
  * right
    1. 正向
       * r-0 代表：right : 0px
       * r-1 代表：right : 1px
       * r-2 代表：right : 2px
       * r-3 代表：right : 3px
       * r-4 代表：right : 4px
       * r-5 代表：right : 5px
       * r-7 代表：right : 7px
       * r-10 代表：right : 10px
    2. 反向
       * r--1 代表：right : -1px
       * r--2 代表：right : -2px
       * r--3 代表：right : -3px
       * r--4 代表：right : -4px
       * r--5 代表：right : -5px
  * bottom
    1. 正向
       * b-0 代表：bottom : 0px
       * b-1 代表：bottom : 1px
       * b-2 代表：bottom : 2px
       * b-3 代表：bottom : 3px
       * b-4 代表：bottom : 4px
       * b-5 代表：bottom : 5px
       * b-7 代表：bottom : 7px
       * b-10 代表：bottom : 10px
    2. 反向
       * b--1 代表：bottom : -1px
       * b--2 代表：bottom : -2px
       * b--3 代表：bottom : -3px
       * b--4 代表：bottom : -4px
       * b--5 代表：bottom : -5px

##### 移动版本

> 在手机版本上，用的全部是REM
  * top
    * rt-0 代表：top:0px
    * rt-2 代表：top:2px
    * rt-5 代表：top:5px
    * rt-8 代表：top:8px
    * rt-10 代表：top:10px
    * rt-12 代表：top:12px
    * rt-15 代表：top:15px
    * rt-18 代表：top:18px
    * rt-20 代表：top:20px
    * rt-25 代表：top:25px
    * rt-30 代表：top:30px
    * rt-35 代表：top:35px
    * rt-40 代表：top:40px
    * rt-45 代表：top:45px
    * rt-50 代表：top:50px
    * rt-60 代表：top:60px
    * rt-70 代表：top:70px
    * rt-80 代表：top:80px
    * rt-90 代表：top:90px
    * rt-100 代表：top:100px
    * rt-110 代表：top:110px
    * 。。。。。以10px为间隔，一直到400px
    * rt-400 代表：top:400px
  * left
    * rl-0 代表：left:0px
    * 其余使用同上
  * right
    * rr-0 代表：right:0px
    * 其余使用同上
  * bottom
    * rb-0 代表：bottom:0px
    * 其余使用同上

### 超出操作

  * overflow-h 代表：超出部分隐藏
  * overflow-v 代表：超出部分显示
  * overflow-s 代表：超出部分滑动
  * overflow-t 代表：默认的鼠标

### 鼠标手势

  * cur-p 代表：手指形式的鼠标
  * cur-h 代表：帮助形式的鼠标
  * cur-a 代表：自动形式的鼠标
  * cur-d 代表：默认方式的鼠标

### 块的显示方式

  * dis-b 代表：表现形式为显示块状元素
  * dis-n 代表：隐藏显示
  * dis-i 代表：表现形式为行内
  * dis-ib 代表：表现形式为内联块

### 常用图片尺寸

  * img-20 代表：宽高为20px的图片
  * img-25 代表：宽高为25px的图片
  * img-30 代表：宽高为30px的图片
  * img-35 代表：宽高为35px的图片
  * img-50 代表：宽高为50px的图片
  * img-60 代表：宽高为60px的图片
  * img-100 代表：宽高为100px的图片 

### 常用遮罩

  * rgba-30 代表：透明度为30的遮罩
  * rgba-50 代表：透明度为50的遮罩
  * rgba-70 代表：透明度为70的遮罩