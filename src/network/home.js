import {request} from './request'

export function getHomeMultidata(){
    return request({
        url:'http://123.207.32.32:8000/home/multidata'  
    })
}

export function getHomeGoods(type,page){
    return request({
        url:'http://127.0.0.1/myProject/vue_mall/src/network/mini_base/home_goods.php',
        params:{
            type,
            page
        }
    })
}