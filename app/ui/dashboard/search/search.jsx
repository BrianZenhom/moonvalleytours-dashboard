import { SearchIcon } from '../sidebar/icons/icons';
import styles from './search.module.css';

export default function Search({ placeholder }) {
  return (
    <div className={styles.container}>
      <SearchIcon size="20" />
      <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  );
}
