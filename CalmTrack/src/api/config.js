import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:5173/api'
// 拦截器 
axios.interceptors.request.use(config =>{
    // console.log('////')
    let token = localStorage.getItem('token') || '';
    config.headers.Authorization =  'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMDAxIiwidXNlcm5hbWUiOiJhZG1pbiJ9LCJpYXQiOjE3NTMyMzk2ODcsImV4cCI6MTc1MzMyNjA4N30.yOlT5Z6diY7vmV2cDoa437NCXME3x4dEt_iMP8StTJc'
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})
axios.interceptors.response.use(res => {
    console.log('||||||')
    return res
})

export default axios