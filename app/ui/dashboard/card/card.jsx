import { AdminIcon } from '../sidebar/icons/icons';
import styles from './card.module.css';

export default function Card() {
  return (
    <div className={styles.container}>
      <AdminIcon size="20" />
      <div className={styles.text}>
        <span className={styles.title}>Total users</span>
        <span className={styles.number}>1,000</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12%</span> more than previous week
        </span>
      </div>
    </div>
  );
}
