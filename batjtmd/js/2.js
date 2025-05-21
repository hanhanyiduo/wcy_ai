const arr = [1, 2, 3, 4, 5];
console.log(typeof(arr));
const data = new Date();
console.log(typeof(data));
//如何区分object的这些类型？
console.log(Object.prototype.toString.call(arr));//[object Array]
console.log(Object.prototype.toString.call(data));//[object Date]

//会在MDN 文档上看一些资料api
function getType(value){
    //string api的选择
    //splpt + substring
    return Object.prototype.toString.call(value).slice(8,-1);
    //slice 左闭右开
}