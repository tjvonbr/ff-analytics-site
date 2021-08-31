import LeagueButton from "../../../components/user/LeagueButton";
import { NextPage, GetServerSideProps } from "next";
import axios from "axios";
import styles from "../../../styles/Dashboard.module.css";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userId = context?.params?.id;

  const response = await axios.get(
    `https://api.sleeper.app/v1/user/${userId}/leagues/nfl/2021`
  );

  const leagues = response.data;

  return {
    props: {
      leagues,
    },
  };
};

const User: NextPage = ({ leagues }) => {
  console.log(leagues);

  return (
    <div className={styles.container}>
      <h1>Your Sleeper fantasy football leagues:</h1>
      {leagues.map((league: any) => (
        <LeagueButton key={league.league_id} league={league} />
      ))}
    </div>
  );
};

export default User;
