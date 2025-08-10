import SearchBox from '@/components/SearchBox'
import {
  Swiper,
  Image,
  Tabs,
  Grid,
  GridItem,
  Button,
  Search,
} from 'react-vant'
import {
  Qr,
  LikeO,
  FlowerO,
  MusicO,
} from '@react-vant/icons'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useImageStore } from '@/store/useImageStore'
import Waterfall from '@/components/Waterfall'
import styles from './home.module.css'

const Home = () => {
  const { loading, images, fetchMore } = useImageStore()
  fetchMore()

  useEffect(() => {
    console.log(images, 'demo')
  }, [])

  const gridData = [
    { icon: <Qr />, text: '全部内容' },
    { icon: <LikeO />, text: '情绪管理' },
    { icon: <FlowerO />, text: '放松减压' },
    { icon: <MusicO />, text: '能量提升' },
  ]
  const navigate = useNavigate()
  const goSearch = () => {
    console.log('跳转到搜索页面') // 添加调试日志
    navigate('/search')
  }

  return (
    <div className={styles.homeContainer}>
      {/* 顶部搜索框 */}
      <div className={styles.searchBar} onClick={goSearch} style={{ cursor: 'pointer' }}>
        <Search
          shape="round"
          placeholder="搜索冥想/音乐/放松技巧"
          // 移除onClick，改为在父容器上绑定点击事件
        />
      </div>

      {/* 轮播 */}
      <Swiper autoplay={3000} loop className={styles.banner}>
        <Swiper.Item>
          <div className={styles.bannerItem}>🌿 放松你的心</div>
        </Swiper.Item>
        <Swiper.Item>
          <div className={styles.bannerItem}>🎵 音乐伴你冥想</div>
        </Swiper.Item>
        <Swiper.Item>
          <div className={styles.bannerItem}>☀️ 每天更好一点</div>
        </Swiper.Item>
      </Swiper>

      {/* 分类宫格 */}
      <Grid columns={4} border={false} className={styles.gridContainer}>
        {gridData.map((item, index) => (
          <GridItem
            key={index}
            icon={item.icon}
            text={item.text}
            iconStyle={{ fontSize: '26px', color: '#8c6cff' }}
          />
        ))}
      </Grid>

      {/* 内容推荐 */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>冥想内容推荐</h2>
        <Waterfall images={images} fetchMore={fetchMore} loading={loading} />
      </div>
    </div>
  )
}

export default Home
