let arr = [
    {
        name: '张三',
        hobbies: ['篮球']
    },
    function () {
        console.log('函数拷贝不了');
    }
]
let arr2 = JSON.parse(JSON.stringify(arr))
arr2[0].name = '张三（深拷贝）'
arr2[0].hobbies.push('大瓦')
console.log(arr2);
