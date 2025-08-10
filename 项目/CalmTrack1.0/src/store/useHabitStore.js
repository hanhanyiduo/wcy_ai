import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Toast } from 'react-vant';

const useHabitStore = create(
  persist(
    (set, get) => ({
      habits: [
        { id: 1, name: '冥想10分钟', checked: false },
        { id: 2, name: '跑步5km', checked: false },
        { id: 3, name: '好好吃饭', checked: false },
      ],

      // 添加新习惯（去重 + 校验）
      addHabit: (name) => {
        const trimmedName = name.trim();
        if (!trimmedName) {
          Toast.fail('习惯名称不能为空哦～');
          return;
        }
        const exists = get().habits.some(
          (h) => h.name.toLowerCase() === trimmedName.toLowerCase()
        );
        if (exists) {
          Toast.info('这个习惯已经存在啦');
          return;
        }
        set((state) => ({
          habits: [
            ...state.habits,
            { id: Date.now(), name: trimmedName, checked: false },
          ],
        }));
        Toast.success('添加成功');
      },

      // 打卡，只能从 false -> true，true 时不再切换
      toggleHabit: (id) =>
        set((state) => ({
          habits: state.habits.map((habit) =>
            habit.id === id && !habit.checked
              ? { ...habit, checked: true }
              : habit
          ),
        })),

      // 删除习惯
      deleteHabit: (id) =>
        set((state) => ({
          habits: state.habits.filter((habit) => habit.id !== id),
        })),
    }),
    {
      name: 'habit-storage', // 本地存储 key
      getStorage: () => localStorage,
    }
  )
);

export default useHabitStore;
