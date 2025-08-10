/**
 * @func 两数之和
 * @param {number} a 
 * @param {number} b 
 * @returns  {number}
 */
// 函数编写
// 函数调用
// 健壮性
//typeof 是一个运算符 
//用来判断简单数据的类型，除了null
//返回值是类型的字符串
function add(a,b){
    if(typeof a !== 'number'||typeof b!=='number '||isNaN(a)||isNaN(b)){
        throw new Error('a和b必须是数字')
    }
 
    // 参数的校验
    return a+b;
}