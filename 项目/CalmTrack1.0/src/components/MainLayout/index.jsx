import {
    useEffect,
    useState
} from 'react';
import {
    Tabbar,
} from 'react-vant';
import {
    HomeO,
    NotesO,
    SmileO,
    UserCircleO,
    LikeO,
} from '@react-vant/icons';
import {
    Outlet,
    useNavigate,
    useLocation,
} from 'react-router-dom'

//菜单栏配置
const tabs = [
    { icon: <HomeO />, title: '首页', path: '/home'},
    { icon: <LikeO  />, title: '爱好', path: '/habit'},
    { icon: <NotesO />, title: '情绪日记', path: '/diary'},
    { icon: <SmileO  />, title: '助手', path: '/assistant'},
    { icon: <UserCircleO  />, title: '我的账户', path: '/account'}
]

const MainLayout = () => {
    const navigate = useNavigate()
    const [active, setActive] = useState(0)
    const location = useLocation()
    useEffect(() => {
        // es6 的使用
        console.log(location.pathname,'///')
        const index = tabs.findIndex(
            tab => location.pathname.startsWith(tab.path)
        )
        setActive(index)
    }, [location])
    return (
        <div 
        className='flex flex-col h-screen'
        style={{paddingBottom: '50px'}}
        >
            <div className='flex-1'>
                <Outlet />
            </div>
            {/* tabbar */}
            <Tabbar value={active} onChange={
                (key) => { setActive(key); navigate(tabs[key].path)}
            }>
                {tabs.map((tab, index) => (
                    <Tabbar.Item 
                        key={index} 
                        icon={tab.icon}
                    > 
                    {tab.title}
                    </Tabbar.Item>
                ))}
            </Tabbar>
        </div>
    )
}

export default MainLayout;