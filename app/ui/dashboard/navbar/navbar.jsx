'use client';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';
import { ChatIcon, NotisIcon, SearchIcon } from '../sidebar/icons/icons';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.container}>
      <div className={styles.title}>{pathname.split('/').pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <label className={styles.label}>
            <SearchIcon size="25" />
            <input
              type="text"
              placeholder="Search..."
              className={styles.input}
            ></input>
          </label>
        </div>
        <div className={styles.icons}>
          <ChatIcon size="25" />
          <NotisIcon size="25" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
