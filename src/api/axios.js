import axios from 'axios'

const ajax = (url,config)=>{
    config={
        ...config,
        'x-csrf-token':''
    }
    return axios({
        ...config,
        url
    }).then(function(response){
        if(response && response.data && response.data.code && response.data.code>0){
            return response.data
        }else{
            return error
        }
    }).catch(error=>{
        if(error.response.status===401){
            window.location.href="www.baidu.com"
            error.status = error.response.status
        }
        return error
    }).finally(()=>{
        console.log('最后想干点什么')
    })
}
export const post = (url,data,config)=>{
    return ajax(url,{
        config,
        data,
        method:'post'
    })
}
export const get =(url,data,config)=>{
    return ajax(url,{...config,param:data,method:'get'})
}
export const getFile = (url,data,config)=>{
    return axios({
        url,
        baseURL:baseUrl,
        withCredentials:true,
        param:data,
        method:'get',
        ...config
    }).then(function(response){
        return response.data
    }).catch(error=>{
        error.status = error.response.status
        return error
    }).finally(()=>{
        console.log('最后想干点什么')
    })
}
export const put = (url,data,config)=>{
    return ajax(url,{
        config,
        data,
        method:'put'
    })
}
export const load = async (url,data,config)=>{
    const result = await post(url,data,config)
    if(result.data && result.data.data){
        return Promise.resolve(result)
    }else{
        return Promise.reject(result)
    }
}