// src/pages/RequireAuth.jsx
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from '@/store/useUserStore';
import { useEffect } from 'react';

const RequireAuth = () => {
  const isLogin = useUserStore((state) => state.isLogin);
  const user = useUserStore((state) => state.user);
  const fetchUser = useUserStore((state) => state.fetchUser);
  const location = useLocation();

  useEffect(() => {
    if (!user && localStorage.getItem('token')) {
      fetchUser();
    }
  }, []);

  if (!isLogin) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
