import {
    ADD_COUNTER,
    ADD_CART,
    HANDLE_CHECK,
    CHECKED_ALL,
    CHECKED_ALL_CANCEL
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
    [CHECKED_ALL](state){
        for(let i=0;i<state.cartList.length;i++){
            state.cartList[i].isChecked = true
        }
    },
    [CHECKED_ALL_CANCEL](state){
        for(let i=0;i<state.cartList.length;i++){
            state.cartList[i].isChecked = false
        }
    }
}