import {
    ADD_COUNTER,
    ADD_CART,
    HANDLE_CHECK
} from './mutations-types'

export default{ 
    [ADD_COUNTER](state,payload){
        payload.count++
        console.log(state.cartList)
    },
    [ADD_CART](state,payload){
        payload.count = 1
        payload.isChecked = false
        state.cartList.push(payload)
    },
    [HANDLE_CHECK](state,payload){
        for(let item of state.cartList){
            if(item.type == payload.type && item.page == payload.page && item.num == payload.num){
                item.isChecked = !item.isChecked
            }
        }
    },
    isCheckAll(state){
        for(let i=0;i<state.cartList.length;i++){
            if(state.cartList[i].isChecked == false){
                state.cartList[i].isChecked = true
            }else{
                state.cartList[i].isChecked = false
            }
        }
    }
}