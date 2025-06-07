//parseInt num 
['1', '2', '3'].map((num,index,arr)=>{
    console.log(num,index,arr);
    return num;
})
console.log(parseInt('1',0,['1', '2', '3']));//1
console.log(parseInt('2',0,['1', '2', '3']));//NaN
console.log(parseInt('3',0,['1', '2', '3']));//NaN