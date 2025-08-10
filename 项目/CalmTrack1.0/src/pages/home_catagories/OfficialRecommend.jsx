// import { NavBar, Button, Tabs, Image } from 'react-vant';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import useOfficialRecommendStore from '@/store/useOfficialRecommendStore';

// const OfficialRecommend = () => {
//   const navigate = useNavigate();
//   const {
//     data: officialList,
//     isLoading,
//     error,
//     fetchOfficialRecommend
//   } = useOfficialRecommendStore();

//   // 页面加载时请求数据
//   useEffect(() => {
//     if (officialList.length === 0) {
//       fetchOfficialRecommend();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [officialList.length]);

//   return (
//     <div style={{ paddingTop: '46px', minHeight: '100vh' }}>
//       {/* 固定导航栏 */}
//       <NavBar
//         title="官方推荐"
//         leftArrow
//         onClickLeft={() => navigate('/home')}
//         style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10 }}
//       />

//       <div style={{ padding: '16px' }}>
//         <h2>官方推荐内容列表</h2>

//         <Tabs defaultActive="official">
//           <Tabs.TabPane title="官方推荐" name="official">
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//               <h3>官方精选内容</h3>
//               <Button
//                 type="text"
//                 onClick={() => navigate('/home/official-recommend')}
//               >
//                 查看全部
//               </Button>
//             </div>

//             {isLoading && <p>加载中...</p>}
//             {error && !isLoading && <p>加载失败：{error}</p>}

//             {!isLoading && !error && (
//               <div
//                 style={{
//                   display: 'grid',
//                   gridTemplateColumns: 'repeat(2, 1fr)',
//                   gap: '15px'
//                 }}
//               >
//                 {officialList.map(item => (
//                   <div
//                     key={item.id}
//                     style={{
//                       border: '1px solid #f0f0f0',
//                       borderRadius: '8px',
//                       overflow: 'hidden',
//                       backgroundColor: '#fff'
//                     }}
//                     onClick={() => navigate(`/play/${item.id}`)}
//                   >
//                     <Image
//                       src={item.cover}
//                       alt={item.title}
//                       fit="cover"
//                       style={{ width: '100%', height: '150px' }}
//                     />
//                     <div style={{ padding: '8px' }}>
//                       <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>{item.title}</p>
//                       <p style={{ fontSize: '12px', color: '#888' }}>
//                         {item.teacher} · {item.duration}分钟
//                       </p>
//                       <p style={{ fontSize: '12px', color: '#888' }}>
//                         {item.tags.join(' · ')}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </Tabs.TabPane>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default OfficialRecommend;
