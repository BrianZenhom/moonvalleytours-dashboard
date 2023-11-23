import styles from '@/app/ui/dashboard/countries/countries.module.css';
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import Search from '@/app/ui/dashboard/search/search';
import { DeleteIcon, EditIcon } from '@/app/ui/dashboard/sidebar/icons/icons';
import Image from 'next/image';
import Link from 'next/link';

const CountriesPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a Country..." />
        <div className={styles.addNewButtons}>
          <Link href="/dashboard/country/add">
            <button className={styles.addButton}>Add Country</button>
          </Link>
          <Link href="/dashboard/cities">
            <button className={styles.addButton}>Add City</button>
          </Link>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.user}>
            <Image
              src="/noavatar.png"
              alt=""
              width="180"
              height="120"
              className={styles.userImage}
            />
            <div className={styles.title}>
              <h2>EGYPT</h2>
            </div>
            <div className="footer">
              <div className={styles.buttons}>
                <Link href="">
                  <button className={`${styles.button} ${styles.edit}`}>
                    <EditIcon size="15" />
                  </button>
                </Link>
                <Link href="">
                  <button className={`${styles.button} ${styles.delete}`}>
                    <DeleteIcon size="15" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default CountriesPage;
