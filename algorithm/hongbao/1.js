/**
 * 
 * @param {number} total 
 * @param {number} num
 * @return {number[]} 
 */
function hongbao(total,num){
    const arr = [];
    let restAmount = total;// 剩余金额
    let restNum = num;// 剩余人数
    for (let i = 0;i<num-1;i++){
        // Math 
        // 包装类
        let amout = Math.random(restAmount/restNum*2).toFixed(2);
       // console.log(amout);
       restAmount -= amout;
       restNum--;
       arr.push(amout);
    }
    arr.push(restAmount.toFixed(2));// 最后一个
    return arr;
    // - 公平性
    // 平均值
    // 随机性
}
function hongbao(total,num){
   let restAmount = total;
   let restNum = num;
   for(let i = 0;i<num-1;i++){
    let amount = Math.random(restAmount/restNum*2).toFixed(2);
    restAmount -= amount;
    restNum--;
    arr.push(amount);
   }
   arr.push(restAmount.toFixed(2));
   return arr;
   
}