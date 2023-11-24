import Pagination from '@/app/ui/dashboard/pagination/pagination';
import Search from '@/app/ui/dashboard/search/search';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/ui/dashboard/cities/cities.module.css';
import { DeleteIcon, EditIcon } from '@/app/ui/dashboard/sidebar/icons/icons';

const CitiesPage = async () => {
  const res = await fetch('https://moonvalleytours-api.1.ie-1.fl0.io/cities');
  const data = await res.json();

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a City..." />
        <div className={styles.addNewButtons}>
          <Link href="/dashboard/countries/add">
            <button className={styles.addButton}>Add Country</button>
          </Link>
          <Link href="/dashboard/cities/add">
            <button className={styles.addButton}>Add City</button>
          </Link>
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>City</td>
            <td>Country</td>
            <td>Tours</td>
            <td>Travellers</td>
            <td>Rate</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((city) => (
            <>
              <tr>
                <td>
                  <div className={styles.user}>
                    <Image
                      src={city.city_image}
                      alt=""
                      width="150"
                      height="60"
                      className={styles.userImage}
                    />
                    <span className={styles.title}>{city.city}</span>
                  </div>
                </td>
                <td>{city.country}</td>
                <td>0</td>
                <td>0</td>
                <td>10/10</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href="">
                      <button
                        className={`${styles.button} ${styles.view} ${styles.ripple}`}
                      >
                        <EditIcon size="20" />
                      </button>
                    </Link>
                    <Link href="">
                      <button className={`${styles.button} ${styles.delete} `}>
                        <DeleteIcon size="20" />
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default CitiesPage;
