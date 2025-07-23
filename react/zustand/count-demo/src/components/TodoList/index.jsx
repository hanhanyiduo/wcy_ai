import {useTodosStore} from '../../store/todos'
const TodoList = () => {
    const {
        todos,
        deleteTodo,
        toggleTodo,
        addTodo,
    } = useTodosStore()
    return (
        <>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed} />
                        <span>{todo.text}</span>
                        <button onClick={() => deleteTodo(todo.id)}>删除</button>
                    </li>
                ))}
            </ul>
            <input type="text" />
            <button onClick={() => addTodo('新任务')}>添加</button>
        </> 
    )
}

export default TodoList