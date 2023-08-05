import axios from "axios";

axios.interceptors.request.use((config) => {
    if(window.localStorage.getItem('Bearer')) {
        config.headers.Authorization = `Bearer ${window.localStorage.getItem('Bearer')}`
    } else {
        config.headers.Authorization = null
    }
    return config
})

export { axios }
