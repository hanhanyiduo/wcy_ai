# 微信当家框架WEUI

## BEM 国际命名规范

- 项目 .weui-page 
   - button 页面
规范 
- Block 概念
   一块内容  项目代号 风格 + 可复用的代码
   项目代号 + 区块的作用或职责 page
   .weui-page
   .tm-page // 天猫
- Element 元素
   元素 
       块__header
       块__
       同一个块中概念不重叠
       .weui-page__title
       .weui-page__desc
  页面中的组成部分  项目代号 + 区块的作用或职责 + 元素的作用或职责
  - UI 框架中button ， input ，cell ，通用的**组件**
     重启BEM 命名
     .weui-btn **复用** 
     业务代码？ 
     大厂 ， 
     基础架构代码 学习WEUI 的源码

    几个block组合起来，页面就出来， 组件式开发
- Modifeir
  状态
  .weui-btn_primary
  .weui-btn_default
- BEM 命名规范让我们一起大厂协作
  - 页面由block构成 .weui-{block}
  - block包含一些elements  .weui-{block}__{element} 
  - element 会有些状态
   .weui-{block}__{element}_{modifier}
 