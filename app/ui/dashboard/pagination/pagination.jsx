import styles from './pagination.module.css';

export default function Pagination() {
  return (
    <div className={styles.container}>
      <button disabled className={styles.button}>
        Previous
      </button>
      <button className={styles.button}>Next</button>
    </div>
  );
}
