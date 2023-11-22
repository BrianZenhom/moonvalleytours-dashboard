import styles from './rightbar.module.css';

export default function Rightbar() {
  return (
    <aside className={styles.container}>
      <div className={styles.chatbox}></div>
      <div className={styles.textbox}>
        <input type="text" />
        <button>Send</button>
      </div>
    </aside>
  );
}
