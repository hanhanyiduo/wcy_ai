// src/store/useUserStore.js
import { create } from 'zustand';
import { doLogin } from '../api/user';

export const useUserStore = create((set) => ({
  user: null, // 用户信息
  isLogin: !!localStorage.getItem('token'), // ✅ 初始化就根据 localStorage 设置登录状态

  login: async ({ username = "", password = "" }) => {
    const res = await doLogin({ username, password });
    const { token, data: user } = res.data;

    localStorage.setItem('token', token); // 保存 token
    set({
      user,
      isLogin: true,
    });
  },
  logout: () => {
    localStorage.removeItem('token');
    set({
      user: null,
      isLogin: false,
    });
  }
}));
