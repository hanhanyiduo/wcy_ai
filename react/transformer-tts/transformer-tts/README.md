# React Transformer TextToSpeech

- transformer
    transformer.js JS AI 机器学习库
    来自于huggingface 全球最大开源大模型社区
    将模型下载到浏览器端，JS 开发者的智能战场未来
- 项目的亮点
    - 使用transformer.js 的 端模型
    - 使用Tailwindcss 原子css 几乎不需要写样式了
        类名文档语义很好，特别适合 AI生成
        高效解决适配 w-full + max-w-xl
    - webworker nlp 任务
        1. 延迟加载大模型
        2. 在现实组件后再实例化worker 性能好
        3. 卸载时移除事件 
    - 封装组件
        
- 项目的难点
    - 单例模式封装 MyTextToSpeechPipeline
    - getInstance 只实例化一次
    - 懒执行 
    - promise.all + nlp 流程的理解 （tokenizer + model + vocoder）

- audio 标签的url <- Object.createObjectURL(Blob)  <- 二进制数据位 <- ttsModel 生成
 <- input_ids(tokenizer 分词 )  + speaking_enbedding + vocoder(合成器)  <- tokenizer + speaking
    - blob 是一个二进制文件
    - object.createObjectURL 根据文件返回一个本地浏览的可以临时访问的地址
    - 大模型不负责给你全局访问的地址

