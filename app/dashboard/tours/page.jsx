import Pagination from '@/app/ui/dashboard/pagination/pagination';
import Search from '@/app/ui/dashboard/search/search';
import { DeleteIcon, EditIcon } from '@/app/ui/dashboard/sidebar/icons/icons';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/ui/dashboard/tours/tours.module.css';

const ToursPage = async () => {
  const res = await fetch('https://moonvalleytours-api.1.ie-1.fl0.io/tours');
  const data = await res.json();

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for tours in City..." />
        <Link href="/dashboard/tours/add">
          <button className={`${styles.ripple} ${styles.addButton}`}>
            Add Tour
          </button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Tours</td>
            <td>City</td>
            <td>Price</td>
            <td>Description</td>
            <td>Included</td>
            <td>Not Included</td>
            <td>Free Cancel</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((tour) => (
            <>
              <tr key={tour.tour}>
                <td className={styles.tourName}>
                  <div className={styles.tours}>
                    <Image
                      src={tour?.tour_image}
                      alt=""
                      width="150"
                      height="50"
                      className={styles.toursImage}
                    />
                    <span className={styles.title}>{tour?.tour}</span>
                  </div>
                </td>
                <td>{tour?.city}</td>
                <td className={styles.price}>&euro; {tour?.tour_price}</td>
                <td className={styles.description}>
                  <div className={styles.hidden}>
                    <span className={styles.textdescription}>
                      {tour?.tour_description}
                    </span>
                  </div>
                </td>
                <td>Create Tags</td>
                <td>Create Tags</td>
                <td>{tour?.free_cancellation === 1 ? 'Yes' : 'No'}</td>
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

export default ToursPage;
