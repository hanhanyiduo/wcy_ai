// 枚举类型
const STATUS = {
    READY : Symbol('ready'),
    RUNNING : Symbol('running'),
    DONE : Symbol('done')   
}
let status = STATUS.READY;
if (status === STATUS.READY){
    console.log('ready');
}