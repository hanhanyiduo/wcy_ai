import styles from './new.module.css';
import {
    useState,
    useRef
} from 'react'
const ArticleNew = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState("");
    const handleStartRecording = () => {}
    const handleStopRecording = () => {}
    const handleSvaeDraft = () => {}
    const handlePublish = () => {}
    return (
        <div className={styles.container}>
            <h2>发表文章</h2>
            <input 
                type="text" 
                placeholder="请输入标题"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <div className={styles.textareaWrapper}>
                <textarea
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="请输入内容"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                >
                </textarea>
                <button
                    className={styles.micButton}
                    onMouseDown={handleStartRecording}
                    onMouseUp={handleStopRecording}
                    title="按住录音"
                >
                🎤
                </button>
            </div>
            <div className={styles.buttonGroup}>
                <button 
                onClick={handleSvaeDraft}
                className={`${styles.button} ${styles.save}`}>保存草稿</button>
                <button 
                onClick={handlePublish}
                className={`${styles.button} ${styles.publsh}`}>发布</button>
            
            </div>
        </div>
    )
}
export default ArticleNew