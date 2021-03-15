# Basess English document

<div align="left"><a href="https://github.com/zhaitianye/basess" target="_blank"><img width="400" src="../src/img/basess.png" alt="Basess logo"></a></div>

## 目录

<!-- TOC -->

- [Basess English document](#basess-english-document)
  - [目录](#%E7%9B%AE%E5%BD%95)
  - [documentation](#documentation)
  - [Use version selection and dependencies](#use-version-selection-and-dependencies)
    - [PC端](#pc%E7%AB%AF)
    - [mobile terminal](#mobile-terminal)
    - [Projects that rely on bootstrapping or other responsive components](#projects-that-rely-on-bootstrapping-or-other-responsive-components)
  - [solution](#solution)
    - [style reset](#style-reset)
    - [Grid system](#grid-system)
    - [Clear float](#clear-float)
    - [margin](#margin)
      - [the PC version](#the-pc-version)
    - [padding](#padding)
      - [the PC version](#the-pc-version-1)
      - [Mobile version](#mobile-version)
    - [Height, width](#height-width)
      - [the PC version](#the-pc-version-2)
      - [Mobile version](#mobile-version-1)
    - [line height](#line-height)
      - [the PC version](#the-pc-version-3)
      - [Mobile version](#mobile-version-2)
    - [rounded corners](#rounded-corners)
      - [the PC version](#the-pc-version-4)
      - [Mobile version](#mobile-version-3)
    - [Width ratio](#width-ratio)
    - [is often shaded](#is-often-shaded)
    - [link](#link)
    - [the underline](#the-underline)
    - [border](#border)
      - [the PC version](#the-pc-version-5)
      - [mobile version added](#mobile-version-added)
    - [Font size](#font-size)
      - [the PC version](#the-pc-version-6)
      - [Mobile version](#mobile-version-4)
    - [stack](#stack)
    - [Color (common foreground color)](#color-common-foreground-color)
    - [Background color (common background color)](#background-color-common-background-color)
    - [floating](#floating)
    - [Text alignment](#text-alignment)
    - [Text truncated](#text-truncated)
    - [flip](#flip)
    - [to locate](#to-locate)
      - [Location mode](#location-mode)
        - [the PC version](#the-pc-version-7)
    - [Mobile version](#mobile-version-5)
    - [Out of action](#out-of-action)
    - [Mouse gestures](#mouse-gestures)
    - [How blocks are displayed](#how-blocks-are-displayed)
    - [Commonly used picture size](#commonly-used-picture-size)
    - [commonly used masks](#commonly-used-masks)

<!-- /TOC -->

## documentation

Basess Is a basic set of styles, types, and componentization used with BootStrap.But it is smaller, simpler and more powerful than BootStrap.

[English](./API_English.md) [中文](./API_Chinese.md)

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

#### the PC version
  > USES px on the PC version, so the class is different from the mobile version
  * padding - top
    * pt-0 = : padding-top:0px
    * pt-1 = padding-top:1px
    * pt-2 = : padding-top:2px
    * pt-3 = padding-top:3px
    * pt-4 = padding-top:4px
    * pt-5 = : padding-top:5px
    * pt-6 = padding-top:6px
    * pt-7 = padding-top:7px
    * pt-8 = padding-top:8px
    * pt-9 = padding-top:9px
    * pt-10 = : padding-top:10px
    * pt-15 = : padding-top:15px
    * pt-20 means: padding-top:20px
    * pt-25 = : padding-top:25px
    * pt-30 = : padding-top:30px
    * pt-35 = : padding-top:35px
    * pt-40 = : padding-top:40px
    * pt-45 = : padding-top:45px
    * pt-50 = : padding-top:50px
    * pt-55 = : padding-top:55px
    * pt-60 = : padding-top:60px
  * padding - left
    * pl-0 means: padding-left:0px
    * use the same as above for the rest
  * padding - right
    * pr-0 means: padding-right:0px
    * use the same as above for the rest
  * padding - bottom
    * pb-0 = padding-bottom:0px
    * use the same as above for the rest
  * padding
    * pd-0 = : padding:0px
    * use the same as above for the rest

#### Mobile version
> in mobile phone version, all REM is used. There are some changes in the use class. Please refer to the initial environment of building mobile phone.
  * padding - top
    * rpt-0 = : padding-top:0px
    * rpt-2 = : padding-top:2px
    * rpt-5 = : padding-top:5px
    * rpt-8 = : padding-top:8px
    * rpt-10 = : padding-top:10px
    * rpt-12 means: padding-top:12px
    * rpt-15 = : padding-top:15px
    * rpt-18 means: padding-top:18px
    * rpt-20 = : padding-top:20px
    * rpt-25 = : padding-top:25px
    * rpt-30 = : padding-top:30px
    * rpt-35 = : padding-top:35px
    * rpt-40 = : padding-top:40px
    * rpt-45 = : padding-top:45px
    * rpt-50 = : padding-top:50px
    * rpt-60 = : padding-top:60px
    * rpt-70 = : padding-top:70px
    * rpt-80 = : padding-top:80px
    * rpt-90 = : padding-top:90px
    * rpt-100 = : padding-top:100px
    * rpt-110 = : padding-top:110px
    *...We're going to go 10px apart, all the way up to 400px
    * rpt-400 = : padding-top:400px
  * padding - left
    * rpl -0 means: padding-left:0px
    * use the same as above for the rest
  * padding - right
    * rpr -0 means: padding-right:0px
    * use the same as above for the rest
  * padding - bottom
    * rpb-0 = : padding-bottom:0px
    * use the same as above for the rest
  * padding
    * rpd-0 = : padding:0px
    * use the same as above for the rest

### Height, width
#### the PC version
> USES px on the PC version, so the class is different from the mobile version
  * height
    * h minus 15 stands for height:15px
    * h minus 20 stands for height:20px
    * increments by 5 to 60...
    * h minus 60 stands for height:60px
#### Mobile version
> in mobile phone version, all REM is used. There are some changes in the use class. Please refer to the initial environment of building mobile phone.
  * height
    * rh-0 stands for height:0px
    * rh-2 stands for height:2px
    * rh-5 stands for height:5px
    * rh-8 stands for height:8px
    * rh-10 stands for height:10px
    * rh-12 stands for: height:12px
    * rh-15 stands for height:15px
    * rh-18 stands for height:18px
    * rh-20 stands for: height:20px
    * rh-25 stands for: height:25px
    * rh-30 stands for: height:30px
    * rh-35 stands for height:35px
    * rh-40 stands for: height:40px
    * rh-45 stands for: height:45px
    * rh-50 stands for: height:50px
    * rh-60 stands for height:60px
    * rh-70 represents: height:70px
    * rh-80 stands for height:80px
    * rh-90 stands for: height:90px
    * rh-100 represents: height:100px
    * rh-110 stands for height:110px
    *...We're going to go 10px apart, all the way up to 400px
    * rh-400 stands for: height:400px
  * width
    * rw minus 0 represents: width:0px
    *...The others are the same as above
    * rw-400 represents: width:400px

### line height
#### the PC version
>on the PC version, USES px
  * line - height
    * line-h-15 represents: line-height:15px
    * line-h-20 represents: line-height:20px
    * increments by 5 to 60...
    * line-h-60 represents: line-height:60px
    * line-h-100s means: row height is 100%
    * line-h-150s represents: 150% row height
#### Mobile version
>in the mobile version, USES REM
  * line - height
    * line-h-0 stands for line-height:0px
    * line-h-2 stands for line-height:2px
    * line-h-5 stands for line-height:5px
    * line-h-8 stands for line-height:8px
    * line-h-10 represents: line-height:10px
    * line-h-12 stands for line-height:12px
    * line-h-15 represents: line-height:15px
    * line-h-18 represents: line-height:18px
    * line-h-20 represents: line-height:20px
    * line-h-25 represents: line-height:25px
    * line-h-30 represents: line-height:30px
    * line-h-35 represents: line-height:35px
    * line-h-40 represents: line-height:40px
    * line-h-45 represents: line-height:45px
    * line-h-50 represents: line-height:50px
    * line-h-60 represents: line-height:60px
    * line-h-70 represents: line-height:70px
    * line-h-80 stands for line-height:80px
    * line-h-90 represents: line-height:90px
    * line-h-100 represents: line-height:100px
    * line-h-110 represents: line-height:110px
    *...We're going to go 10px apart, all the way up to 400px
    * line-h-400 represents: line-height:400px


### rounded corners
#### the PC version
> on the PC version, USES px
  * border - the radius
    * radius-0 represents: border-radius:0px
    * radius-3 represents: border-radius:3px
    * radius-5 represents border-radius:5px
    * radius-10 represents: border-radius:10px
    * radius-15 represents: border-radius:15px
    * radius-20 represents: border-radius:20px
    * radius-30 represents: border-radius:30px
#### Mobile version
> in the mobile version, USES REM
  * border - the radius
    * rradius-0 represents: border-radius:0px
    * rradius-3 represents: border-radius:3px
    * rradius-5 represents: border-radius:5px
    * rradius-7 represents: border-radius:7px
    * rradius-10 represents: border-radius:10px
    * rradius-13 represents: border-radius:13px
    * rradius-15 represents: border-radius:15px
    * rradius-17 represents: border-radius:17px
    * rradius-20 represents: border-radius:20px
    * rradius-25 represents: border-radius:25px
    * rradius-30 represents: border-radius:30px


### Width ratio

* full-w represents: 100% width;
* full-h represents: height 100%;
* full-wh = : width and height :100%
  
### is often shaded

* shadow-rb represents: box shadow at lower right;
  
### link

* inline-link means: add an underlined link;

### the underline

* t-none represents: no underscore
* t-through means: underlined

 
### border
#### the PC version
  * border initial
    * bor stands for: add a border
  * border color
    * bor-col-pri represents: the color is #00A5F7
    * bor-col-red represents: the color is #e3393c
    * bor-col-orange is #orange
    * bor-col-success represents: the color is #5eb95e
    * bor-col-ccc represents: the color is # CCC
    * bor-col-eb represents: the color is #ebebeb
    * bor-col-f2 represents: the color is #f2f2f2
    * bor-col-eaf8ff represents: the color is #eaf8ff
  * border thickness
    * bor-2px represents: the thickness is 2px
    * bor-2px represents: the thickness is 3px
    * bor-2px represents: the thickness is 5px
    * bor-2px represents: the thickness is 7px
  * whether there is border
    * bor-t means: only the top border
    * bor-r stands for: only the right border
    * bor-b means: only the bottom border
    * bor-l means: only the left border
    * bor-t-none represents: the upper border is not displayed
    * bor-l-none represents: the right border is not displayed
    * bor-r-none represents: the lower border is not displayed
    * bor-b-none represents: the left border is not displayed
#### mobile version added
  * border thickness
    * rbor-1px represents: the thickness is 1px
    * rbor-2px represents: the thickness is 2px
    * rbor-4px represents: the thickness is 4px
    * rbor-6px represents: the thickness is 6px
    * rbor-10px represents: the thickness is 10px
    * rbor-15px represents: 15px in thickness
    * rbor-20px represents: the thickness is 20px

### Font size
#### the PC version

* font size
  * f-11 means: font size is 11px (forced scaling)
  * f-12 represents: the font size is 12px
  * f-13 represents: font size 13px
  * f-14 represents: the font size is 14px
  * f-16 represents: the font size is 16px
  * f-18 represents: the font size is 18px
  * f-20 represents: the font size is 20px
  * f-24 represents: the font size is 24px
  * f-26 represents: the font size is 26px
  * f-28 represents: the font size is 28px
  * f-30 represents: the font size is 30px
  
* forces font size
  * f-12i means: the font size is forced to be 12px
  * f-13i stands for: font size is forced to 13px
  * f-14i means: the font size is forced to be 14px
  * f-16i represents: the font size is forced to 16px
  * f-18i means: the font size is forced to be 18px
  * f-20i means: the font size is forced to be 20px
  * f-24i means: the font size is forced to be 24px
  * f-26i means: the font size is forced to be 26px
  * f-28i means: the font size is forced to be 28px
  * f-30i means: the font size is forced to be 30px
* bold
  * f-w stands for: bold font


#### Mobile version
  * rf-20 represents: font size is 20px
  * rf-22 represents: font size 22px
  * rf-24 represents: font size is 24px
  * rf-26 represents: the font size is 26px
  * rf-28 represents: the font size is 28px
  * rf-30 represents: font size is 30px
  * rf-32 represents: font size 32px
  * rf-34 represents: font size 34px
  * rf-36 represents: the font size is 36px
  * rf-38 represents: the font size is 38px
  * rf-40 represents: font size 40px
  * rf-45 represents: the font size is 45px
  * rf-50 represents: font size is 50px
  *...And then they're all spaced 5 apart to 150px
  * rf-150 represents: font size 150px
  
### stack

  * z minus 0 means: the stack is 0
  * z-9 represents: the stack is 9
  * z-99 represents: the stack is 99
  * z-999 means: the stack is 999
  * z-9999 represents: the stack is 9999
  * z-99999 means: the stack is 99999


### Color (common foreground color)

  * col-primary represents: color 00ADEB
  * col-success is for: color 5eb95e
  * col-danger represents dd514c
  * col-warning refers to f37b1d
  * col-error means: color is c00
  * col-333 is col 333 in colour
  * col-555 is col 555 in colour
  * col-666 is col-666 in colour
  * col-999 is 999 in colour
  * col- CCC representative: color is CCC
  * col-red for e3393c
  * col-green for: 72c02c
  * col-white represents: the color is white
  * col-black is col-black
  * col-orange is for 'orange'
  * col-h-blue col-h-blue is 003368


### Background color (common background color)

* bg-primary represents: the background color is 00ADEB
* bg-white represents: the background color is FFF
* bg-gray represents: the background color is f5f5f5
* bg-999 means: the background color is 999
* bg-ddd represents: the background color is DDD
* bg-black1 represents: background color e7e8eb
* bg-black2 represents: the background color is 585f69
* bg-555 represents: the background color is 555
* bg-black represents: the background color is black
* bg-h-black represents: the background color is 444
* bg-h-blue represents: the background color is 003368
* bg-l-blue represents: the background color is eaf8ff
* bg-red means: the background color is E12432
* bg-l-red means: the background color is fafafa
* bg-green means: the background color is 72c02c
* bg-orange represents: the background color is orange


### floating

  * pull-left represents: left float
  * pull-right means: right float


### Text alignment

  * text-left represents: left aligned
  * text-right means right alignment
  * text-center represents: center
  
### Text truncated

* text-overflow means: a line that exceeds the ellipsis
* text-overflow-1 means: a line is truncated directly
* text-line-1 stands for: one line of text, more than one ellipsis
* text-line-2 means: two lines of text, more than one ellipsis
* text-line-4 stands for: four lines of text, more than omitted
  
### flip

* flipx stands for horizontal flip
* flipy represents: vertical flip
* rotate45 represents: 45 degrees clockwise rotation
* rotate90 represents: rotate90 degrees clockwise
* rotate180 represents: 180 degrees clockwise rotation
* rotate270 represents: 270 degrees clockwise rotation


### to locate

#### Location mode

  * fixed position
  * affix represents a fixed location
  * absolute positioning
  * pos-a stands for absolute positioning
  * relative positioning
  * pos-r stands for relative positioning
  
####Locate the distance
##### the PC version
> on the PC version, USES px

* top
  1. positive
      * t minus 0 is top: 0px
      * t minus 1 is top: 1px
      * t minus 2 is top: 2px
      * t minus 3 is top: 3px
      * t minus 4 is top: 4px
      * t minus 5 is top: 5px
      * t-7 represents top: 7px
      * t-10 represents top: 10px
  2. The reverse
     * t--1 is top: -1px
     * t--2 is top: -2px
     * t--3 is top: -3px
     * t--4 is top: -4px
     * t--5 is top: -5px
  
* left
  1. positive
     * l-0 is left: 0px
     * l-1 is left: 1px
     * l-2 is left: 2px
     * l-3 is left: 3px
     * l-4 is left: 4px
     * l-5 is left: 5px
     * l-7 is left: 7px
     * l-10 is left: 10px
  2. The reverse
     * l--1 is left: -1px
     * l--2 is left: -2px
     * l--3 is left: -3px
     * l--4 is left: -4px
     * l--5 is left: -5px

* right
  1. positive
     * r minus 0 is right: 0px
     * r minus 1 is right: 1px
     * r minus 2 is right: 2px
     * r-3 for right: 3px
     * r-4 for right: 4px
     * r-5 for right: 5px
     * r-7 for right: 7px
     * r-10 for right: 10px
  2. The reverse
     * r--1 is right: -1px
     * r--2 is right: -2px
     * r--3 is right: -3px
     * r--4 is right: -4px
     * r--5 is right: -5px
  
* bottom
  1. positive
     * b minus 0 is bottom: 0px
     * b minus 1 for bottom: 1px
     * b minus 2 is bottom: 2px
     * b minus 3 is bottom: 3px
     * b minus 4 is bottom: 4px
     * b minus 5 for bottom: 5px
     * b minus 7 for bottom: 7px
     * b minus 10 for bottom: 10px
  2. The reverse
     * b--1 for bottom: -1px
     * b--2 is bottom: -2px
     * b--3 is bottom: -3px
     * b--4 is bottom: -4px
     * b--5 is bottom: -5px

### Mobile version
> in the mobile version, USES REM
* top
  * rt-0 is top:0px
  * rt minus 2 is top:2px
  * rt-5 is top:5px
  * rt-8 is top:8px
  * rt-10 stands for top:10px
  * rt-12 is top:12px
  * rt-15 stands for top:15px
  * rt-18 is top:18px
  * rt-20 represents top:20px
  * rt-25 is top:25px
  * rt-30 represents top:30px
  * rt-35 is top:35px
  * rt-40 is top:40px
  * rt-45 represents: top:45px
  * rt-50 means: top:50px
  * rt-60 is top:60px
  * rt-70 is top:70px
  * rt-80 means: top:80px
  * rt-90 is top:90px
  * rt-100 is top:100px
  * rt-110 is top:110px
  *...We're going to go 10px apart, all the way up to 400px
  * rt-400 = top:400px
* left
  * rl minus 0 is left:0px
  * use the same as above for the rest
* right
  * rr-0 stands for right:0px
  * use the same as above for the rest
* bottom
  * rb minus 0 for bottom:0px
  * use the same as above for the rest
### Out of action
* overflow-h stands for: the part beyond is hidden
* overflow-v stands for: the overflow part is displayed
* overflow-s stands for: the overflow part slides
* overflow-t is the default mouse
### Mouse gestures
* cur-p represents a mouse in the form of a finger
* cur-h represents: mouse in the form of help
* cur-a represents: an automatic mouse
* cur-d represents the default mouse
### How blocks are displayed
* dis-b represents: in the form of displaying block elements
* dis-n represents: hidden display
* dis-i represents: in line
* dis-ib represents: represented as inline block

### Commonly used picture size
  * img-20 represents an image with a width and height of 20px
  * img-25 represents an image with a width and height of 25px
  * img-30 represents an image with a width and height of 30px
  * img-35 represents an image with a width and height of 35px
  * img-50 represents an image with a width and height of 50px
  * img-60 represents an image with a width and height of 60px
  * img-100 represents an image with a width and height of 100px
### commonly used masks
  * rgba-30 represents a mask with transparency of 30
  * rgba-50 represents a mask with transparency of 50
  * rgba-70 represents a mask with transparency of 70