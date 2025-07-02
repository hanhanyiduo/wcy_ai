// 完成的功能
function objectFactory(){
  var obj = {};
  return obj;
}

function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.sayHi = function(){
    console.log(`你好，我是${this.name}`);
}

let p = objectFactory(Person,'张三',18)

//new Person(...) -> function[[constuct]] -> {} && this -> {} -> [[call]]
//-> {}.__proto__ -> Construct.prototype -> return {}