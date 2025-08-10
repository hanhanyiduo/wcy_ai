import { useState } from 'react';
import styles from './Diary.module.css';
import useTitle from '@/hooks/useTitle'

const Diary = () => {
  useTitle('情绪日记')
  const [date, setDate] = useState(() => {
    // 默认今天日期，格式 yyyy-mm-dd
    const now = new Date();
    return now.toISOString().slice(0, 10);
  });
  const [content, setContent] = useState('');
  const [entries, setEntries] = useState([]);

  const handleSave = () => {
    if (!content.trim()) {
      alert('请输入日记内容');
      return;
    }
    const newEntry = { date, content };
    setEntries([newEntry, ...entries]);
    setContent('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>情绪日记</h2>

      <div className={styles.inputGroup}>
        <label htmlFor="date" className={styles.label}>日期</label>
        <input
          id="date"
          type="date"
          className={styles.input}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="content" className={styles.label}>今天的心情</label>
        <textarea
          id="content"
          className={styles.textarea}
          placeholder="写下你今天的心情吧..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <button className={styles.saveButton} onClick={handleSave}>
        保存日记
      </button>

      <div className={styles.entries}>
        {entries.length === 0 && <p className={styles.noEntry}>暂无日记，快写下你的第一篇吧！</p>}
        {entries.map(({ date, content }, index) => (
          <div key={index} className={styles.entry}>
            <div className={styles.entryDate}>{date}</div>
            <div className={styles.entryContent}>{content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diary;
