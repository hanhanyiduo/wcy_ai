import { Image, Cell, CellGroup, Toast } from 'react-vant';
import { UserCircleO, SettingO, FireO, Close, MedalO } from '@react-vant/icons';
import { useNavigate } from 'react-router-dom';
import styles from './account.module.css';
import useTitle from '@/hooks/useTitle'
// import useSloganStore from '../store/useSloganStore';
// import { useEffect } from 'react';

const Account = () => {
    useTitle('我的')
    // const slogan = useSloganStore((state) => state.slogan) 
    // const fetchSlogan = useSloganStore((state) => state.fetchSlogan);
    // useEffect(() => {
    //     try {
    //         fetchSlogan();
    //     } catch (error) {
    //         console.error('获取激励语失败:', error);
    //     }
    // }, [fetchSlogan]);
    const navigate = useNavigate();
  // 模拟用户信息
  const nickname = '佘颖欣';
  const avatar = 'https://img2.baidu.com/it/u=1688446372,1722199109&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889';
  const signature = '把焦虑变成前进的力量 ✨';
  const level = 'Lv.99';

  const handleLogout = () => {
    localStorage.removeItem('token');
    Toast.success('退出成功');
    navigate('/login');
  };

  return (
    <div className={styles.account}>
      {/* 顶部粉色背景 */}
      <div className={styles.topBg} />

      {/* 个人卡片 */}
      <div className={styles.profileCard}>
        <Image round width="100px" height="100px" src={avatar} />
        <div className={styles.nickname}>{nickname}</div>
        <div className={styles.signature}>{signature}</div>
        <div className={styles.level}><MedalO style={{ marginRight: 4 }} />{level}</div>
      </div>

      {/* 统计数据 */}
      <CellGroup>
        <Cell title="已打卡" icon={<FireO />} value="12 天" />
        <Cell title="写日记" icon={<UserCircleO />} value="4 篇" />
      </CellGroup>

      {/* AI 激励语 */}
      <div className={styles.motivation}>
        "你是一个有潜力的人，你的潜力是无限的。"
      </div>

      {/* 设置与退出 */}
      <CellGroup>
        <Cell title="设置" icon={<SettingO />} isLink />
        <Cell title="退出登录" icon={<Close />} onClick={handleLogout} />
      </CellGroup>
    </div>
  );
};

export default Account;
