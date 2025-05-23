# 机器学习
- notebookllm
 你不知道的JavaScript 深入学习
 AI 播客

 - modelscope
 阿里开源大模型社区

 python notebook
 ipynb 后缀
 nlp 机器学习文档格式

 - python 
 nlp机器学习第一语言
 js 也挺好

 - 引入了pipeline 模块
 model 中国第一大模型社区
  魔搭
  from modelscope.pipelines import pipeline  // 先引入pipeline 模块
  from modelscope.utils.constant import Tasks // 引入Tasks 模块 任务类型


  semantic_cls = pipeline(Tasks.text_classification,  // 任务类型
  'damo/nlp_structbert_sentiment-classification_chinese-base')      // 加载模型

result = semantic_cls(input='胡老板nb') // 输入文本
print(result) // 输出结果
 