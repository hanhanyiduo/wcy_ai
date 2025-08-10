import { Toast, Button, Tag, Empty, Dialog } from 'react-vant';
import { AddO, Replay } from '@react-vant/icons';
import styles from './habit.module.css';
import useHabitStore from '@/store/useHabitStore';
import { useSloganStore } from '@/store/useSloganStore';
import useTitle from '@/hooks/useTitle';

const Habit = () => {
  useTitle('习惯爱好');
  const { fetchSlogan, loading, slogan } = useSloganStore();
  const { habits, addHabit, toggleHabit } = useHabitStore();

  // 添加习惯
  const handleAddHabit = async () => {
    try {
      const name = await Dialog.prompt({
        title: '添加习惯',
        message: '请输入你想养成的习惯：',
        confirmButtonText: '添加',
        cancelButtonText: '取消',
      });
      if (name && name.trim()) {
        addHabit(name.trim());
      } else {
        Toast.fail('习惯名称不能为空哦～');
      }
    } catch (e) {
      // 用户取消或关闭弹窗不做操作
    }
  };

  // 更新 slogan
  const handleSlogan = async () => {
    await fetchSlogan();
  };

  // 打卡习惯，只允许从未完成变为已完成，已完成不可反选
  const handleCheckIn = (id) => {
    const habit = habits.find((h) => h.id === id);
    if (habit && !habit.checked) {
      toggleHabit(id);
      Toast.success('打卡成功，继续加油哦！ ✨');
    }
  };

  return (
    <div className={styles.home}>
      {/* 顶部欢迎语 */}
      <div className={styles.header}>
        <h2>Hi 👋 今天过得还好吗？</h2>
        <p>以下是你设定的自律习惯，开始打卡吧～</p>
      </div>

      {/* 添加习惯按钮 */}
      <div className={styles.addBtnWrap}>
        <Button icon={<AddO />} type="primary" size="small" round onClick={handleAddHabit}>
          添加习惯
        </Button>
      </div>

      {/* 今日习惯列表 */}
      <div className={styles.habitList}>
        <h3 className={styles.subTitle}>✅ 今日习惯</h3>
        {habits.length === 0 ? (
          <Empty description="暂无习惯，快来添加一个吧～" />
        ) : (
          habits.map((habit) => (
            <div key={habit.id} className={styles.habitItem}>
              <span>{habit.name}</span>
              {habit.checked ? (
                <Tag type="success" round>
                  已完成
                </Tag>
              ) : (
                <Button size="mini" type="primary" onClick={() => handleCheckIn(habit.id)}>
                  打卡
                </Button>
              )}
            </div>
          ))
        )}
      </div>

      <div className={styles.slogan}>
        {loading ? '生成中...' : slogan}
        <div className={styles.change}>
          <Button icon={<Replay />} size="small" onClick={handleSlogan}></Button>
        </div>
      </div>
    </div>
  );
};

export default Habit;
