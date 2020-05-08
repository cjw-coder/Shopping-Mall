import {
    ADD_COUNTER,
    ADD_CART
} from './mutations-types'

export default {
    addCart(context,payload){
        let addedGoods = null
        for(let item of context.state.cartList){
            if(item.type == payload.type && item.page == payload.page && item.num == payload.num){
                addedGoods = item
            }
        }
        if(addedGoods){
            context.commit(ADD_COUNTER,addedGoods)
        }else{
            context.commit(ADD_CART,payload)
        }
    }
}