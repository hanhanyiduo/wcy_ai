CalmTrack的Readme
## 项目的架构
- components
- pages
- store
- hooks
- api
- mock

## 开发前的准备
- 安装的包
    react-router-dom zustand axios
    react-vant(UI组件库) lib-flexible(移动端适配)
    开发期间的依赖-D
    vite-plugin-mock jwt (后端的)
- vite 配置（vite.config.js）
    - alias
    - mock
## bug
search组件库得在父元素绑定事件点击
// 移除onClick，改为在父容器上绑定点击事件