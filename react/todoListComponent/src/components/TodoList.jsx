// 内置的hook 函数 useState  用来创建状态变量
import { useState } from 'react'
import '../Todo.css'
import TodoForm from './TodoForm'
import Todos from './TodoList'
function TodoList(){
    // 数据驱动的界面
    // 静态页面？
    //DOM 数组 -> map -> join('') -> innerHTML 底层 API 编程
    //缺点 低效、面向API 懂业务
    //面向业务
    // 数据 -> 变化 -> 数据状态 -> 自动刷新页面 -> **数据**驱动**页面
    // 数组，第一项是数据变量， 第二项函数 执行并传入新的todos
    // 页面会自动更新
    // 挂载点 tbody 
    //{todos.map} 
    // setTodos   DOM 及动态更新
    // 响应式界面开发
    // hi 数据状态 setHi 修改数据状态的方法
    //es6 解构
    const [hi,setHi] = useState('haha')
    const [title,setTitle] = useState('Todo List')
    const [todos,setTodos] = useState([
        {
            id :1,
            text : '吃饭',
            Completed : false
        }
    ])
 
   /* setTimeout(()=>{
          setTodos([
            ...todos,// 展开运算符
            {
                id : 2,
                text : '睡觉',
                Completed : false
            }
          ])
          //之前：找到DOM，innerHTML
          //现在：更新业务 setTitle 
          setTitle('Todo List 2')
          setHi('奥利给')
    },3000)*/
    const hanleAdd = (text)=>{
        setTodos([
            ...todos,
            {
                id:todos.length + 1,
                text,
                Completed : false
            }
        ])
    }
    return (
       <div className="container">
           <h1 className='title'>{title} {hi}</h1>
           {/*表单*/}
           <TodoForm onAdd={handleAdd}/>
           {/*列表*/}
           <Todos todos={todos}/>
           {/*
             //当下这个位置
             //数据为王 界面是被驱动的 
             //数据驱动
             //数据绑定 data binding
             //发生改变后 界面会自动更新
             todos.map(todo=>(
                <li>{todo.text}</li>
             ))*/
           }
       </div>
    )
}

export default TodoList;