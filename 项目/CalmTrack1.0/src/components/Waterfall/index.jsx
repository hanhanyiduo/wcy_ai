import styles from './Waterfall.module.css'
import {
    useEffect,
    useRef,
} from 'react';
import ImageCard from '@/components/ImageCard';
import { throttle } from '@/utils/debounce';
const Waterfall = (props) => {
    const loader = useRef(null);
    const {
        loading,
        images,
        fetchMore
    } = props
    useEffect (() => {
        // ref 出现在视窗 intersetctionObserver
        // 观察者模式
        const observer = new IntersectionObserver(([entry],obs) => {
            console.log(entry)
            if (entry.isIntersecting) {
                if(!loading){
                    fetchMore()
                }
            }
        })
        if(loader.current) observer.observe(loader.current)
        return () => observer.disconnect();
    },[fetchMore])

    return (
        <div className={styles.wrapper}>
            <div className={styles.column}>
                {
                    images.filter((_,i) => i%2 === 0).map((img) => (
                      <ImageCard key={img.id} {...img} />
                    ))
                }
            </div>
            <div className={styles.column}>
                {
                    images.filter((_,i) => i%2 === 0).map((img) => (
                      <ImageCard key={img.id} {...img} />
                    ))
                }
            </div>
            <div ref={loader} className={styles.loader}>加载...</div>
        </div>
    )
}
export default Waterfall