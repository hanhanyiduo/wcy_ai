function add(...args){
    console.log(args);
    return (...newargs) => {
        const arr = [...args,...newargs];
        console.log(arr);
    }
}
add(1,2,3)(4,5,6);