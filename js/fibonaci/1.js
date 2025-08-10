// 递归 
// 相似的问题
// 自顶向下的思考 站在问题的终点
// 退出条件
// 重复计算
// 树状结构 
         /*fib(10)
      fib(9)   fib(8)...    */
var fib = function(n) {
    if(n<=1) return n;
    else return fib(n-1) + fib(n-2);
};