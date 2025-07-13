console.log('同步 Start');
const promise1 = Promise.resolve('Frist Promise')
const promise2 = Promise.resolve('Second Promise')
// 同步的！！
const promise3 = new Promise(resolve => {
    console.log('Promise3')
    resolve('Third Promise');
});
//这个才是异步的
setTimeout(() => {
     setTimeout(() => {
        console.log('下一把再相见')
    },0)
    const promise4 = Promise.resolve('Forth Promise')
    promise4.then(value => console.log(value))
    },0)
    setTimeout(() => {
        console.log('下下一把再相见')
    },0)
promise1.then(value => console.log(value));
promise2.then(value => console.log(value));
promise3.then(value => console.log(value));
console.log('同步end')