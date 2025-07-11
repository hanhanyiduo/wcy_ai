 function debounce(fn,delay){
        //
        return function(args) {
            // 定时器返回一个ID 
            // fn 是一个自由变量 
            // fn 一等对象
            clearTimeout(fn.id);
            fn.id = setTimeout(function(){
                fn(args);
            },delay);
        }
    }


let obj = {
    count: 0,
    inc:debounce(function(vel){
        // this
        console.log(this,'///');
        this.count += vel;
    },500),
}
obj.inc(2);