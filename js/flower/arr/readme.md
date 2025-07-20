# Array 的高级考点

- 怎么认识数组？
    - 可遍历的对象
- new Array(5)
    类似于c++, 固定大小的分配 v8引擎对arr 设计
    - 灵活地扩展，不限类型，还有hash的特性
    - empty*5 key 没有释放 for key in 不可以迭代
    - new Array(5).fill(undefined) 统一的
- [] 数组字面量
    ['宗馥莉','总机场','宗纪胜','宗馥莉','总机场','宗纪胜','宗馥莉',...arr]
- 静态方法
    Array.of(1,2,3)
    Array.from() // 转换，（类数组，填充计算）