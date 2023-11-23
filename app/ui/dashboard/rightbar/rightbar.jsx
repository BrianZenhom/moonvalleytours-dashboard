import styles from './rightbar.module.css';

export default function Rightbar() {
  return (
    <aside className={styles.container}>
      <div className={styles.chatbox}></div>
      <form className={styles.textbox}>
        <label>
          <textarea
            placeholder={`Hello Mr ${'Name'} 👋🏽
            
            Thank you for contacting customer support. We will get back to you as soon as posible. 🙂`}
            type="text"
          />
        </label>
        <button>Send</button>
      </form>
    </aside>
  );
}
