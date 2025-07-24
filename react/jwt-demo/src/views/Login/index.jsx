import {
    useRef
} from 'react';
import {
    useUserStore
} from '../../store/user'
import {
    useNavigate
} from 'react-router-dom'

const Login = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const {login} = useUserStore();//解构全局状态
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;//输入框的值
        const password = passwordRef.current.value;
        if (!username || !password) { // 判断是否为空
            alert("请输入用户名或密码");
            return;
        }
        login({username, password});//去zustand那里
        setTimeout(() => {//延迟1秒后执行跳转，给状态更新或用户反馈留时间
            navigate('/')
        }, 1000)
    }
    return (
        <>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        ref={usernameRef} //ref绑定输入框这个dom元素
                        placeholder="请输入用户名"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        ref={passwordRef} 
                        placeholder="请输入密码"
                        required
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </>
    )
}
export default Login;