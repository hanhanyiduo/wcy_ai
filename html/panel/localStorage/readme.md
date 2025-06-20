# localStorage 

- 全局安装stylus
  - npm install -g stylus
  - stylus --version
- stylus 何物？
 - 是一个css预处理器
 - 更快，更专业
 - .styl 后缀的文件
 - 编译成css

 - stylus 是css 的超集
   浏览器还是只认css 
 - box-shadow 盒子的立体感觉
   0 0 0 10px rgba(0,0,0,0.1)
   四个值
   前两个值：水平位移  垂直位移
   第三个值：模糊距离
   第四个值：阴影的颜色
- css 有些属性直接继承
  每个都要写一遍 无法接受
  默认16px 颜色黑色 
  body 设置color 子元素 继承body   
  有些也不会继承
- background-size: cover; 等比例缩放，填满容器区域，裁剪 重点在盒子
  而contain 重点在背景，完整显示背景图片

- css 如js 一样
  - 模块特性
    tab 缩进 自动补全css 前缀
    模块和作用域的概念 

- viewpoint  user-scalable=no
它指示浏览器不允许用户通过缩放来改变页面的显示比例，确保网页在移动设备上以设计师或开发者设定的最佳视图展示，保持布局的一致性和设计意图的完整性