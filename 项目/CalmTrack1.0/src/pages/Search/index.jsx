import SearchBox from "@/components/SearchBox";
import useSearchStore from "@/store/useSearchStore";
import styles from './search.module.css'
import {
    useState,
    useEffect,
    memo,
} from 'react'

const HotListItems = memo((props) => {
    
    const {hotList=[]} = props;
    // 确保 hotList 是数组
    if (!Array.isArray(hotList)) {
        return <div className={styles.hotList}>暂无热门推荐</div>;
    }
    return (
        <div className={styles.hotList}>
            <h1>热门推荐</h1>
            {hotList.length > 0 ? (
                hotList.map(item => (
                    <div key={item?.id || item?.city} className={styles.item}>
                        {item?.city || '未知领域'}
                    </div>
                ))
            ) : (
                <p>加载中...</p>
            )}
        </div>
    );
})

const Search = () => {
    const [query, setQuery] = useState('');
    const {
        hotList,
        setHotList,
        suggestList,
        setSuggestList
    } = useSearchStore();
    useEffect(() => {
        setHotList();
    }, [setHotList])
    useEffect(() => {
        console.log(hotList,"demo")
    }, [setHotList])
    // 单向数据流
    // 反复生成 useCallback
    const handleQuery = (query) => {
        console.log('debounce后', query);
        setQuery(query);
        if (!query) {
            return;
        }
        setSuggestList(query); // 这里会调用 store 中的 setSuggestList
    }

    const suggestListStyle = {
        display: query == ""  ? 'none' : 'block'
    }

    return (
       <div className={styles.container}>
        <div className={styles.wrapper}>
         <SearchBox handleQuery={handleQuery} />
         {/* 搜索结果区：如果 query 为空，显示热门推荐，否则显示搜索建议 */}
         {query === "" ? (
      <HotListItems hotList={hotList} />
      ) : (
      <div className={styles.list}>
        {Array.isArray(suggestList) && suggestList.length > 0 ? (
          suggestList.map((item, index) => (
            <div key={index} className={styles.item}>
              {item}
            </div>
          ))
        ) : (
          <p>无搜索建议</p>
        )}
      </div>
    )}
  </div>
</div>
    )
}

export default Search