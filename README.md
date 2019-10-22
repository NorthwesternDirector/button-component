## 一个Vue按钮组件 
<p align="center"><img width="500" src="https://github.com/NorthwesternDirector/button-component/blob/master/image/%E6%8C%89%E9%92%AE%E5%AE%9E%E4%BE%8B.png" alt="Vue logo"></p>


[![Build Status](https://www.travis-ci.org/NorthwesternDirector/button-component.svg?branch=master)](https://www.travis-ci.org/NorthwesternDirector/button-component)
![npm](https://img.shields.io/npm/dw/button-component)


### 介绍
- 在Vue学习中尝试封装一个按钮组件

### 开始使用
1. 添加CSS样式
   * 使用本组件请开启 `border-box`
   ```
   *,*::before,*::after{box-sizing: border-box}
   ```
   IE 8 及以上浏览器都支持此样式
   * 【暂时】需设置全局样式变量，自定义样式
   ```
   :root {
      --button-height: 32px;
      --font-size: 14px;
      --button-bg: white;
      --button-active-bg: #eee;
      --border-radius: 4px;
      --color: #999;
      --border-color: #999;
      --border-color-hover: #666;
   }
   ```
   IE 15 及以上浏览器支持此样式，建议使用Chrome

2. 安装 nd-nd-button
   ```
   npm i -S nd-nd-button --save
   ```
3. 引入 nd-nd-button
   ```
   improt {Button, ButtonGroup, Icon} from 'nd-nd-button'
   import 'nd-nd-button/dist/index.css'

   export default{
      name:'app',
      components:{
         'nd-button':Button,
         'nd-icon':Icon
      }
   }
   ```

 ### 文档
 1. 图标样式设置
 利用`icon-name`属性，设置图标的种类样式，可选值为：loading，settings，download，thumbs-up，down，left，right 
 ```
 icon-name="settings" //使用settings图标
 ```
 2. 图标位置设置
 利用`icon-position`属性，设置图标的显示位置，可选值为：left、right
 ```
 icon-position="right" //图标居右
 ```
 3. 图标旋转设置
 利用`loading`属性，设置旋转加载图标，可选值为：true、false
 ```
 loading="true" //将图标设置为一个旋转加载图标
 ```

### 记录
1. 框架构建
- 涉及内容 `parcel` `sass` `Vue单文件组件` `css变量` `:root伪类选择器` 
2. UI设计
- 涉及内容 `slot插槽` `iconfont图标工具`的运用及巧用`em`单位 `父子组件传值` `v-if`控制按钮图标显示
3. 测试
- 涉及内容 `chai断言库` `chai-spies`，自动测试：`Karma测试运行器` `Mocha测试框架` `Sinon`，持续集成：`Travis CI` `npm发布`