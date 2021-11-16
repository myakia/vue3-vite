import axios from 'axios'


let env = import.meta.env
let BaseUrl = env.PROD ? import.meta.env.VITE_BASE_API : '/'

// create an axios instance
const service = axios.create({
    baseURL: BaseUrl, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 300000, // request timeout
    onUploadProgress: p => { return 100 * (p.loaded / p.total) },
})

// request interceptor
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data
        return res
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)
export default service
