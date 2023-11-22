import { CopyrightIcon } from '../sidebar/icons/icons';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>MoonValleyTours</div>
      <div className={styles.text}>
        <CopyrightIcon size="13" /> All rights reserved.
      </div>
    </div>
  );
}
