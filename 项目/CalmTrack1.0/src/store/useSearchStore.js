// search 全局共享状态
import { create } from 'zustand'
import { getSuggestList, getHotList } from '@/api/search'

const useSearchStore = create((set, get) => {
  const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || []

  return {
    searchHistory,
    suggestList: [],
    hotList: [],
    loading: false, // 新增 loading 状态

    // 获取搜索建议
    setSuggestList: async (keyword) => {
      // 输入为空时直接清空建议
      if (!keyword) {
        set({ suggestList: [], loading: false })
        return
      }

      // 输入变化时立即清空旧建议 & 开启 loading
      set({ suggestList: [], loading: true })

      try {
        const res = await getSuggestList(keyword)
        set({
          suggestList: Array.isArray(res.data.data) ? res.data.data : [],
          loading: false
        })
      } catch (error) {
        console.error('获取搜索建议失败:', error)
        set({ suggestList: [], loading: false })
      }
    },

    // 获取热门列表
    setHotList: async () => {
      try {
        const res = await getHotList()
        set({
          hotList: Array.isArray(res.data.data) ? res.data.data : []
        })
      } catch (error) {
        console.error('获取热门列表失败:', error)
        set({ hotList: [] })
      }
    }
  }
})

export default useSearchStore
