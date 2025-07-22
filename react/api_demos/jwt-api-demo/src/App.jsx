import {
  useState,
  useEffect,
 } from 'react'
import './App.css'
import {
  getTodos,
  getRepos,
} from '@/api'

function App() {
  // const [todos, setTodos] = useState([])
  const [repos, setRepos] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      // const todoResult = await getTodos();
      // console.log(todoResult)
      // setTodos(todoResult.data.data)
      const reposResult = await getRepos();
      setRepos(reposResult.data)
    }
    fetchData()
  }, [])
  return (
    <>
      {/* {todos.map(todo => (
        <div key={todo.id}>
          {todo.title}
        </div>      
      ))} */}
      {
        repos.map(repo => (
          <div key={repo.id}>
            {repo.description}
          </div>
        ))
      }
    </>
  )
}

export default App
