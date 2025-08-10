import { useRef } from 'react';
import { useUserStore } from '@/store/useUserStore';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';
import {Button} from 'react-vant'
import { ArrowLeft } from '@react-vant/icons'

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { login } = useUserStore();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    if (!username || !password) {
      alert('请输入用户名或密码');
      return;
    }

    login({ username, password });
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <Button 
      className={styles.backButton} 
      type='primary' 
      size='small'
      round 
      icon={<ArrowLeft />} 
      onClick={() => navigate('/')} />
      <div className={styles.loginBox}>
        <h1 className={styles.title}>CalmTrack</h1>
        <p className={styles.slogan}>记录每一个温柔努力的你</p>
        <form onSubmit={handleLogin} className={styles.form}>
          <input
            type="text"
            placeholder="用户名"
            ref={usernameRef}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="密码"
            ref={passwordRef}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            登录
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
