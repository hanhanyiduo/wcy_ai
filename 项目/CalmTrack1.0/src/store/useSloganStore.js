import { create } from 'zustand';
import { generateSlogan } from '@/llm';

export const useSloganStore = create((set) => ({
  slogan: '“每一个坚持的瞬间，都是给未来的自己一点掌声。”',
  loading: false,

  fetchSlogan: async () => {
    set({ loading: true }); // 设置 loading 开始
    try {
      const newSlogan = await generateSlogan();
      set({ slogan: newSlogan });
    } catch (error) {
      console.error('生成 Slogan 失败:', error);
      set({ slogan: '🌧️ 今天的灵感似乎掉线了，再试一次吧。' });
    } finally {
      set({ loading: false }); // 设置 loading 结束
    }
  },
}));
