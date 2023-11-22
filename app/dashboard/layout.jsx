import Navbar from '../ui/dashboard/navbar/navbar';
import Sidebar from '../ui/dashboard/sidebar/sidebar';
import styles from '../ui/dashboard/dashboard.module.css';
import Footer from '../ui/dashboard/footer/footer';

const Layout = ({ children }) => {
  return (
    <main className={styles.container}>
      <article className={styles.menu}>
        <Sidebar />
      </article>
      <article className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </article>
    </main>
  );
};

export default Layout;
