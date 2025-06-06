// js 主动的去拉取http 接口
// web 1.0 时代 html//css/js 服务器端 比如java 返回的 js 只做简单的交互
// web 2.0 时代 js 主动地请求后端服务器 动态页面  
/*fetch('https://api.github.com/users/hanhanyiduo/repos')
 .then(res => res.json()) // 解析响应为 JSON 格式
 .then(data => {
    console.log(data);
    document.querySelector('#reply').innerHTML += data.map(repo=> `
    <ul>
      <li>
         ${repo.name}
      </li>
    </ul>
    `
    ).join('')
 })*/
// 当LLM API 服务
// chat 方式 AIGC 生成/完成 返回的内容
// 由 openai 制定的
// 请求行
const  endpoint = "https://api.deepseek.com/chat/completions"
// 请求头
const headers = {
  // 内容类型
  'Content-Type': 'application/json',
  // 授权
  Authorization: `Bearer sk-e7709b81295040e4b166de99c4718a1f`
}
// 请求体
const payload = {
  model: 'deepseek-chat',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.'},
    { role:'user', content: '你好 Deepseek'}
  ]
}

fetch(endpoint, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(payload)
}).then(res => res.json())
.then(data => {
  console.log(data);
  document.querySelector('#reply').innerHTML 
    = data.choices[0].message.content
})
