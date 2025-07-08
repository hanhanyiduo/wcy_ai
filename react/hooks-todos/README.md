## hooks todos 

- 安排个css 亮点
  - stylus 
      - css 超集
  - 拥有vite 脚手架
       stylus 预编译 安装stylus vite 直接编译
       vite 来自 vue 社区
  - react 组件设计
       - 开发任务单元
       - 设计组件
          界面功能 状态 响应式
          - 新建todo 表单
          - 修改 列表
          - 删除
       - 按功能划分 粒度
            - from 表单
            - list 列表
                - item 组件 列表项 维护和**性能**

- 字体 
   - 设置多个，设备的支持（本地包含）
   - 苹果设备 -apple-system  前端要负责用户体验，字体也是美感体验的一部分
- rem
    - 相对单位
    - 移动端的重要单位 px 不要用了  绝对的 
       移动端的 宽高不定的 rem(html的font-size) vw/vh(viewpoint), em()  都是相对单位 
       使用相对单位，可以在所有设备上适配
       em 相对于自身的font-size 等比例
