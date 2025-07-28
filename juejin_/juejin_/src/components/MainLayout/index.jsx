import {
    Flex,
    Image,
    Search,
} from 'react-vant'
import {useEffect,useState} from 'react'
import {
    useNavigate,
    useLocation,
    Outlet
} from 'react-router-dom'
import {
    LikeO  
} from '@react-vant/icons'
const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active,setActive] = useState(0);
  const NavList = [  
        {   
            id: 1,
            title:'关注',
            path: '/home',
        },
        {   
            id: 2,
            title:'综合',
            path: '/synthesis',
        },
        {   
            id: 3,
            title:'排行榜',
            path: '/charts',
        },
        {   
            id: 4,
            title:'后端',
            path: '/backend',
        },
        {   
            id: 5,
            title:'前端',
            path: '/front',
        },
        {   
            id: 6,
            title:'私密你懂的',
            path: '/private',
        },

  ]
//   useEffect(() => {
    //     // es6 的使用
    //     const index = NavList.findIndex(
    //         nav => location.pathname.startsWith(nav.path)
    //     )
    //     setActive(index)
    // }, [location])
  return (
    <div className="container">
        <div className="header">
            <Image src='https://fxsh.com/wp-content/uploads/2023/12/540a8-juejin.cn.png' className='pic1'
            width="35px" height="35px"
            />
            <h2 className='title'>首页</h2>
            <div className="search" ><Search placeholder="/吴纯阳大帅比？ " background="pink" /></div>
            <div className='bell'><LikeO fontSize="30px" /> </div>
            <div className="pic2"><Image src='https://img1.baidu.com/it/u=3313450459,1421976897&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=919' width="35px" height="35px" round/></div>
        </div>
        <div className="nav">
            {
                NavList.map((nav) => (
                     <span
                     key={nav.id}  
                     className={nav.id==active ? "span_isSelect" : ""}
                     onClick={() => {
                        navigate(nav.path)
                        setActive(nav.id)
                    }
                    }
                     >
                        {nav.title}
                    </span>
                ))
            }
        </div>
        <div className="content">
            <Outlet />
        </div>
        <div className="footer" >
            <div className="footer_1" style={{display:'flex'}}>
                <div className="footer_1_1">
                    <Image src='https://img1.baidu.com/it/u=3313450459,1421976897&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=919' width="55px" height="35px" round/>
                </div>
                <div className="footer_1_2">
                    <p>多啦C梦a</p>
                    <p style={{fontSize:'12px'}}>前端开发工程师</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainLayout