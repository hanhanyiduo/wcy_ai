//没有class 的js 如何在苦苦追求 OOP 编程
// 首字母大写 一个约定 1.类的概念
//2.构造函数 
function  Person(name,age){
    // this 指向当前实例化的对象
     this.name = name;
     this.age = age;
}
// 函数对象 原型对象
// 类的方法 
Person.prototype = {
       sayHello:function(){
           console.log(`hello,my name is ${this.name}`);
       }
}
//函数对象
//new 一下 实例化对象
//new 运行构造函数
let hu = new Person('hu',22);
hu.sayHello();
//原型对象 
console.log(hu.__proto__);