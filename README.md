## 尝试封装一个按钮组件

[![Build Status](https://www.travis-ci.org/NorthwesternDirector/button-component.svg?branch=master)](https://www.travis-ci.org/NorthwesternDirector/button-component)

### 安装
 * 使用本组件请开启 `border-box`
 
 ```
 *{box-sizing: border-box}
 ```

 ### 使用
 - 【暂时】需设置全局样式变量，才可自定义样式
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

 1. 图标样式设置
 利用`icon-name`属性，设置图标的种类样式
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
  


#### part1
1. 框架构建
- 涉及内容 `parcel` `sass` `Vue单文件组件` `css变量` `:root伪类选择器` 
2. UI设计
- 涉及内容 `slot插槽` `iconfont图标工具`的运用及巧用`em`单位 `父子组件传值` `v-if`控制按钮图标显示
3. 测试
- 涉及内容 `chai断言库` `chai-spies`，自动测试：`Karma测试运行器` `Mocha测试框架` `Sinon`，持续集成：`Travis CI` `npm发布`