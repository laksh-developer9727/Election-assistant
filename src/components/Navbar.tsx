import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} glass-card`}>
      <div className={`container ${styles.navContent}`}>
        <Link href="/" className={styles.logo}>
          Election<span>Assistant</span>
        </Link>
        <div className={styles.navLinks}>
          <Link href="/timeline">Timeline</Link>
          <Link href="/chat">AI Chat</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/login" className={styles.btnPrimary}>Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
