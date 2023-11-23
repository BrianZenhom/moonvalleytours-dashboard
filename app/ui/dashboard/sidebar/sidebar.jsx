import Image from 'next/image';
import {
  AdminIcon,
  BillIcon,
  CitiesIcon,
  CountriesIcon,
  GridTwo,
  LogoutIcon,
  ReservationIcons,
  RevenueIcon,
  SettingsIcon,
  ToursIcon,
  TransactionsIcon,
} from './icons/icons';
import MenuLink from './menuLink/menuLink';
import styles from './sidebar.module.css';

const menuList = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <GridTwo />,
      },
      {
        title: 'Reservations',
        path: '/dashboard/reservations',
        icon: <ReservationIcons size="20" />,
      },
      {
        title: 'Countries',
        path: '/dashboard/countries',
        icon: <CountriesIcon />,
      },
      {
        title: 'Cities',
        path: '/dashboard/cities',
        icon: <CitiesIcon />,
      },
      {
        title: 'Tours',
        path: '/dashboard/tours',
        icon: <ToursIcon />,
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <AdminIcon size="20" />,
      },
    ],
  },
  {
    title: 'Analitycs',
    list: [
      {
        title: 'Transactions',
        path: '/dashboard/transactions',
        icon: <TransactionsIcon size="20" />,
      },
      {
        title: 'Revenue',
        path: '/dashboard/revenue',
        icon: <RevenueIcon size="20" />,
      },
      {
        title: 'Invoices',
        path: '/dashboard/invoices',
        icon: <BillIcon size="20" />,
      },
    ],
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <SettingsIcon />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <header>
        <div className={styles.user}>
          <Image
            className={styles.userImage}
            src="/noavatar.png"
            alt=""
            width="50"
            height="50"
          />
          <div className={styles.userDetail}>
            <h3 className={styles.username}>Susana Abdel Salam</h3>
            <small className={styles.userTitle}>CEO & Tour Manager</small>
          </div>
        </div>
      </header>
      <ul className={styles.list}>
        {menuList.map((cat) => (
          <li key={cat.title}>
            <div className={styles.label}>
              <small className={styles.cat}>{cat.title}</small>
            </div>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <LogoutIcon />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
