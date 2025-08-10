// import { create } from 'zustand';
// import { getOfficialRecommend } from '@/api/home';

// const useOfficialRecommendStore = create((set, get) => ({
//   data: [], // 数据列表
//   isLoading: false,
//   error: null,

//   // 请求官方推荐
//   fetchOfficialRecommend: async () => {
//     if (get().isLoading) return;

//     try {
//       set({ isLoading: true, error: null });
//       const response = await getOfficialRecommend();

//       if (response.data.code === 200) {
//         set({
//           data: response.data.data.list,
//           isLoading: false
//         });
//       } else {
//         throw new Error(response.data.message || '获取官方推荐数据失败');
//       }
//     } catch (err) {
//       set({
//         error: err.message || '网络错误，获取数据失败',
//         isLoading: false
//       });
//       console.error('请求官方推荐数据出错：', err);
//     }
//   },

//   // 根据 ID 获取单条数据
//   getOneById: (id) => {
//     return get().data.find(item => item.id === id) || null;
//   },

//   // 清空数据
//   clearData: () => {
//     set({ data: [], error: null });
//   }
// }));

// export default useOfficialRecommendStore;
