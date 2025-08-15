const target = {
    a: 1,
}
const source = {
    // 对象的嵌套
    b: {
        name: 'hxt',
        hobbies: ['篮球', '打瓦'],
    },
    c: 1
}
// 浅拷贝
// Object.assign() 
// 常用深拷贝
const newObj = JSON.parse(JSON.stringify(source));



