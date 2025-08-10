export function debounce(fn, delay = 300) {
  let timer = null; // 定时器ID（闭包保存）
  return function (...args) { // 支持多个参数
    const context = this; // 保留调用上下文
    clearTimeout(timer); // 每次触发先清掉上一次的定时器
    timer = setTimeout(() => {
      fn.apply(context, args); // 延迟后执行
    }, delay);
  };
}
