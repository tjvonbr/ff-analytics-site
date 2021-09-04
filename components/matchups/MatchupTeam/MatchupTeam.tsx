import styles from "./MatchupTeam.module.css";

type MatchupTeamProps = {
  team: any;
};

const MatchupTeam = ({ team }: MatchupTeamProps) => {
  const { points, starters, starters_points } = team;

  const findHighestScorer = () => {
    let highestScore = starters_points[0];
    let player = starters[0];

    for (let i = 1; i < starters_points.length; i++) {
      if (starters_points[i] > highestScore) {
        highestScore = starters_points[i];
        player = starters[i];
      }
    }

    return [player, highestScore];
  };

  return (
    <div className={styles.container}>
      <div className={styles.teamContainer}>
        <p className={styles.teamName}>Bloomington Geto Boyz</p>
        <p className={styles.highestScorer}>
          {`High scorer: ${findHighestScorer()[0]} - ${findHighestScorer()[1]}`}
        </p>
      </div>
      <p className={styles.currentScore}>{points}</p>
    </div>
  );
};

export default MatchupTeam;
