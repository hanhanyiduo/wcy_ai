# 响应式底层原理

- DOM api -> 响应式业务
- Object.defineProperty(obj,'value'{
    get,
    set
})
    对象上的某个属性的某些行为（get set 属性的拦截器）进行定义，在完成本来的职责
    这就是响应式的底层原理
    拦截行为
- 缺点呢？ 有点麻烦，每次只能定义一个属性 
- obj.value
- REACT,VUE 现代前端MVVM 框架， 早期用 Object.defineProperty() 
    实现响应式 后来用 Proxy 实现响应式
- es6 Proxy 可以一次性代理整个对象，代理的行为更多

- 属性描述符 （property descriptor）
    configuable 可配置 修改或删除
    
