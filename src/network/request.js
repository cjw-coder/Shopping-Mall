import axios from 'axios';

//封装axios()
export function request(config){
    const instance = axios.create({
        timeout:6000
    })

    instance.interceptors.request.use(config => {
        return config
    },err => {
        console.log(err)
    })

    return instance(config)
}
