import {
  embed,
  streamText
} from 'ai';
import {
  createOpenAI
} from '@ai-sdk/openai';
import {
  createClient
} from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL??"",
  process.env.SUPABASE_KEY??""
);

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_API_BASE_URL,
})

async function generateEmbedding(message: string) {
  return embed({
    model: openai.embedding('text-embedding-3-small'),
    value: message
  })
}

async function fetchRelevantContext(embedding: number[]) {
  const {
    data, 
    error
  } = await supabase.rpc("get_relevant_chunks", {
    query_vector: embedding,
    match_threshold: 0.7,
    match_count: 5
  })

  if (error) throw error;
  // console.log(data, '////////////////')
  return JSON.stringify(
    data.map((item:any) => `
      Source: ${item.url},
      Date Updated: ${item.date_updated}
      Content: ${item.content}  
    `)
  ) 
}

const createPrompt = (context: string, userQuestion: string) => ({
  role: "system",
  content: `
你是 FilmGPT，一名专门回答电影相关问题的 AI 助手，同时可以根据用户的情绪或心情提供电影推荐。

请使用以下上下文信息来回答用户的问题：
----------------
上下文开始
${context}
上下文结束
----------------

回答要求：
1. 请使用中文回答，并以 Markdown 格式输出。
2. 回答中尽量包含：
   - 电影名称
   - 上映年份
   - 导演及主要演员
   - 评分信息（如 IMDb、烂番茄、Metacritic）
   - 获奖情况或重要信息
   - 来源链接和最后更新时间
3. 如果上下文中没有足够信息，可以根据你自己的知识作答，但必须明确提示信息可能不是最新的。
4. 如果用户的问题不直接涉及某部电影，例如：
   - “我心情不好，看什么电影？”
   - “想看一部轻松的电影”
   - “推荐一些适合周末看的电影”
   请礼貌回应，并结合用户的情绪或需求，推荐 2-3 部符合情绪或场景的电影，可以附上电影名称、类型、上映年份和评分。
5. 如果用户的问题与电影无关，也能根据用户的问题进行回答，例如：
   - “我想知道最近上映的电影有哪些？”
   - “推荐一些最新的电影”
   - “我想知道最近上映的动作片有哪些？”
   - “你是谁”
   - “xxx(可以是人名)怎么样”
6. 如果用户给出一些有攻击性的语言，或者是不合法的问题，例如：
   - “你是个坏人”
   - “你是个流氓”
   - “你是个变态”
   请礼貌回应，并拒绝回答。
----------------
回答例子你可以参考这个
**推荐电影：**

1. **肖申克的救赎 (The Shawshank Redemption, 1994)**  
   类型：剧情 / 犯罪  
   IMDb评分：9.3  
   推荐理由：励志故事，讲述希望与自由的力量，让人在低落时获得力量  
   来源：[IMDb](https://www.imdb.com/title/tt0111161/)

2. **美丽人生 (Life is Beautiful, 1997)**  
   类型：剧情 / 喜剧  
   IMDb评分：8.6  
   推荐理由：通过幽默与温情传递积极乐观的生活态度，适合心情低落时观看  
   来源：[IMDb](https://www.imdb.com/title/tt0118799/)

3. **疯狂动物城 (Zootopia, 2016)**  
   类型：动画 / 喜剧 / 冒险  
   IMDb评分：8.0  
   推荐理由：轻松幽默的动画片，适合放松心情  
   来源：[IMDb](https://www.imdb.com/title/tt2948356/)

----------------
用户问题：${userQuestion}
----------------
  `
});


export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const latestMessage = messages.at(-1).content;
    // embedding
    const { embedding } = await generateEmbedding(latestMessage);
    // console.log(embedding);
    // 相似度计算
    const context = await fetchRelevantContext(embedding);//返回的就是一堆数据库里的“知识块”（chunks）
    const prompt = createPrompt(context,latestMessage);
    const result = streamText ({
      model: openai('gpt-4o-mini'),
      messages: [prompt,...messages]
    });
    return result.toDataStreamResponse();
  } catch(err) {
    throw err
  }
}