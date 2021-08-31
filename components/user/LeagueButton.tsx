import styles from "./LeagueButton.module.css";
import { useRouter } from "next/dist/client/router";

const LeagueButton = ({ league, userId }) => {
  const router = useRouter();

  return (
    <div
      className={styles.container}
      onClick={() =>
        router.push({
          pathname: `leagues/[leagueId]`,
          query: { id: userId, leagueId: league.league_id },
        })
      }
    >
      <div className={styles.innerContainer}>
        <div className={styles.nameContainer}>
          <p className={styles.name}>
            <span className={styles.category}>League name: </span>
            {league.name}
          </p>
          <p style={{ color: "gray" }}>{league.season}</p>
        </div>
        <div className={styles.nameContainer}>
          <p>Teams: {league.total_rosters}</p>
          <p>Status: {league.status}</p>
        </div>
      </div>
    </div>
  );
};

export default LeagueButton;
