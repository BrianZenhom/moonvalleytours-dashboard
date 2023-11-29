import Card from '../ui/dashboard/card/card';
import Chart from '../ui/dashboard/chart/chart';
import styles from '../ui/dashboard/dashboard.module.css';
import Rightbar from '../ui/dashboard/rightbar/rightbar';
import Transactions from '../ui/dashboard/transactions/transactions';

const Dashboard = async () => {
  const res = await fetch('https://moonvalleytours-api.1.ie-1.fl0.io/');
  const data = await res.json();
  return (
    <article className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card amount="3344" desc="users" quantity="20" />
          <Card amount={data.length} desc="destinations" quantity="0" />
          <Card amount="332" desc="sales" quantity="34" />
        </div>
        <Transactions />
        <Chart />
      </div>
      <aside className={styles.side}>
        <Rightbar />
      </aside>
    </article>
  );
};

export default Dashboard;
