// 完成的功能
// function objectFactory() {
//   var obj = {};
//   // 类数组没有shift方法，所以借用数组的shift方法
//   var Construct = [].shift.call(arguments) // 构造函数，把Person移出来给Construct
//   var ret = Construct.apply(obj,arguments) //apply会把arguments数组里面的参数一个个拆开传进去并绑定this到obj
//   //apply则不会，只会传进去一整个数组[]
//   obj.__proto__ = Construct.prototype // 原型链
//   // || null 情况，仍然会返回 object 构造函数 return 简单类型，忽略
//   return typeof ret === 'object' ? ret || obj : obj // '||'点睛之笔 ,排除null
// }
// es6 优化
function objectFactory(Constructor,...args) {
  var obj = {};
  // 类数组没有shift方法，所以借用数组的shift方法
  // var Construct = [].shift.call(arguments) // 构造函数，把Person移出来给Construct
  var ret = Constructor.apply(obj,args) //apply会把arguments数组里面的参数一个个拆开传进去并绑定this到obj
  //apply则不会，只会传进去一整个数组[]
  obj.__proto__ = Construct.prototype // 原型链
  // || null 情况，仍然会返回 object 构造函数 return 简单类型，忽略
  return typeof ret === 'object' ? ret || obj : obj // '||'点睛之笔 ,排除null
}

function Person(name,age){
  this.name = name;
  this.age = age;
//  return 1;
  return {
    name: name,
    age: age,
    label: 'haha'
  }
}

Person.prototype.sayHi = function() {
  console.log(`你好，我是${this.name}`)
}

let p1 = new Person('张三',18)
console.log(p1);
// p.sayHi();

let p = objectFactory(Person,'张三',18)
console.log(p);
p.sayHi();
console.log(p instanceof Person)

// new Person() -> function[[construct]] -> {} && this->{} -> [[call]]
// -> {}.__proto__ -> Construct.prototype -> return {}
 
// function myNew() {
//   let obj = {};
//   var Construct = [].shift.call(arguments);
//   var ret = Construct.apply(obj,arguments);
//   obj.__proto__ = Construct.prototype
//   return typeof ret === 'object' ? ret || obj : obj
// }