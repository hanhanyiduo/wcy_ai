// 作用域
// 作用域链 内部可以访问外部
// 
// 全局作用域
var n = 999;

function f1() {
    // 函数作用域
    {
        //块级作用域
        let a = 1
    }
    console.log(n)
}

f1()