import axios from './config'
// todos 接口
export const getTodos = () => {
    return axios.get('/todos')
}
// repos 接口
export const getRepos = () => {
    return axios.get('/repos')
}