import axios from 'axios';
import qs from 'qs'

const api = axios.create({
    baseURL: 'http://localhost:5000',
    paramsSerializer: (params) => {
        return qs.stringify(params)
    }

})

export default api