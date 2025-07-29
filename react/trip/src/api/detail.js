import axios from './config.js'

export const getDetail = async (id) => {
    return axios.get(`/detail/${id}`);
}
