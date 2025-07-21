- JSX 
    - JSX 不能独立运行
    - vite 工程化
        jsx -> React.createElement
    - React 环境中

- babel
    Make JavaScript Great Again
    大胆使用JS 最新语法，不用等待
    es6 promise -> es8 async await
    let -> var 
    () => {} -> function() {}
    
- 编译的流程
    - pnpm i @babel cli @babel/core -D
        @babel/cli babel的命令行工具
        @babel/core babel的核心工程
    - pnpm i @babel/preset-react(可以换成别的) -D
    - 创建.babelrc
     {
        "presets": ["@babel/preset-react"]
     }
    - ./node_modules/.bin/babel
    - npm babel 1.jsx -o 2.jsx
        bebel 负责JS 转码的
        -D 开发阶段的依赖
        上线后是不用的
    - ./node_modules/.bin/babel
        转换的规则 
        react -> IOS 代码
        es6 -> es5
        JSX -> react.createElement