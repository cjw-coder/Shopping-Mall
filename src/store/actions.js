import {
    ADD_COUNTER,
    ADD_CART,
    CHECKED_ALL,
    CHECKED_ALL_CANCEL
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
    },
    isCheckAll(context){
        for(let i=0;i<context.state.cartList.length;i++){
            if(context.state.cartList[i].isChecked == false){
                context.commit(CHECKED_ALL)
            }else{
                context.commit(CHECKED_ALL_CANCEL)
            }
        }
    }
}