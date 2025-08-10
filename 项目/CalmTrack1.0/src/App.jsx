import './App.css'
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import {
  Suspense,
  lazy,
} from 'react'
import MainLayout from './components/MainLayout'
import BlankLayout from './components/BlankLayout'
import Loading from './components/Loading'
// import RequireAuth from './pages/RequireAuth'
const Login = lazy(() => import('./pages/Login'))
const Home = lazy(() => import('./pages/Home'))
const Diary = lazy(() => import('./pages/Diary'))
const Habit = lazy(() => import('./pages/Habit'))
const Assistant = lazy(() => import('./pages/Assistant'))
const Account = lazy(() => import('./pages/Account'))
const Search = lazy(() => import('./pages/Search'))
const OfficialRecommend = lazy(() => import('./pages/home_catagories/OfficialRecommend'))
const MostPopular = lazy(() => import('./pages/home_catagories/MostPopular'))
// const RequireAuth = lazy(() => import('./pages/RequireAuth'))

function App() {
  return (
  <>
   <Suspense fallback={<Loading />}>   
   {/* 带底部导航的页面（嵌套路由） */}
    <Routes>
      <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} /> 
            <Route path="/home/official-recommend" element={<OfficialRecommend />} />
            <Route path="/home/most-popular" element={<MostPopular />} />
        {/* <Route element={<RequireAuth />}> */}
          <Route path="/diary" element={<Diary />} />
          <Route path="/habit" element={<Habit />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/account" element={<Account />} />
        </Route>
      {/* </Route>   */}
    {/* 不带底部导航的页面（登录页） */}  
      <Route element={<BlankLayout />}>
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
   </Suspense>
  </>
  )
}
export default App
