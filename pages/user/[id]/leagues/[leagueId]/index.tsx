import { NextPage, GetServerSideProps } from "next";
import Link from "next/Link";
import axios from "axios";
import styles from "../../../../../styles/league.module.css";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const leagueId = context?.params?.leagueId;

  const response = await axios.get(
    `https://api.sleeper.app/v1/league/${leagueId}`
  );

  const league = response.data;
  console.log("LEAGUE", league);

  return {
    props: {
      league,
    },
  };
};

const Dashboard: NextPage = ({ league }) => {
  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
      <main>Main</main>
      <div className={styles.sidebar}>Sidebar</div>
      <div className={styles.main}>Content 1</div>
      <div className={styles.main}>Content 2</div>
      <div className={styles.main}>Content 3</div>
      <footer>Footer</footer>
    </div>
  );
};

export default Dashboard;
