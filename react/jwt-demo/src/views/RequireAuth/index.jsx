import { 
    useNavigate, 
    useLocation
} from 'react-router-dom'
import {
    useEffect
} from 'react'
import {
    useUserStore
} from '../../store/user'
const RequireAuth = ({ children }) => {
    const {isLogin} = useUserStore();
    const navigate = useNavigate();
    const {pathname} = useLocation();
    useEffect(() => {
        if(!isLogin){
            return navigate('/login',{ from: pathname});
        }
    },[])
    return (
        <>
            {children}
        </>
    )
}
export default RequireAuth
