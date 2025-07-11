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

   - props 
      - 传递状态
      - 传递自定义事件
      - 直接结构
         const{
            todos, // 任务
            onAddtodo // 添加
         } = props 单独解构

- 数据绑定
   - 变量 修改值
   - 数据状态 
      - Data binding **数据**绑定 jsx 就是静态的
      {} 数据绑定 
      - 数据和界面状态统一
         - 界面由数据驱动的
         - 数据和界面状态的一致性
      - 响应式的 

- vue 和 react 区别
   - vue 好入门，api文档好用
   - react 倾向于原生JS 
      - hooks ？ 
   - <input v-model="text" />
     <input value = {text} onChange = {e => setText(text)} />
     react 坚持 单向绑定 
     
- localStorage 本地存储
   - localStorage 本地存储
    key:value 存储
    设置 setItem
    获取 getItem
    删除 removeItem
    清除 clear
- BOM Browser Object Model 

- 本地存储
   - localStorage 和 cookie 有什么异同
   - http 无状态， head cookie 带上
   - cookie 太大， 影响http 性能 4KB
      过期时间
      domain 域名 隔离
   - cookie 前端，后端都可以设置
   - localStorage 只在浏览器端
      todos 
      5MB 
   - IndexDB 数据库 GB 

## 自定义hooks
   - 自己定义的
   - use开头
   - 某一项功能
      简单函数的封装
      响应式的状态
      effect
      todos

- 自定义hooks 
   - 现代react app 的架构一部分
   - hooks 目录
      自定义hooks 
      框架common部分
      业务定制 ahooks
   - use 开头
      state ，effect ， 逻辑封装复用
   - return 
      todos
      toggle
      addtodos
      deleteTodos  
      函数式编程思想的体现
   - 组件更好的聚焦于模版渲染
   - 全面hooks函数式编程

- 两个遗憾 
   - ../../ 路径山路十八弯
       - vite 配置alias 短路径 @
   - toggle、 delete 跨越组件层级有点多， useContext 跨组件通信