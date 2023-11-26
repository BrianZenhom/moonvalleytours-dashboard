import Pagination from '@/app/ui/dashboard/pagination/pagination';
import Search from '@/app/ui/dashboard/search/search';
import { DeleteIcon, EditIcon } from '@/app/ui/dashboard/sidebar/icons/icons';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/ui/dashboard/tours/tours.module.css';

const ToursPage = () => {
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
            <td>Duration</td>
            <td>Included</td>
            <td>Not Included</td>
            <td>Cancel</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.tourName}>
              <div className={styles.tours}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width="150"
                  height="50"
                  className={styles.toursImage}
                />
                <span className={styles.title}>
                  Pyramids of Giza, Memphis and Saqqara
                </span>
              </div>
            </td>
            <td>Cairo</td>
            <td className={styles.price}>&euro; 54.99</td>
            <td className={styles.description}>
              <div className={styles.hidden}>
                <span className={styles.textdescription}>
                  Fall in love with Egypt on this excursion to the Giza
                  pyramids, the Saqqara necropolis and Memphis, once the capital
                  of the country. Our Egyptology expert will take you back
                  almost 5,000 years to the land of the pharaohs...
                </span>
              </div>
            </td>
            <td className={styles.duration}>8 hours.</td>
            <td>Create Tags</td>
            <td>Create Tags</td>
            <td>Yes</td>
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
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ToursPage;
