"use client";
// hooks 
import { useChat } from '@ai-sdk/react';
import ChatOutput from '@/components/ChatOutput';
import ChatInput from '@/components/ChatInput';

// 定义电影相关接口
export interface Movie {
  id: string;
  title: string;
  poster: string;
  rating: number;
  year: number;
}

export default function Home() {
  // chat llm 业务 抽离
  const {
    input, // 输入框的值
    messages, // 消息列表
    status, // 状态 
    handleInputChange, // 输入框变化
    handleSubmit, // 提交
  } = useChat();
  
  return (
    <div className="min-h-screen flex flex-col film-bg">
      {/* 顶部标题栏 */}
      <header className="w-full bg-primary/95 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none">
                <path d="M18 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 8L12 11L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h1 className="text-2xl font-bold text-white">FilmGPT</h1>
            </div>
            <span className="text-sm text-white/80">电影智能助手</span>
          </div>
        </div>
      </header>

      {/* 主要内容区域 */}
      <main className="flex-1 max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col content-container">
        <div className="space-y-4 mb-4 max-h-[70vh] overflow-y-auto pr-2">
          <ChatOutput messages={messages} status={status} />
        </div>
        <div className="mt-auto pt-2">
          <ChatInput 
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </main>

      {/* 底部区域 */}
      <footer className="w-full py-3 text-center text-sm text-muted-foreground content-container">
        <p>FilmGPT - 您的电影智能助手 | 基于AI技术提供电影资讯和影评</p>
      </footer>
    </div>
  )
}