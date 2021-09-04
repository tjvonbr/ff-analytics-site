import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <p className={styles.logo}>DeepSleep</p>
      <div className={styles.navigationContainer}>
        <p className={styles.navButton}>About</p>
        <p className={styles.navButton}>Contact</p>
        <p className={styles.navButton}>Sleeper</p>
      </div>
      <button className={styles.loginButton}>Login</button>
    </div>
  );
};

export default Header;
