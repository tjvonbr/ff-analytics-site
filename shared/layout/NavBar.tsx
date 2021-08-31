import Link from "next/Link";

const NavBar = ({ styles }) => {
  return (
    <nav className={styles.styles}>
      <Link href="/">
        <a>Home</a>
      </Link>
    </nav>
  );
};

export default NavBar;
