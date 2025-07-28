import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className="main-layout">
      {/* 这里添加公共导航栏、页脚等 */}
      <Outlet />
    </div>
  )
}