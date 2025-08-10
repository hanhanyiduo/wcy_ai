import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='max-w-xs rounded-lg overflow-hidden bg-white transition-transfrom duration-300 hover:shadow-xl hover:scale-105 max-auto'>
      {/* AI 语义 */}
      {/* <h1 className='text-3xl font-bold underline '>hello world,tailwindcss</h1>   */}
      <div className='relative'>
        <img 
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e" 
        alt=""
        className='w-full h-64 object-cover'
         />
         <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
          <button className='absolute top-2 right-2 text-gray-500 hover:text-red-500 transition-colors'>
            {/* 矢量图， 数学形状来画图，支持无限的放大，不会模糊，区别于像素图片 */}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
      </div>
      <div className='p-4'>
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          Premium Wireless Headphones
        </h3>
      </div>
    </div>
  )
}

export default App
