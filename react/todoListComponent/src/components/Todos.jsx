//列表的渲染
function Todos(props){
    //父组件传过来的数据呢？传参
    const todos = props.todos;
    console.log(props,'/////')
    return (
          <ul>
            {
                todos.map(todo=>(
                    <li key = {todos.id}>{todos.text}</li>
                ))
            }
          </ul>
    )
}
export default Todos;