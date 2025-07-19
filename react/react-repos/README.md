# react repos 项目开发
- api.github.io/users/hanhanyiduo/repos
- 综合react开发全家桶、项目级别、大型的、性能
- todos 
- 从demo开始

## 路由设计
    - react-router-dom
    - /repos/:username
    - /repos/:id
    懒加载 
    （路由守卫）
    hash/history
    useParams : username 
## 数据管理
    App 数据管理 
    repos 
    useContext + useReducer + hooks
    createcontext + reducer + useRepos
## react 
    组件的粒度 
## api 
    fetch
    - axios http 请求库
    - 独立的模块，所有的请求会从 组件中分离到api目录下

## 项目的目录结构，项目架构
    - api 
        应用中的所有接口
    - main.jsx 
        入口文件
        添加路由功能， SPA 
        添加全局应用状态管理
- RepoList 功能模块
    - params 解析
        - useParams 动态参数对象
        - 不要放到useEffect里面
        - 校验id
            不要相信用户的任何提交
        - navigate('/') -> useEffect 中去（useNavigate不能放里面hooks都不能放里面！！）
- 组件开发模式
    - UI 组件（JSX） 
    - 自定义hooks useRepos
    - 状态管理 应用全局 context 来管
        - repos loading error  => context value
        - useReducer reducer 函数 