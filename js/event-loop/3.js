console.log('Start')
// node 微任务 
// process 进程对象
process.nextTick(() => {
    console.log('Process Next Tick');
})
// 微任务
Promise.resolve().then(() => {
    console.log('Promise Resolve');
})
// 宏任务
setTimeout(() => {
    console.log('haha');
    Promise.resolve().then(() => {
        console.log('Inner Promise Resolve');
    })
},0);
console.log('End');