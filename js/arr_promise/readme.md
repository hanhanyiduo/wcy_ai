需求:

api.github.io/users/hanhanyiduo/repos


- 有一堆的异步任务要执行
- 每一项又是一个promise
- Promise.all() 本身返回一个新数组promise
- 所有项都解决了，都成功，Promise。all 才解决，
不然就失败
- 如果都成功，每个promise结果 会按原promise 下标存放
- Promise.all 是静态方法，不是实例方法
