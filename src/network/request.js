import axios from 'axios'

export function request(config) {
    // 创建axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000
    })

    // 拦截器

    // 1.请求拦截
    instance.interceptors.request.use(config => {
        return config
    }), err => {
        // console.log(err);
    }

    // 2.响应拦截
    instance.interceptors.response.use(res => {
        // console.log(res);
        return res.data
    }), err => {
        console.log(err);
    }

    // 发送真正的网络请求,返回的是一个Promise
    return instance(config)
}