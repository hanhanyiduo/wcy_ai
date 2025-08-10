//函数对象 
function add(){
    // arguments 函数运行时决定，参数总管
    //下标访问我们的第几个参数 数组
    //console.log(arguments,arguments.length,Object.prototype.toString.call(arguments),'////');
    // 类数组，有length属性，可以for迭代，但是没有数组太多的方法
    //console.log(arguments.map(item => item + 1))
    // 如何将类数组转成真正的数组？
    const args = Array.from(arguments);

    let result = 0;
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
        result += args[i];
    }
    return result;
}
console.log(add.length);
add(1,2,3);