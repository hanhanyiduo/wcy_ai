# vue 中的hooks
- 你用的react是什么版本的？
    React 19
    React 16.8 划时代的更新 函数式组件，hooks 2019年
    之前 类组件 Component 基类
    函数组件 子组件+父组件通过props传递数据 无状态组件
    UI 展示 Stateless 简单，性能好 
    函数组件 + useState + useEffect .. hooks 类组件就没有
    必要了

- 类组件
    和函数组件都有，各司其职
    - 类组件比较固守于类的格式，繁琐
    - this丢失问题 事件处理
    - 生命周期钩子函数 由useEffect 副作用代替
    - 开销大些 函数组件结合memo，useMemo 更好的性能优化

    - Vue 抄袭了 React
        hooks 函数式编程思想
面试回答：React 16.8 引入的函数组件和 Hooks 使得状态管理和副作用处理变得更加简洁，而不需要类组件中繁琐的生命周期方法和 this 绑定问题，因此我在项目中主要使用函数组件

- vue 和 react 相同点和区别
- hooks 
    - 什么是hooks？
        能够在不编写 class 的情况下，使用 React 的状态（state）和生命周期等特性。
        Hooks 提供了一种更直观、更灵活的方式来组织和复用组件中的逻辑和响应式业务。
        react 内置的hooks useState, useEffect 副作用等，挺好用的。
    - 内置的hooks
        useState,useEffect(副作用),useCallback,useMemo（闭包陷阱）,
        useContext,useReducer,useRef(创建一个可变的引用对象),
        useLayoutEffect（DOM 更新完成、浏览器绘制之前 同步执行，用于需要读取 DOM 布局并同步更新的场景，以避免视觉闪烁）
        useImperativeHandle通常与 forwardRef 搭配使用，用来自定义暴露给父组件的 ref 对象内容，
        而不是直接暴露子组件内部的 DOM 或实例，从而让父组件只操作到你允许的 API。
        在我做的冥想类 App（CalmTrack）中，习惯打卡弹窗组件就是用这种方式实现的。父组件点击按钮时，通过 ref 调用子组件的 open() 方法展示弹窗，
        并且在弹窗内部封装了动画和数据校验逻辑，外部无法直接操作 DOM，从而避免了 UI 和业务逻辑的混乱。
    - 自定义hooks
        useTitle,useTodos,useMouse,useRepos,
        响应式业务、响应式场景封装到hooks目录下，方便复用
        UI 组件干净
   - ahooks 第三方hooks/vueuse 库
        useToggle、useRequest(所有的请求 data，loading，error) 我在业务中就经常用