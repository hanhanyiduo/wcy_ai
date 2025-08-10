// // 如何遍历数组
// - for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// } // 计数循环 性能好 可读性不好，不是人脑，电脑
// - while
// - foreach 停不下来
// - map filter find some every
// - for of 
const names = Array.of('Alice','Bob','Charlie','David');
names.forEach(name => {
    if(name ==='Charlie') {
        console.log('cl is here,stop...');
        // break;
        return;
    }
    console.log('Precessing' + name);
})