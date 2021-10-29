

// 引入网络请求库 https://github.com/axios/axios

import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.baseURL = 'https://api-v2.chainx.cc/'


axios.interceptors.request.use((config) =>
{
    return config
}, function (error)
{
    return Promise.reject(error)
})

axios.interceptors.response.use(function (response)
{

    if (response.data.code === 900401) {

    }
    return response
}, function (error)
{
    return Promise.reject(error)
})

const request = function (url: string, params: any, config: any, method: 'get' | 'post' | 'put' | 'delete' | 'head' | 'options' | 'patch')
{
    return new Promise((resolve, reject) =>
    {
        if (method === 'post') {
            axios.post(url, params, Object.assign({}, config)).then((response: any) =>
            {
                resolve(response.data)
            }, (err: any) =>
            {

                reject(err)
            }).catch((err: any) =>
            {
                reject(err)
            })
        } else {
            axios.get(url, params).then((response: any) =>
            {
                resolve(response.data)
            }, (err: any) =>
            {

                reject(err)
            }).catch((err: any) =>
            {
                reject(err)
            })
        }

    })
}

const post = (url: string, params: any, config = {}) =>
{
    return request(url, params, config, 'post')
}

const get = (url: string, params: any, config = {}) =>
{
    return request(url, params, config, 'get')
}

export { request, post, get }

