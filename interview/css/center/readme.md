# 居中布局
研究对手
- 听清是什么居中
    - 水平垂直
- 方式不是关键
    - 水平居中 text-align
    - 单行文本垂直居中 line-height = height padding,
    - 固定宽高块级盒子水平垂直居中 
        absolute + magin 负值
            缺点需要知道盒子宽高
        absolute + lrtb=0 + margin auto （重要）
        absolute + calc (css calc 计算函数) 缺点是性能差，很少用
    - 不固定宽高块级盒子水平垂直居中
        absolute + transform 
        line-height + vertical-align （重要）
        方法三: writing-mode
        方法四:table-cell dispaly:table-cell + ver-a..:middle 父元素必须display: table
        flex
        Grid布局 align/justify-self:center;


**AI 详细版**
居中布局总结（面试版）
1. 听清需求：是什么居中

水平居中

垂直居中

或同时水平+垂直居中

面试时先问清楚是单行文本、块级元素还是弹窗，避免用错方法。

2. 水平居中

文本内容：text-align: center

简单、兼容性好

块级元素：margin: 0 auto

适合固定宽度的块级元素

3. 单行文本垂直居中

line-height = 高度

适合单行文本

简单、兼容性好

padding

可以在一定程度上实现单行垂直居中

缺点：多行文本无法垂直居中

4. 固定宽高块级盒子水平+垂直居中

绝对定位 + 负 margin

position: absolute; top:50%; left:50%; margin-left: -width/2; margin-top: -height/2;

缺点：必须知道元素宽高，不灵活

绝对定位 + l/r/t/b=0 + margin auto（重要）

position: absolute; top:0; left:0; right:0; bottom:0; margin:auto;

简洁、现代浏览器兼容好

不依赖计算宽高

绝对定位 + calc()

top: calc(50% - height/2); left: calc(50% - width/2);

灵活，但性能稍差，现代项目中较少用

5. 不固定宽高块级盒子水平+垂直居中

绝对定位 + transform

top:50%; left:50%; transform: translate(-50%, -50%)

灵活，响应式友好，现代项目首选

line-height + vertical-align（重要）

适合单行文本或表格单元格

注意多行文本无法居中

writing-mode

用于竖排文字或复杂布局

配合 flex 可实现响应式垂直居中

table-cell

父元素必须 display: table

display: table-cell; vertical-align: middle; text-align: center;

支持多行文本，兼容 IE8+，语义性差

flex 布局

.parent {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
}


灵活、易用，响应式友好

支持单行、多行及动态尺寸元素

Grid 布局

.parent {
  display: grid;
  place-items: center; /* 同时水平+垂直居中 */
}


简洁、语义化

支持复杂布局

现代浏览器，兼容性好

6. 面试口语总结亮点

“我在布局中会先明确是水平、垂直还是双向居中，然后根据元素类型和尺寸选择方法：

简单文本用 text-align 或 line-height

固定尺寸弹窗用绝对定位 + margin auto 或负 margin

弹性盒子或不固定尺寸用 absolute + transform、flex 或 grid

对竖排文字或多行文本，有时会用 writing-mode 或 table-cell
总结原则是先确定居中方向，再选择性能好、兼容性好、语义清晰的方法，而不是死记具体技巧。