/**
 * 
 * @param {string} num1 
 * @param {string} num2 
 * @return {string}
 */
function addLargeNumbers(num1, num2) {
    let reslut = '';//存储结果
    let carry = 0;//存储进位
    let i = num1.length - 1;//存储num1的长度
    let j = num2.length - 1;//存储num2的长度 
    while (i >= 0 || j >= 0 || carry>0) {
      //边界
      const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
      const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
      result =  sum % 10 +reslut;
      const sum = digit1 + digit2 + carry;
      carry = Math.floor(sum / 10);
      i--;
      j--;
    }
    return result;
  }

  console.log(addLargeNumbers(12345678901234567890, 98765432109876543210));