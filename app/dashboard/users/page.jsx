import Search from '@/app/ui/dashboard/search/search';
import styles from '@/app/ui/dashboard/users/users.module.css';
import Image from 'next/image';
import Link from 'next/link';

const UsersPage = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Created at</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>Jhon Doe</div>
            </td>
            <td>JhonDoe@testuser.com</td>
            <td>+34641995548</td>
            <td>22 april 2024</td>
            <td>Active</td>
            <td>
              <Link href="/">
                <button className={`${styles.button}${styles.view}`}>
                  View
                </button>
              </Link>
              <Link href="/">
                <button className={`${styles.button}${styles.delete}`}>
                  View
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
