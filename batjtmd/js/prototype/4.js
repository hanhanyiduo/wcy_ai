function  Person(name,age){
    // this 指向当前实例化的对象
     this.name = name;
     this.age = age;
}


Person.prototype.sayHello = function(){
        console.log(`hello,my name is ${this.name}`);
    }

var hu = new Person('hu',22);
console.log(hu.__proto__);
var a = {
    name:'孔子',
    country:'中国',
}
hu.__proto__ = a;
console.log(hu.__proto__);
console.log(hu.country);
console.log(Person.prototype);
console.log(hu.name)