import {debounce} from './utils'

export const itemListerMixin = {
    mounted(){
        let refresh = debounce(this.$refs.scroll.refresh,100)
        this.$bus.$on('itemImageLoad',() => {
            refresh()
        })
        this.$bus.$on('commendImageLoad',() => {
            refresh()
        })
    }
}