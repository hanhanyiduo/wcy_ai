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
import Waterfall from '@/components/Waterfall'
import { useEffect, useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom';
// import OfficialRecommend from '@/pages/home_catagories/OfficialRecommend'

const Home = () => {
    const gridData = [
    { icon:<Qr  /> , text: '全部内容' },
    { icon: <LikeO  />, text: '情绪管理' },
    { icon: <FlowerO  />, text: '放松减压' },
    { icon: <MusicO  />, text: '能量提升' },
  ];
   const navigate = useNavigate();
  //从Zustand获取数据
  const goSearch = (query) => {
    navigate('/search');
  }


    return (
      <div>
      {/* 顶部搜索框 */}
      <div style={{ padding: '10px', background: '#fff' }}>
        <Search
          shape="round"
          placeholder="搜索目的地/攻略"
          onClick={goSearch} // 点击整个输入框区域跳转
        />
      </div>
        <Swiper autoplay={3000} loop>
           <Swiper.Item>轮播 1</Swiper.Item>
           <Swiper.Item>轮播 2</Swiper.Item>
           <Swiper.Item>轮播 3</Swiper.Item>
        </Swiper>
         <Grid columns={4} border={false} style={{ padding: '0 12px' }}>
        {gridData.map((item, index) => (
          <GridItem 
            key={index} 
            icon={item.icon} 
            text={item.text}
            iconStyle={{ fontSize: '24px', color: '#722ed1' }}
          />
        ))}
      </Grid>
        <div>
        
      <h2>冥想内容推荐</h2>
      <Waterfall />

    </div>
 </div>
      

    )
}
export default Home
