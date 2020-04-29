export function debounce(fn,delay){
    const timer = null;
    return function(...args){
        if(timer) clearTimeout(timer)
        setTimeout(()=>{
            fn.apply(this,args)
        },delay)
    }
}