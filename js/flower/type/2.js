console.log(0/0);//NaN
//平方根 NaN
console.log(Math.sqrt(-1));//NaN  js 内置的Math对象 
console.log(parseInt('123'));//123 
console.log(parseInt('a123'));//NaN
console.log(parseInt('123a'));//123
console.log(Number(undefined));//NaN
console.log(NaN===NaN);//false   Not a Number 的方式有很多种
console.log(isNaN(NaN),isNaN(0/0));//true true
console.log(typeof NaN);//number