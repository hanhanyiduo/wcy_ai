import axios from './config'

export const getUser = () => {
    return axios.get('/user')
}

// export const getUserArticles = () => {
//     return axios.get('/user')
// } 