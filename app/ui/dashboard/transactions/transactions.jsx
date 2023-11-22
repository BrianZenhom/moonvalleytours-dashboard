import Image from 'next/image';
import styles from './transactions.module.css';

export default function Transactions() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
            <td>Tour</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Jhon Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>22 Nov 2023</td>
            <td>&euro; 3.920</td>
            <td>
              <div className={styles.tourText}>Giza Pyramidsssss</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Jhon Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.completed}`}>
                Completed
              </span>
            </td>
            <td>22 Nov 2023</td>
            <td>&euro; 3.920</td>
            <td>Giza Pyramids</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Jhon Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>22 Nov 2023</td>
            <td>&euro; 3.920</td>
            <td>Giza Pyramids</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
