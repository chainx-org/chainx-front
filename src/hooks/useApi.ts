import message from 'antd/lib/message'
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.baseURL = 'https://api-v2.chainx.cc/'
export const outSideAPI = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/coins/chainx/market_chart?vs_currency=usd&days=3&interval=true'
})

axios.interceptors.request.use((config) =>
{
    return config
}, function (error)
{
    return Promise.reject(error)
})

axios.interceptors.response.use(function (response)
{
    //
    if (response.data.code === 500) {
        message.error('miss error');//提示错误信息
    }
    // if (response.status === 204) {
    //     message.error('网络请求出错，请刷新');//提示错误信息
    // }
    // if(response.status!==200||response.data.code!==200){//接口请求失败，具体根据实际情况判断
    //     message.error('miss error');//提示错误信息
    //     return Promise.reject(response.data.code)//接口Promise返回错误状态
    // }
    return response
}, function (error)
{
    if (axios.isCancel(error)) {
        throw new axios.Cancel('cancel request')
    } else {
        message.error('网络请求失败,请重试')
    }
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

