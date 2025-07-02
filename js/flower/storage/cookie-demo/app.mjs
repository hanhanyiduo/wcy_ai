// es6 模块化
// mjs 后缀使用es6模块化
// 模块化是一种语言的能力
// node 默认不支持es6的模块化 
// node 最新版本支持了 22 
// node 准备跟require commonJS say goodbye
// es6 module 更先进 用mjs
import http from 'http';

const server = http.createServer((req,res)=>{
    res.end('hello http server');
})
server.listen(1234);