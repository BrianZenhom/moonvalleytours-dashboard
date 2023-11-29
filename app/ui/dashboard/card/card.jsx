import { AdminIcon } from '../sidebar/icons/icons';
import styles from './card.module.css';

export default function Card({ desc, amount, quantity }) {
  return (
    <div className={styles.container}>
      <AdminIcon size="20" />
      <div className={styles.text}>
        <span className={styles.title}>Total {desc}</span>
        <span className={styles.number}>{amount}</span>
        <span className={styles.detail}>
          <span className={styles.positive}>{quantity}% more</span> than
          previous week
        </span>
      </div>
    </div>
  );
}
