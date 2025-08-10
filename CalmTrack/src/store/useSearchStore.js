// search 全局共享状态
import {
    create
} from 'zustand'
  import {
    getSuggestList,
    getHotList
  } from '@/api/search'
  
const useSearchStore = create((set, get) => {
    // get  读操作
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || []
    return{
        searchHistory,
        suggestList: [], // suggest 返回 list
        hotList: [], // hot 返回 list
        setSuggestList: async (keyword) => {
        try {
            const res = await getSuggestList(keyword);
            console.log(res);
            // 确保 res.data 是数组
            set({
                suggestList: Array.isArray(res.data) ? res.data : []
            });
        } catch (error) {
            console.error('获取搜索建议失败:', error);
            set({
                suggestList: []
            });
        }
        },
        setHotList: async () => {
            try {
                const res = await getHotList();
                console.log(res);
                // 确保 res.data 是数组
                set({
                    hotList: Array.isArray(res.data) ? res.data : []
                });
            } catch (error) {
                console.error('获取热门列表失败:', error);
                set({
                    hotList: []
                });
            }
        }
    }
})


  
export default useSearchStore