import {request} from './request'

export function getDetailGoods(type,page,num){
    return request({
        url:'http://127.0.0.1/myProject/vue_mall/src/network/mini_base/detail_goods.php',
        params:{
            type,
            page,
            num
        }
    })
}

export class DetailInfo{
   constructor(item){
    this.src = item.src
    this.info = item.info
    this.type = item.type
    this.collect = item.collect
    this.price = item.price
    this.num = item.num
   }
}