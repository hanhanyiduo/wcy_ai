// import Mock from 'mockjs';

// // 简化版官方推荐数据
// const officialRecommendData = Mock.mock({
//   code: 200,
//   message: 'success',
//   data: {
//     'list|6': [
//       {
//         'id|+1': 1001, // 唯一 ID
//         'title': '@ctitle(5, 10)', // 标题（5-10 字中文）
//         'cover': "@image('400x300', @color, '冥想')", // 封面图
//         'duration': '@integer(5, 60)', // 时长（分钟）
//         'teacher': '@cname', // 导师名
//         'tags|1-2': ['减压', '助眠', '专注', '正念'] // 标签数组
//       }
//     ]
//   }
// });

// // 定义接口（统一使用 /api 路径）
// Mock.mock('/api/official-recommend', 'get', () => {
//   return officialRecommendData;
// });

// export default officialRecommendData;
