import { deleteCountry } from '@/app/lib/actions';
import styles from '@/app/ui/dashboard/countries/countries.module.css';
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import Search from '@/app/ui/dashboard/search/search';
import { DeleteIcon, EditIcon } from '@/app/ui/dashboard/sidebar/icons/icons';
import Image from 'next/image';
import Link from 'next/link';

const CountriesPage = async () => {
  const res = await fetch('https://moonvalleytours-api.1.ie-1.fl0.io/');
  const data = await res.json();

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a Country..." />
        <div className={styles.addNewButtons}>
          <Link href="/dashboard/countries/add">
            <button className={styles.addButton}>Add Country</button>
          </Link>
          <Link href="/dashboard/cities">
            <button className={styles.addButton}>Add City</button>
          </Link>
        </div>
      </div>
      <div className={styles.grid}>
        {data.map((item) => (
          <div key={item.country} className={styles.card}>
            <div className={styles.user}>
              <Image
                src={item.country_image}
                alt=""
                width="180"
                height="120"
                className={styles.userImage}
              />
              <div className={styles.title}>
                <h2>{item.country}</h2>
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
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default CountriesPage;
