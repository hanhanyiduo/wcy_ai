import axios from './config'

export const getImages = (page) => {
    return axios.get('/images', {
        params: {page}
    })
}
export const getOfficialRecommend = () => {
    return axios.get('/official-recommend')
}
