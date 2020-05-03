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
    this.page = item.page
    this.type = item.type
    this.num = item.num,
    this.collect = item.collect
    this.info = item.info
    this.current_price = item.current_price
    this.old_price = item.old_price
    this.service = item.service
    this.evaluate = item.evaluate
    this.moreInfo = item.moreInfo
    this.sell = item.seller.sell
    this.sell_name = item.seller.name
    this.all_sell = item.seller.allSell
    this.all_goods = item.seller.allGoods
    this.all_lev = item.allLev
    this.desc_lev = item.allLev.descLev
    this.quality_lev = item.allLev.qualityLev
    this.service_lev = item.allLev.serviceLev
   }
}