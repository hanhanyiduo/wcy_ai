// 标准的http请求库， vue/react 都用它
import axios from 'axios'
// mock 地址
// axios.defaults.baseURL = 'http://localhost:5174'
// url + json 
// 线上地址有了
axios.defaults.baseURL = 'https://api.github.com/users/hanhanyiduo'
export default axios;