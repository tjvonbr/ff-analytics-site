import { NextPage, GetServerSideProps } from "next";
import DashboardWidget from "../../../../../components/dashboard/DashboardWidget/DashboardWidget";
import Header from "../../../../../components/dashboard/Header/Header";
import styles from "../../../../../styles/league.module.css";
import axios from "axios";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const leagueId = context?.params?.leagueId;
  const week = "1";
  const members = [];

  const response = await axios.get(
    `https://api.sleeper.app/v1/league/${leagueId}`
  );

  const other = await axios.get(
    `https://api.sleeper.app/v1/league/${leagueId}/matchups/${week}`
  );

  const playersRes = await axios.get("https://api.sleeper.app/v1/players/nfl");

  const league = response.data;

  const matchups = other.data;

  const players = playersRes.data;

  return {
    props: {
      league,
      matchups,
      players,
    },
  };
};

const Dashboard: NextPage = ({ league, matchups, players }: any) => {
  console.log(players);
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Header />
        <div className={styles.navigation}>
          <h1>{league.name}</h1>
          <h3>
            {league.season} {`${league.total_rosters}-Team Keeper League`}
          </h3>
        </div>
        <DashboardWidget matchups={matchups} />
      </div>
    </div>
  );
};

export default Dashboard;
