const bigNum = 123456789012345678901234567890123456789n
//BigInt 申明方式 函数申明
//BigInt 简单数据类型， 不是对象，不是构造函数，不能new
//BigInt 不能使用new 关键字
//const theNum =   new BigInt("123456789012345678901234567890123456789")
const theNum =   new BigInt("123456789012345678901234567890123456789")
console.log(bigNum,theNum);
console.log(bigNum+1n);