
# css animation


- html
div
眉毛
嘴巴
小酒窝

- css
? 在一起？
border-radius 
animation 世界


- html 结构快捷输入方式
-  div#l-ball.ball  // emmet 语法  css选择器   #后面是id  .后面是class
- .container>#l-ball.ball + #r-ball.ball  // + 相邻兄弟选择器 > 子元素选择器
 - id 唯一
 - class 类名
 - .container?
  盒子 用来实现页面居中
  水平垂直居中

  - dispaly 属性
  div block 
  span ， i a  inline
  display 切换行内块级的格式化上下文
  inline-block 行内块级 设置宽高 在一行
  inline 行内 不可以设置宽高
  block  块级 独占一行 

  - 面向对象的css
  多态 
  复用  多类名 
  - 定位 
   - position 定位
    static 没有定位能力
    relative 相对定位
      - 告诉子元素相对它定位
      - 相对于自身的位置定位
    absolute 绝对定位
    absolute 找到离他最近的（可以管着它）position不为static的元素定位
    直到body 为止 
    .container absolute  body

