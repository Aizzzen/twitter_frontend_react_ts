import axios from "axios";

axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${window.localStorage.getItem('Bearer')}`
    // config.headers['Bearer'] = window.localStorage.getItem('Bearer')
    return config
})

export { axios }
