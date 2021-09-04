import Matchup from "../Matchup/Matchup";
import styles from "./MatchupsContainer.module.css";

const MatchupContainer = ({ matchups, users }) => {
  const repurposedMatchups = [];
  let i = 1;

  while (i <= 6) {
    let matchupTeams = matchups.filter((matchup) => matchup.matchup_id === i);

    repurposedMatchups.push(matchupTeams);
    i++;
  }

  return (
    <div className={styles.matchupsContainer}>
      {repurposedMatchups.map((matchup, idx) => {
        return <Matchup key={idx.toString()} matchup={matchup} />;
      })}
    </div>
  );
};

export default MatchupContainer;
