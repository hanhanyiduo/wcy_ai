import { 
    useEffect 
} from 'react'

function useTitle(title) {
    // useEffect(() => {
        document.title = title // 页面标题
    // }, [title])
}

export default useTitle