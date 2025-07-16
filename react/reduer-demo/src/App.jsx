import { 
  useState,
  useReducer,
} from 'react'
import './App.css'

// function App() {

//   return (
//   <>
//    <LoginContext.Provider>
//      <ThemeContext.Provider>
//       <TodosContext.Provider>
//         <Laout>
//           <Header/>
//           <Main/>
//           <Footer/>
//         </Laout>
//      </TodosContext.Provider>
//     </ThemeContext.Provider>
//    </LoginContext.Provider> 
//   </>
//   )
// }
// 管理好多
const initialState = {
  count: 0,
  // isLogin: false,
  // theme: 'light',
  age: 21,
}
// 管理 分部门
// reducer 纯函数 返回可靠的状态
// 状态生产器
// case 状态修改的规定
const reducer = (state,action) => {
  // increment ,decrement,
  // {type:'increment'}
  switch(action.type){
    case 'increment': 
      // 新的状态
      return{
        count: state.count + 1,
        age: state.age + 1
      }
      case 'decrement':
        return{
          count: state.count - 1,
          age: state.age - 1
        }
      case 'incrementByNum':
        return {
          count: state.count + Number(action.payload),
        }
      default:
        return state
  }
}

function App() {
  // 初始值 initialValue
  // 当前状态值 旧状态 新状态 
  // 界面由当前状态来驱动
  // 修改状态的方法
  // 响应式
  // 管理 useState 有的，都有，高级点
  const [count,setCount] = useState(0)
  // 大型项目
  // dispatch 派发 函数 
  // 参数固定 {type: ''} action.type 没有返回值 传递 action 以驱动状态更新
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <>
      <p>Count: {state.count}</p>
      <p>wcy的Age: {state.age}</p>
      <button onClick={() => dispatch({type:'increment'})}>+1</button>
      <button onClick={() => dispatch({type:'decrement'})}>-1</button>
      <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
      <button onClick={() => dispatch({type:'incrementByNum', payload:count})}>
        incrementByNum</button>
      <button onClick={() => dispatch({type:'increment'})}>每过一年wcyAge+1</button>
    </>
  )
}

export default App
















