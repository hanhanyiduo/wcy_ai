// 业务流水账代码
// 封装
function Button(id) {
  this.element = document.querySelector(`#${id}`);
  this.bindEvent();
}
Button.prototype.bindEvent = function() {
    // this 丢失问题 //this指向 Button
   /* this.element.addEventListener('click',function() {
        // this => this.element
        this.element.style.backgroundColor = 'red';
    }.bind(this));*/
    this.element.addEventListener('click',this.setBgColor.bind(this));
    //浏览器会自动执行element.onclick(); // 相当于：setBgColor.call(element)
}
Button.prototype.setBgColor = function() {
  this.element.style.backgroundColor = '#1abc9c'
}
// ！！注释！！
// 当初是从 Button 实例那里拿来的 setBgColor 函数，
// 只要你没 .bind(this)，最终执行它时，this 就会 自动变成 DOM 元素。
//注册事件时你只是传函数引用，真正决定 this 的是执行时的上下文。
//在 DOM 事件中，如果是普通函数，this 默认是事件目标（DOM 元素），this 会“丢失”原本的对象指向。