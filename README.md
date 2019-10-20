## 尝试封装一个按钮组件

作者：ND

### 安装
 * 使用本组件请开启 `border-box`
 
 ```
 *{box-sizing: border-box}
 ```

 ### 使用
 使用<nd-button></nd-button>使用button组件

 1. 图标样式设置
 利用`icon-name`属性,设置图标的种类样式
 ```
 icon-name="settings" //使用settings图标
 ```
 2. 图标位置设置
 利用`icon-position`属性,设置图标的显示位置，可选值为：left、right
 ```
 icon-position="right" //图标居右
 ```
 3. 图标旋转设置
 利用`loading`属性,设置 旋转加载图标，可选值为：true、false
 ```
 loading="true" //将图标设置为一个旋转加载图标
 ```
  


#### part1
1. 框架构建
涉及内容 parcel sass Vue单文件组件 css变量 :root伪类选择器 
2. UI涉及
涉及内容 `slot插槽` `iconfont图标工具`的运用及巧用`em`单位  父子组件传值 v-if控制按钮图标显示与否