/**
 * chat 聊天
 * 
 */
const DEEPSEEK_CHAT_API_URL = 'https://api.deepseek.com/chat/completions';
const KIMI_CHAT_API_URL = 'https://api.moonshot.cn/v1/chat/completions'
// console.log(process.env.VITE_DEEPSEEK_API_KEY, '------');
export const chat = async (
    messages,
    api_url=DEEPSEEK_CHAT_API_URL,
    api_key=import.meta.env.VITE_DEEPSEEK_API_KEY,
    model='deepseek-chat'
) => {
    try {
        const response = await fetch(api_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${api_key}`
            },
            body: JSON.stringify({
                model,
                messages,
                stream: false,
            })
        })
        const data = await response.json();
        return {
            code: 0,
            data: {
                role: 'assistant',
                content: data.choices[0].message.content
            }
            
        }
    } catch(err) {
        return {
            code: 1,
            msg: '出错了...'
        }
   } 
}

export const kimiChat = async (messages) => {
    const res = await chat(
        messages,
        KIMI_CHAT_API_URL,
        import.meta.env.VITE_KIMI_API_KEY,
        'moonshot-v1-auto'
    )
    return res;
}

export const generateSlogan = async () => {
    // 设计prompt
const prompt = `
你是一位专注于“反焦虑”与“自我激励”的文案创作者，风格温暖、真诚、有力量。
创作一条个性化的短句，用于鼓励用户在焦虑时坚持自己的习惯或目标。
✦ 写作要求：
- 语言走心，避免空泛鸡汤，适合贴在个人日记或习惯打卡 App 中；
- 尽量原创、有设计感，有意象、有节奏感；
- 字数控制在 10-20 字之间；
- 不使用“你要加油”这类直白口语，而是用意境化表达；

✦ 输出格式：{text}
只返回一句文案，不需要其他解释或引导语。
`
const messages = [{
    role: 'user',
    content: prompt
}]
const res = await kimiChat(messages);
if (res.code === 0) {
    return res.data.content;
}
return '';
}
export const generateAvatar = async (text) => {
    // 设计prompt
    const prompt =  `
    你是一位漫画设计师，需要为用户设计头像，主打奶龙风格。
    用户的信息是${text}
    要求有个性，有设计感。
    `
}